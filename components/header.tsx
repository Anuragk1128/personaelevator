"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY <= 4)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 w-full border-b transition-colors"
      style={{
        backgroundColor: atTop ? "transparent" : "#ffffff",
        color: atTop ? "var(--rotator-contrast)" : undefined,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div
          className="hidden md:flex items-center justify-between py-2 text-sm border-b transition-colors"
          style={{ color: atTop ? "var(--rotator-contrast)" : undefined }}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (934) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>personaelevator@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Persona Elevator logo"
              width={48}
              height={48}
              className="h-16 w-16"
              priority
            />
            <span className="font-bold text-xl">Persona Elevator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors font-medium"
                style={{ color: atTop ? "var(--rotator-contrast)" : undefined }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
            >
              Get Quote
            </Button>
            <Button className="hover:bg-cyan-600 hover:text-white">
              Emergency Service
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                    >
                      Get Quote
                    </Button>
                    <Button className="w-full hover:bg-cyan-600 hover:text-white">Emergency Service</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

