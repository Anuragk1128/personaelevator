import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Learn more about Persona Elevator, our mission, our team, and how we deliver reliable lift services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
