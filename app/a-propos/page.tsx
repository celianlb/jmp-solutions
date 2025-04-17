import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Clock, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: <Shield className="h-8 w-8 text-primary/70" />,
    title: "Qualité",
    description:
      "Nous nous engageons à fournir des services de la plus haute qualité, en utilisant des produits et des équipements de premier ordre.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary/70" />,
    title: "Réactivité",
    description:
      "Nous intervenons rapidement, sous 48h maximum, pour répondre à vos besoins urgents.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary/70" />,
    title: "Expertise",
    description:
      "Notre équipe est composée de techniciens qualifiés et expérimentés, formés aux dernières technologies.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary/70" />,
    title: "Fiabilité",
    description:
      "Nous tenons nos promesses et respectons nos engagements, pour votre tranquillité d'esprit.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div
          className="relative bg-cover bg-center py-32 text-white"
          style={{ backgroundImage: "url(/about/about-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-light mb-6 leading-tight">
                Votre partenaire
                <span className="font-semibold italic mx-2 relative block mt-2">
                  de confiance
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
              <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl">
                JMP Solutions, votre partenaire de confiance pour l'installation,
                l'entretien et la réparation de piscines, spas, hammams et saunas
                depuis 5 ans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/jmp-logo.png"
                alt="L'équipe JMP Solutions"
                width={816}
                height={730}
              />
            </div>
            <div>
              <h2 className="text-4xl font-light mb-4 leading-tight">
                Notre
                <span className="font-semibold italic mx-2 relative">
                  histoire
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
              <p className="text-lg text-muted-foreground mb-6">
                Fondée il y a 5 ans, JMP Solutions est née de la passion pour le
                bien-être et de l'expertise technique de son fondateur. Notre
                mission est de fournir des services de qualité pour tous vos
                équipements de bien-être aquatique.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Au fil des années, nous avons développé une expertise reconnue
                dans l'installation, l'entretien et la réparation de piscines,
                spas, hammams et saunas. Notre équipe de techniciens qualifiés
                intervient dans toute la France pour vous offrir un service
                rapide et efficace.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Garantie décennale</h3>
                  <p className="text-muted-foreground">
                    Nous offrons une garantie décennale sur nos installations
                    pour votre tranquillité d'esprit.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Techniciens certifiés</h3>
                  <p className="text-muted-foreground">
                    Notre équipe est composée de professionnels formés et
                    certifiés dans leur domaine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 leading-tight">
              Nos
              <span className="font-semibold italic mx-2 relative">
                valeurs
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nos valeurs guident chacune de nos actions et nous permettent de
              vous offrir un service d'excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Notre équipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les experts qui font de JMP Solutions votre partenaire
              de confiance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/60" />
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5 bg-repeat" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-light mb-4 leading-tight">
              Prêt à
              <span className="font-semibold italic mx-2 relative">
                travailler avec nous
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
