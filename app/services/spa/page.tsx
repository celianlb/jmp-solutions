import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "Nettoyage de spa",
    description: "Nettoyage complet pour tous types de spas.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Installation de spa",
    description: "Installation professionnelle de votre spa.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Dépannage et entretien",
    description: "Intervention rapide sur tous types de spas.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Contrats annuels d'entretien",
    description: "Plusieurs passages dans l'année pour un entretien optimal.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Analyse et traitement de l'eau",
    description: "Recommandations personnalisées pour une eau saine.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Entretien hivernal",
    description: "Préparation de votre spa pour l'hiver et remise en service.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const repairServices = [
  "Remplacement / installation de pompe de massage",
  "Remplacement / installation de blower",
  "Remplacement / installation de pompe de circulation",
  "Remplacement / installation de traitement d'eau automatique",
  "Réparation de fuite",
  "Réparation de buse",
]

export default function SpaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Services Spa Professionnels</h1>
            <p className="text-lg mb-6 text-blue-50">
              Installation, entretien et réparation pour tous types de spas. Notre équipe d'experts intervient dans
              toute la France sous 48h maximum.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nos services spa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour l'entretien, la réparation et l'installation de votre spa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Réparation de spa"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Services de réparation et de remplacement</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous proposons une gamme complète de services de réparation et de remplacement pour tous les équipements
                de votre spa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repairServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Contracts */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Contrats d'entretien annuels</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Optez pour un contrat d'entretien annuel pour garder votre spa en parfait état toute l'année.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Formule Basique</CardTitle>
                <CardDescription>Pour les spas à usage occasionnel</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>2 visites par an</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Nettoyage complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Analyse de l'eau</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-600 shadow-lg">
              <CardHeader>
                <CardTitle>Formule Standard</CardTitle>
                <CardDescription>Pour les spas à usage régulier</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>4 visites par an</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Nettoyage complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Analyse et traitement de l'eau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contrôle des équipements</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Formule Premium</CardTitle>
                <CardDescription>Pour les spas à usage intensif</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>6 visites par an</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Nettoyage complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Analyse et traitement de l'eau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contrôle et entretien des équipements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Assistance prioritaire</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Besoin d'un service pour votre spa ?</h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

