"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    poolDimensions: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          poolDimensions: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
              Contactez-nous
            </h1>
            <p className="text-lg mb-6 text-blue-50">
              Besoin d'un devis ou d'informations supplémentaires ? Notre équipe
              est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Téléphone</h3>
                    <p className="text-muted-foreground mb-1">
                      Disponible 24h/24 et 7j/7
                    </p>
                    <a
                      href="tel:+33123456789"
                      className="text-blue-600 font-medium"
                    >
                      06 11 62 18 26
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground mb-1">
                      Réponse sous 24h
                    </p>
                    <a
                      href="mailto:contact.jmpsolution@gmail.com"
                      className="text-blue-600 font-medium"
                    >
                      contact.jmpsolution@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Zone d'intervention</h3>
                    <p className="text-muted-foreground">
                      Nous intervenons dans toute la France
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Obtenir un devis gratuit et sans engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Demander des informations sur nos services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Planifier une intervention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Demander des conseils d'entretien</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Card className="w-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    Formulaire de
                    <span className="font-semibold italic mx-2 relative">
                      contact
                      <svg
                        className="absolute -bottom-1 left-0 w-full"
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
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Remplissez le formulaire ci-dessous et nous vous
                    recontacterons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <Card className="w-full text-center shadow-lg">
                      <CardHeader>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <CheckCircle className="h-6 w-6 text-emerald-600" />
                        </div>
                        <CardTitle className="text-2xl font-light">
                          Message
                          <span className="font-semibold italic mx-2 relative">
                            envoyé
                            <svg
                              className="absolute -bottom-1 left-0 w-full"
                              viewBox="0 0 200 8"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                className="text-emerald-400"
                              />
                            </svg>
                          </span>
                          !
                        </CardTitle>
                        <CardDescription className="text-slate-600 mt-2">
                          Nous vous recontacterons dans les plus brefs délais.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service demandé</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleSelectChange("service", value)
                          }
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="piscine">
                              Services Piscine
                            </SelectItem>
                            <SelectItem value="spa">Services Spa</SelectItem>
                            <SelectItem value="hammam">
                              Services Hammam
                            </SelectItem>
                            <SelectItem value="sauna">
                              Services Sauna
                            </SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {formData.service === "piscine" && (
                        <div className="space-y-2">
                          <Label htmlFor="poolDimensions">
                            Dimensions de la piscine (si applicable)
                          </Label>
                          <Input
                            id="poolDimensions"
                            name="poolDimensions"
                            placeholder="Ex: 8m x 4m"
                            value={formData.poolDimensions}
                            onChange={handleChange}
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Bonjour, je souhaite un devis pour..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary/90 hover:bg-primary transition-colors duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Envoi en cours...</>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Envoyer
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
