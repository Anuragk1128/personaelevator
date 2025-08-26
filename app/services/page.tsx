import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Services</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore our installation, maintenance, modernization, and emergency repair services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
