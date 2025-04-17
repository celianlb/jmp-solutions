import {
  AlertTriangle,
  Brush,
  CalendarCheck,
  CheckCircle,
  Droplet,
  Settings,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Nettoyage de spa",
    description: "Nettoyage complet pour tous types de spas.",
    icon: Brush,
  },
  {
    title: "Installation de spa",
    description: "Installation professionnelle de votre spa.",
    icon: Wrench,
  },
  {
    title: "Dépannage et entretien",
    description: "Intervention rapide sur tous types de spas.",
    icon: CalendarCheck,
  },
  {
    title: "Contrats annuels d'entretien",
    description: "Plusieurs passages dans l'année pour un entretien optimal.",
    icon: Droplet,
  },
  {
    title: "Analyse et traitement de l'eau",
    description: "Recommandations personnalisées pour garantir une eau saine.",
    icon: Settings,
  },
  {
    title: "Entretien hivernal",
    description: "Préparation de votre spa pour l'hiver et remise en service.",
    icon: AlertTriangle,
  },
];

const maintenanceServices = [
  "Nettoyage complet",
  "Analyse de l'eau",
  "Vérification des équipements",
  "Détartrage",
  "Traitement de l'eau",
  "Maintenance préventive",
];

export default function SpaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div
          className="relative bg-cover bg-center py-32 text-white"
          style={{ backgroundImage: "url(/spa/spa.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-800/50" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-light mb-6 leading-tight">
                L'harmonie du
                <span className="font-semibold italic mx-2 relative block mt-2">
                  bien-être aquatique
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
              <p className="text-xl mb-8 text-cyan-50/90 leading-relaxed max-w-2xl">
                Découvrez notre expertise en installation et maintenance de
                spas. Une équipe dévouée pour transformer votre espace en havre
                de paix.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-cyan-800 hover:bg-white transition-colors duration-300"
              >
                <Link href="/contact">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-start gap-4 flex flex-col justify-start mb-12">
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
            <p className="text-base text-gray-500 font-light max-w-2xl">
              Découvrez notre gamme complète de services pour l'entretien,
              l'installation et la réparation de votre spa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Repair Services */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-4 leading-tight">
                Une expertise
                <span className="font-semibold italic mx-2 relative">
                  technique complète
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
                Nos services de réparation assurent la longévité et la
                performance de votre spa. Nous intervenons rapidement pour tous
                types de pannes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {maintenanceServices.map((service: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group transition-transform duration-300 hover:translate-x-1"
                  >
                    <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                    <span className="text-slate-700">{service}</span>
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
                src="/spa/spa-repair.png"
                alt="Réparation Spa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
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
              Optez pour un contrat d'entretien annuel et profitez d'un spa en
              parfait état tout au long de l'année.
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
                    <span className="text-slate-700">Traitement de l'eau</span>
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
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
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
          <p className="text-xl text-slate-200/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et
            découvrez comment nous pouvons enrichir votre expérience spa.
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
