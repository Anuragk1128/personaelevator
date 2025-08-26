import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-6">
            Get in touch for quotes, service requests, or general inquiries. We’re here to help 24/7.
          </p>
          <div className="space-y-2 text-foreground">
            <p><strong>Phone:</strong> (934) 768824 </p>
            <p><strong>Email:</strong> support@PersonaElevator.com</p>
            <p><strong>Address:</strong> The Park,Muzaffarpur</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
