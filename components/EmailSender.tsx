"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  poolDimensions?: string;
  message: string;
}) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      poolDimensions,
      message,
    } = formData;

    const data = await resend.emails.send({
      from: "JMP Solutions <onboarding@resend.dev>", // Utilisation de l'adresse de test Resend
      to: "celianlebacle06@gmail.com",
      subject: `Nouvelle demande de contact - ${firstName} ${lastName}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Service demandé:</strong> ${service}</p>
        ${poolDimensions ? `<p><strong>Dimensions de la piscine:</strong> ${poolDimensions}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Réponse de Resend:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Erreur Resend:", error);
    return { success: false, error };
  }
}
