import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Clock, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Fondateur & Directeur",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Plus de 10 ans d'expérience dans le secteur des piscines et du bien-être.",
  },
  {
    name: "Marie Martin",
    role: "Responsable Technique",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Experte en installation et maintenance de piscines, spas et hammams.",
  },
  {
    name: "Pierre Durand",
    role: "Technicien Spécialisé",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Spécialiste en réparation et dépannage de tous types d'équipements.",
  },
  {
    name: "Sophie Leroy",
    role: "Service Client",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "À votre écoute pour répondre à toutes vos questions et demandes.",
  },
];

const values = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Qualité",
    description:
      "Nous nous engageons à fournir des services de la plus haute qualité, en utilisant des produits et des équipements de premier ordre.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Réactivité",
    description:
      "Nous intervenons rapidement, sous 48h maximum, pour répondre à vos besoins urgents.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Expertise",
    description:
      "Notre équipe est composée de techniciens qualifiés et expérimentés, formés aux dernières technologies.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    title: "Fiabilité",
    description:
      "Nous tenons nos promesses et respectons nos engagements, pour votre tranquillité d'esprit.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
              Qui sommes-nous ?
            </h1>
            <p className="text-lg mb-6 text-blue-50">
              JMP Solutions, votre partenaire de confiance pour l'installation,
              l'entretien et la réparation de piscines, spas, hammams et saunas
              depuis 5 ans.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Notre histoire
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
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos valeurs guident chacune de nos actions et nous permettent de
              vous offrir un service d'excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Prêt à travailler avec nous ?
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
