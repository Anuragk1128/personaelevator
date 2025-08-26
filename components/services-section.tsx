import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Settings, Zap, Shield, Clock, Users } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Lift Installation",
    description: "Professional installation of passenger, freight, and accessibility lifts for all building types.",
    features: ["Commercial & Residential", "Code Compliance", "Quality Assurance"],
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Comprehensive preventive maintenance programs to keep your lifts running safely and efficiently.",
    features: ["Scheduled Inspections", "Preventive Care", "Performance Optimization"],
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "24/7 emergency response for critical lift breakdowns and safety issues.",
    features: ["24/7 Availability", "Rapid Response", "Expert Technicians"],
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Thorough safety inspections and certifications to meet regulatory requirements.",
    features: ["Regulatory Compliance", "Safety Certifications", "Detailed Reports"],
  },
  {
    icon: Clock,
    title: "Modernization",
    description: "Upgrade older lift systems with modern technology and improved efficiency.",
    features: ["Technology Upgrades", "Energy Efficiency", "Enhanced Safety"],
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Expert consultation for new construction projects and lift system planning.",
    features: ["Project Planning", "Technical Advice", "Cost Optimization"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Comprehensive Lift Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From installation to maintenance, we provide complete lift solutions for your building needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
