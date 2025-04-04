import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Contrôle de fonctionnement",
    description:
      "Vérification complète du système pour assurer un fonctionnement optimal.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Nettoyage",
    description:
      "Nettoyage professionnel de votre hammam pour une hygiène parfaite.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Entretien régulier",
    description: "Maintenance périodique pour prévenir les problèmes.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Détartrage",
    description:
      "Nettoyage des résistances et conduits avec un produit adapté.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Vérification des filtres et électrovannes",
    description: "Nettoyage ou remplacement si nécessaire.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Contrôle des équipements",
    description:
      "Vérification de l'éclairage, des portes, joints et buses de diffusion.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const maintenanceServices = [
  "Nettoyage approfondi avec un produit spécifique anti-moisissures",
  "Vérification des systèmes électriques et de la ventilation",
  "Test du bon fonctionnement des commandes et de la température",
  "Inspection complète du générateur de vapeur",
  "Vérification des circuits d'eau et de vapeur",
  "Remplacement des pièces usées si nécessaire",
];

export default function HammamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
              Services Hammam Professionnels
            </h1>
            <p className="text-lg mb-6 text-blue-50">
              Entretien, nettoyage et contrôle de fonctionnement pour vos
              hammams. Notre équipe d'experts intervient dans toute la France
              sous 48h maximum.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Nos services hammam
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour l'entretien et le
              contrôle de votre hammam.
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

      {/* Maintenance Services */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Entretien professionnel
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous proposons des services d'entretien hebdomadaire, mensuel et
                annuel pour garantir la longévité et le bon fonctionnement de
                votre hammam.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {maintenanceServices.map((service, index) => (
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Entretien hammam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Formules d'entretien
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez la formule d'entretien qui correspond le mieux à vos
              besoins.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Entretien Mensuel</CardTitle>
                <CardDescription>Pour un usage régulier</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Nettoyage approfondi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Vérification des systèmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Test de fonctionnement</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-600 shadow-lg">
              <CardHeader>
                <CardTitle>Entretien Trimestriel</CardTitle>
                <CardDescription>Pour un usage modéré</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Nettoyage approfondi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Vérification des systèmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Test de fonctionnement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Détartrage</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Entretien Annuel</CardTitle>
                <CardDescription>Pour un usage occasionnel</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Nettoyage approfondi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Vérification complète</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Détartrage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Inspection du générateur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Remplacement des pièces usées</span>
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Besoin d'un service pour votre hammam ?
          </h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans
            engagement.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
