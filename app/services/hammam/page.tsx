import { Tag } from "@/components/tag";
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
    icon: CheckCircle,
  },
  {
    title: "Nettoyage Professionnel",
    description:
      "Nettoyage professionnel pour maintenir l'hygiène de votre hammam.",
    icon: CheckCircle,
  },
  {
    title: "Entretien Régulier",
    description: "Maintenance périodique pour prévenir tout dysfonctionnement.",
    icon: CheckCircle,
  },
  {
    title: "Détartrage",
    description: "Nettoyage et détartrage des surfaces et conduits.",
    icon: CheckCircle,
  },
  {
    title: "Vérification des filtres et électrovannes",
    description:
      "Test et nettoyage (ou remplacement) des filtres et électrovannes.",
    icon: CheckCircle,
  },
  {
    title: "Contrôle des équipements",
    description: "Inspection des équipements pour une performance optimale.",
    icon: CheckCircle,
  },
];

const maintenanceServices = [
  "Nettoyage approfondi avec un produit spécifique",
  "Vérification des systèmes électriques et de chauffage",
  "Test du bon fonctionnement des commandes",
  "Inspection complète des conduits et générateurs",
  "Vérification des circuits d'eau et de vapeur",
  "Remplacement des pièces usées si nécessaire",
];

export default function HammamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10 flex flex-col md:flex-row items-center">
          <div className="max-w-3xl md:w-1/2">
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
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/hammam/hammam.png"
              alt="Service Hammam"
              width={500}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-start gap-4 flex flex-col justify-start mb-12">
            <Tag picto="♨️" title="Nos services hammam" />
            <p className="text-base text-gray-500 font-light max-w-2xl">
              Découvrez notre gamme complète de services pour l'entretien et le
              contrôle de votre hammam.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-start">
                  <service.icon className="h-8 w-8 text-blue-300" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-medium text-blue-950">
                    {service.title}
                  </CardTitle>
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
            <div className="flex flex-col gap-8">
              <Tag picto="🛠️" title="Services de maintenance" />
              <p className="text-base text-gray-500 font-light">
                Nos services de maintenance assurent la longévité et la
                performance de votre hammam. Nous proposons des interventions
                ponctuelles ou régulières en fonction de vos besoins.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="w-fit">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/hammam/hammam-repair.png"
                alt="Maintenance Hammam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Contracts */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <Tag
              picto="📝"
              title="Contrats d'entretien annuels"
              className="mx-auto mb-4"
            />
            <p className="text-base text-gray-500 font-light max-w-2xl mx-auto">
              Optez pour un contrat d'entretien annuel pour garder votre hammam
              en parfait état toute l'année.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Formule Essentielle</CardTitle>
                <CardDescription>Pour un usage occasionnel</CardDescription>
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
                    <span>Inspection des systèmes</span>
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
            <Card className="text-center border-blue-600 shadow-lg">
              <CardHeader>
                <CardTitle>Formule Confort</CardTitle>
                <CardDescription>Pour un usage régulier</CardDescription>
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
                    <span>Inspection en profondeur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Détartrage complet</span>
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
                <CardDescription>Pour un usage intensif</CardDescription>
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
                    <span>Inspection approfondie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contrôle complet des équipements</span>
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
