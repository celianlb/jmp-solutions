import { AlertTriangle, CheckCircle, Settings, Wrench } from "lucide-react";
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
    title: "Installation de sauna",
    description: "Installation professionnelle de saunas sur mesure.",
    icon: Wrench,
  },
  {
    title: "Entretien de sauna",
    description:
      "Services d'entretien régulier pour maintenir votre sauna en parfait état.",
    icon: CheckCircle,
  },
  {
    title: "Installation de four à sauna",
    description:
      "Installation et remplacement de fours à sauna de toutes marques.",
    icon: Settings,
  },
  {
    title: "Remplacement des pierres",
    description: "Remplacement des pierres pour une chaleur optimale.",
    icon: AlertTriangle,
  },
];

const installationServices = [
  "Consultation personnalisée",
  "Installation professionnelle",
  "Service après-vente",
];

const maintenanceServices = [
  "Nettoyage complet du sauna",
  "Vérification du système de chauffage",
  "Inspection des éléments électriques",
  "Remplacement de pièces usées",
  "Nettoyage des conduits et échange d'air",
];

export default function SaunaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div
          className="relative bg-cover bg-center py-32 text-white"
          style={{ backgroundImage: "url(/sauna/sauna-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/50" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-light mb-6 leading-tight">
                L'expertise du
                <span className="font-semibold italic mx-2 relative block mt-2">
                  bien-être thermique
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
              <p className="text-xl mb-8 text-amber-50/90 leading-relaxed max-w-2xl">
                Installation, entretien et réparation pour tous types de saunas.
                Notre équipe d'experts intervient dans toute la France sous 48h
                maximum.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-amber-800 hover:bg-white transition-colors duration-300"
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
              Découvrez notre gamme complète de services pour l'installation,
              l'entretien et la réparation de votre sauna.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-left">
                  <service.icon className="h-8 w-8 text-primary/70" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-medium text-slate-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-4 leading-tight">
                Une installation
                <span className="font-semibold italic mx-2 relative">
                  sur mesure
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
                Nous vous accompagnons dans votre projet d'installation de
                sauna, de la conception à la mise en service.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {installationServices.map((service: string, index: number) => (
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
                className="w-fit bg-primary/90 hover:bg-primary transition-colors duration-300 mt-8"
              >
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <Image
                src="/sauna/sauna-installation.jpg"
                alt="Installation de sauna"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-4 leading-tight">
                Une maintenance
                <span className="font-semibold italic mx-2 relative">
                  régulière
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
                Nous proposons des services de maintenance réguliers pour
                garantir la longévité et les performances de votre sauna.
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
                className="w-fit bg-primary/90 hover:bg-primary transition-colors duration-300 mt-8"
              >
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <Image
                src="/sauna/sauna-maintenance.jpg"
                alt="Maintenance sauna"
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
      <section className="py-16 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 leading-tight">
              Contrats de
              <span className="font-semibold italic mx-2 relative">
                maintenance
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
              Optez pour un contrat d'entretien annuel et profitez d'un sauna en
              parfait état tout au long de l'année.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Formule Basique</CardTitle>
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
                    <span>Entretien complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contrôle des éléments chauffants</span>
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
                    <span>Entretien approfondi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contrôle du système électrique</span>
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
                    <span>Entretien complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contrôle complet et suivi personnalisé</span>
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/60" />
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-light mb-4 leading-tight">
              Besoin d'un service pour
              <span className="font-semibold italic mx-2 relative">
                votre sauna
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
              ?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mt-4 mb-8">
              Contactez-nous dès aujourd'hui pour un devis gratuit et sans
              engagement.
            </p>
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 transition-colors duration-300"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
