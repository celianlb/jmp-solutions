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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div
          className="relative bg-cover bg-center py-32 text-white"
          style={{ backgroundImage: "url(/hammam/hammam.png)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/50" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-light mb-6 leading-tight">
                L'essence du
                <span className="font-semibold italic mx-2 relative block mt-2">
                  bien-être oriental
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      className="text-white/40"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl mb-8 text-slate-100/90 leading-relaxed max-w-2xl">
                Plongez dans un univers de détente absolue. Notre expertise en
                entretien et maintenance de hammams vous garantit une expérience
                authentique et sereine.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-slate-800 hover:bg-white transition-colors duration-300"
              >
                <Link href="/contact">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-light mt-6 mb-4 leading-tight">
              Un savoir-faire
              <span className="font-semibold italic mx-2 relative">
                ancestral et moderne
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    className="text-primary/40"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
              Notre expertise allie traditions orientales et technologies
              modernes pour vous offrir un service d'excellence adapté à votre
              hammam.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group p-6 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm border-slate-200/50"
              >
                <div className="flex items-center justify-start mb-4">
                  <service.icon className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-light text-slate-800 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-4xl font-light mt-6 mb-4 leading-tight">
                  Expertise et
                  <span className="font-semibold italic mx-2 relative">
                    maintenance dédiée
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary/40"
                      />
                    </svg>
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 mb-8">
                  Nos services de maintenance assurent la longévité et la
                  performance de votre hammam. Nous proposons des interventions
                  ponctuelles ou régulières en fonction de vos besoins.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {maintenanceServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group transition-transform duration-300 hover:translate-x-1"
                  >
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                    <span className="text-slate-600">{service}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="w-fit bg-primary/90 hover:bg-primary transition-colors duration-300 mt-4"
              >
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <Image
                src="/hammam/hammam-repair.png"
                alt="Maintenance Hammam"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Contracts */}
      <section className="py-16">
        <div className="container relative">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-light mb-4 leading-tight">
              Un entretien
              <span className="font-semibold italic mx-2 relative">
                minutieux et régulier
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    className="text-primary/40"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
              Chaque visite est une occasion de garantir la pérennité et
              l'authenticité de votre espace de bien-être.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-light">
                  Formule Essentielle
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Pour un usage occasionnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-left mb-8">
                  {maintenanceServices.slice(0, 4).map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-primary/90 hover:bg-primary transition-colors duration-300"
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-light">
                  Formule Confort
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Pour un usage régulier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-left mb-8">
                  {maintenanceServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-primary/90 hover:bg-primary transition-colors duration-300"
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-light">
                  Formule Premium
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Pour un usage intensif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-left mb-8">
                  {[
                    ...maintenanceServices,
                    "Assistance prioritaire",
                    "Interventions illimitées",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-primary/90 hover:bg-primary transition-colors duration-300"
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative text-center">
          <h2 className="text-4xl font-light mb-6 leading-tight">
            Sublimez votre
            <span className="font-semibold italic mx-2 relative">
              espace de détente
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  className="text-white/40"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-slate-200/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et
            découvrez comment nous pouvons enrichir votre expérience hammam.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white/90 backdrop-blur-sm text-slate-800 hover:bg-white transition-colors duration-300"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
