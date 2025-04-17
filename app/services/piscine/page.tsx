import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  Brush,
  CalendarCheck,
  CheckCircle,
  Droplet,
  Package,
  Settings,
  Snowflake,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Nettoyage de piscine",
    description: "Nettoyage complet pour piscines à coque, béton ou liner.",
    icon: Brush,
  },
  {
    title: "Dépannage et entretien",
    description: "Intervention rapide sur tous types de piscines.",
    icon: Wrench,
  },
  {
    title: "Contrats annuels d'entretien",
    description: "Plusieurs passages dans l'année pour un entretien optimal.",
    icon: CalendarCheck,
  },
  {
    title: "Analyse et traitement de l'eau",
    description: "Recommandations personnalisées pour une eau saine.",
    icon: Droplet,
  },
  {
    title: "Contrôles et révisions",
    description:
      "Maintenance du matériel de nettoyage automatique, électrique ou hydraulique.",
    icon: Settings,
  },
  {
    title: "Entretien hivernal",
    description:
      "Préparation de votre piscine pour l'hiver et remise en service au printemps.",
    icon: Snowflake,
  },
  {
    title: "Installation et remplacement",
    description:
      "Filtres à sable, pompes, systèmes de traitement d'eau et chauffage.",
    icon: Package,
  },
  {
    title: "Réparation de fuites",
    description: "Détection et réparation de fuites dans votre piscine.",
    icon: AlertTriangle,
  },
];

const installationServices = [
  "Remplacement / installation de filtre à sable",
  "Remplacement / installation de pompe de circulation",
  "Remplacement / installation de pompe à chaleur",
  "Remplacement / installation de traitement d'eau automatique",
  "Installation ou réparation de liner",
  "Réparation de fuite",
  "Remplacement / installation de skimmer",
  "Remplacement / installation de réchauffeur",
];

export default function PiscinePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div
          className="relative bg-cover bg-center py-32 text-white"
          style={{ backgroundImage: "url(/piscine/piscine.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-light mb-6 leading-tight">
                L'expertise
                <span className="font-semibold italic mx-2 relative block mt-2">
                  pisciniste à votre service
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
              <p className="text-xl mb-8 text-blue-50/90 leading-relaxed max-w-2xl">
                Entretien, réparation et installation pour tous types de
                piscines. Notre équipe d'experts intervient dans toute la France
                sous 48h maximum.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-blue-600 hover:bg-white transition-colors duration-300"
              >
                <Link href="/contact">Demander un devis</Link>
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
              Une expertise
              <span className="font-semibold italic mx-2 relative">
                complète et professionnelle
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
              Notre équipe d'experts vous accompagne dans l'entretien et
              l'optimisation de votre piscine pour une expérience unique.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-left">
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

      {/* Installation Services */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-4xl font-light mt-6 mb-4 leading-tight">
                  Installation et
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
                  Nos services d'installation et de remplacement assurent la
                  longévité et la performance de votre piscine. Nous proposons
                  des interventions ponctuelles ou régulières en fonction de vos
                  besoins.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {installationServices.map((service, index) => (
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
                src="/piscine/piscine-cleaning.jpg"
                alt="Installation Piscine"
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
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="mb-16 max-w-3xl mx-auto text-center">
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
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Optez pour un contrat d'entretien annuel et profitez d'une piscine
              en parfait état tout au long de l'année.
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
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">2 visites par an</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Nettoyage complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Inspection des systèmes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Remplacement des pièces usées
                    </span>
                  </li>
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
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">4 visites par an</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Nettoyage complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Inspection en profondeur
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Détartrage complet</span>
                  </li>
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
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">6 visites par an</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Nettoyage complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Inspection approfondie
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Contrôle complet des équipements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Assistance prioritaire
                    </span>
                  </li>
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
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative text-center">
          <h2 className="text-4xl font-light mb-6 leading-tight">
            Sublimez votre
            <span className="font-semibold italic mx-2 relative">
              espace aquatique
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
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et
            découvrez comment nous pouvons enrichir votre expérience piscine.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white/90 backdrop-blur-sm text-blue-800 hover:bg-white transition-colors duration-300"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
