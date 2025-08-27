"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/modern-elevator-installation-in-commercial-buildin.png",
    title: "Professional Lift Installation",
    subtitle: "Expert installation services for commercial and residential buildings",
    cta: "Get Installation Quote",
  },
  {
    image: "/technician-maintaining-elevator-system.png",
    title: "Comprehensive Maintenance",
    subtitle: "Keep your lifts running smoothly with our preventive maintenance programs",
    cta: "Schedule Maintenance",
  },
  {
    image: "/emergency-elevator-repair-service.png",
    title: "24/7 Emergency Repairs",
    subtitle: "Fast response times for critical lift breakdowns and emergencies",
    cta: "Emergency Service",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)


  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-primary/20 to-accent/20">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">{slide.subtitle}</p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons removed as requested */}

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? "bg-accent" : "bg-white/50"}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
