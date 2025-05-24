import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "Fluidra", logo: "/partenaires/fluidra.png" },
  { name: "Zodiac", logo: "/partenaires/zodiac.png" },
  { name: "Hydralians", logo: "/partenaires/hydralians.png" },
  { name: "Hayward", logo: "/partenaires/hayward.png" },
  { name: "Irrijardin", logo: "/partenaires/irrisjardin.png" },
  { name: "Würth", logo: "/partenaires/wurth.jpg" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/jmp-logo.png"
                alt="JMP Solutions Logo"
                width={40}
                height={40}
                className="h-12 w-12"
              />
              <span className="font-bold text-lg">JMP Solutions</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Expert en installation, entretien et réparation de piscines, spas,
              hammams et saunas dans toute la France.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>06 11 62 18 26</span>
              </a>
              <a
                href="mailto:contact.jmpsolution@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>contact.jmpsolution@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Intervention dans toute la France</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/piscine"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services Piscine
                </Link>
              </li>
              <li>
                <Link
                  href="/services/spa"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services Spa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hammam"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services Hammam
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sauna"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services Sauna
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="text-muted-foreground hover:text-primary"
                >
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Nos partenaires</h3>
            <div className="grid grid-cols-3 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center bg-white p-2 rounded"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`Logo ${partner.name}`}
                    width={100}
                    height={50}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} JMP Solutions. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
