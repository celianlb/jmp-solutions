import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Installation de sauna",
    description: "Installation professionnelle de saunas sur mesure.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Entretien de sauna",
    description:
      "Services d'entretien régulier pour maintenir votre sauna en parfait état.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Installation de four à sauna",
    description:
      "Installation et remplacement de fours à sauna de toutes marques.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Remplacement des pierres",
    description: "Remplacement des pierres de sauna pour une chaleur optimale.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const maintenanceServices = [
  "Nettoyage complet de l'intérieur du sauna",
  "Vérification du système électrique",
  "Contrôle du four et des éléments chauffants",
  "Inspection des bancs et des structures en bois",
  "Vérification du système de ventilation",
  "Remplacement des pièces usées si nécessaire",
];

export default function SaunaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
              Services Sauna Professionnels
            </h1>
            <p className="text-lg mb-6 text-blue-50">
              Installation, entretien et réparation pour tous types de saunas.
              Notre équipe d'experts intervient dans toute la France sous 48h
              maximum.
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
              Nos services sauna
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour l'installation,
              l'entretien et la réparation de votre sauna.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Installation Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Installation sauna"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Installation de sauna sur mesure
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous proposons des services d'installation de saunas sur mesure
                adaptés à vos besoins et à votre espace. Nos experts vous
                accompagnent de la conception à l'installation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Consultation personnalisée</h3>
                    <p className="text-muted-foreground">
                      Nous évaluons votre espace et discutons de vos besoins
                      pour concevoir le sauna idéal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">
                      Installation professionnelle
                    </h3>
                    <p className="text-muted-foreground">
                      Notre équipe qualifiée installe votre sauna avec précision
                      et dans les délais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Service après-vente</h3>
                    <p className="text-muted-foreground">
                      Nous assurons un suivi après l'installation pour garantir
                      votre satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Services d'entretien
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Un entretien régulier est essentiel pour maintenir votre sauna
                en parfait état et prolonger sa durée de vie. Nos services
                d'entretien comprennent :
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
                alt="Entretien sauna"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Besoin d'un service pour votre sauna ?
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
