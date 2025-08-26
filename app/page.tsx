import { Header } from "@/components/header"
import ThemeRotator from "@/components/theme-rotator"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Clock } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Years Experience", value: "20+" },
  { icon: Award, label: "Certified Technicians", value: "15" },
  { icon: Star, label: "Average Rating", value: "4.9" },
]

const testimonials = [
  {
    name: "Atul Ranjan",
    company: "The Park Complex",
    content:
      "Persona Elevator installed our new passenger lifts with exceptional professionalism. The project was completed on time and within budget.",
    rating: 5,
  },
  {
    name: "Mithilesh Kumar",
    company: "Residential Tower",
    content:
      "Their maintenance service is outstanding. We've had zero unexpected breakdowns since switching to Persona Elevator.",
    rating: 5,
  },
  {
    name: "Anand Raz",
    company: "Shopping Center",
    content:
      "Quick response time for emergency repairs. They saved us from a major disruption during peak shopping season.",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ThemeRotator />
      <Header />

      <main>
        <HeroCarousel />

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* About Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  About Persona Elevator
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Your Trusted Lift Service Partner</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  With over 20 years of experience in the lift industry, Persona Elevator has built a reputation for
                  excellence in installation, maintenance, and repair services. Our certified technicians ensure your
                  lifts operate safely and efficiently.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span>Certified and experienced technicians</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span>24/7 emergency response service</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span>Comprehensive maintenance programs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span>Full regulatory compliance</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/professional-elevator-technician-working-on-modern.png"
                  alt="Professional technician working on lift system"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
              Contact us today for a free consultation and quote for your lift service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
