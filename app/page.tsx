import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, CheckCircle, Clock, MapPin, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Services Piscine",
    description:
      "Nettoyage, entretien, dépannage et installation pour tous types de piscines.",
    href: "/services/piscine",
    image: "/asset/piscine.jpg",
  },
  {
    title: "Services Spa",
    description:
      "Installation, nettoyage et maintenance de spas pour particuliers et professionnels.",
    href: "/services/spa",
    image: "/asset/spa.jpg",
  },
  {
    title: "Services Hammam",
    description:
      "Entretien, nettoyage et contrôle de fonctionnement pour vos hammams.",
    href: "/services/hammam",
    image: "/asset/hammam.jpg",
  },
  {
    title: "Services Sauna",
    description:
      "Installation et entretien de saunas, remplacement des pierres et des fours.",
    href: "/services/sauna",
    image: "/asset/sauna.jpg",
  },
];

const partners = [
  { name: "Fluidra", logo: "/partenaires/fluidra.png" },
  { name: "Zodiac", logo: "/partenaires/zodiac.png" },
  { name: "Hydralians", logo: "/partenaires/hydralians.png" },
  { name: "Hayward", logo: "/partenaires/hayward.png" },
  { name: "Irrijardin", logo: "/partenaires/irrisjardin.png" },
  { name: "Würth", logo: "/partenaires/wurth.jpg" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-white text-blue-600">
                Disponible 24/7
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
                Expert en solutions pour piscines, spas et bien-être
              </h1>
              <p className="text-lg mb-6 text-blue-50">
                Installation, entretien et réparation de piscines, spas, hammams
                et saunas dans toute la France. Intervention sous 48h maximum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/services/piscine">Nos services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/asset/piscine-main.jpg"
                alt="Piscine JMP Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  Disponible 24h/24 et 7j/7
                </h3>
                <p className="text-muted-foreground">
                  Notre équipe est à votre service à tout moment pour répondre à
                  vos urgences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  Intervention dans toute la France
                </h3>
                <p className="text-muted-foreground">
                  Nous nous déplaçons partout en France pour vous offrir nos
                  services.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  Intervention sous 48h max
                </h3>
                <p className="text-muted-foreground">
                  Nous garantissons une intervention rapide pour tous vos
                  besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Nos services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour l'entretien et
              l'installation de vos équipements de bien-être.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={service.href}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Pourquoi nous faire confiance ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                JMP Solutions, c'est une équipe de techniciens qualifiés avec 5
                ans d'expérience dans le domaine des piscines, spas, hammams et
                saunas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Garantie décennale</h3>
                    <p className="text-muted-foreground">
                      Nous offrons une garantie décennale sur nos installations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Techniciens certifiés</h3>
                    <p className="text-muted-foreground">
                      Notre équipe est composée de professionnels formés et
                      certifiés.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">5 ans d'expérience</h3>
                    <p className="text-muted-foreground">
                      Nous avons l'expertise nécessaire pour répondre à tous vos
                      besoins.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/a-propos">En savoir plus sur nous</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/asset/trust.jpg"
                alt="Équipe JMP Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Nos partenaires
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous travaillons avec les meilleures marques du secteur pour vous
              garantir des produits de qualité.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`Logo ${partner.name}`}
                  width={100}
                  height={50}
                  className="h-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Prêt à améliorer votre espace de bien-être ?
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
