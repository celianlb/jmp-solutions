import { prisma } from "@/lib/prisma";
import { createHash, randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour générer un token sécurisé
function generateToken() {
  return randomBytes(32).toString("hex");
}

// Fonction pour hacher un token
function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

// Remplacer la fonction POST existante par celle-ci pour améliorer le débogage
export async function POST(request: Request) {
  try {
    // Au début de votre fonction POST
    console.log("NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email requis" }, { status: 400 });
    }

    console.log(`Demande de réinitialisation pour l'email: ${email}`);

    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Pour des raisons de sécurité, ne pas révéler si l'utilisateur existe ou non
    if (!user) {
      console.log(`Utilisateur non trouvé pour l'email: ${email}`);
      return NextResponse.json({
        message:
          "Si un compte existe avec cette adresse email, un lien de réinitialisation sera envoyé.",
      });
    }

    console.log(`Utilisateur trouvé: ${user.id}`);

    // Générer un token de réinitialisation
    const resetToken = generateToken();
    const hashedToken = hashToken(resetToken);
    const expiresAt = new Date(Date.now() + 3600000); // Expire dans 1 heure

    console.log(`Token généré, expiration: ${expiresAt.toISOString()}`);

    // Stocker le token haché dans la base de données
    await prisma.passwordReset.upsert({
      where: { userId: user.id },
      update: {
        token: hashedToken,
        expiresAt,
      },
      create: {
        userId: user.id,
        token: hashedToken,
        expiresAt,
      },
    });

    console.log(`Token stocké en base de données`);

    // Construire l'URL de réinitialisation
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/admin/reset-password/${resetToken}`;
    console.log(`URL de réinitialisation: ${resetUrl}`);

    // Vérifier la clé API Resend
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY n'est pas définie dans les variables d'environnement"
      );
      return NextResponse.json(
        { message: "Erreur de configuration du serveur d'emails" },
        { status: 500 }
      );
    }

    console.log(`Tentative d'envoi d'email avec Resend...`);

    // Remplacez la partie de simulation par l'envoi réel
    try {
      // Envoyer l'email avec Resend
      const emailResult = await resend.emails.send({
        from: "onboarding@resend.dev", // Utilisez cette adresse pour les tests
        to: email,
        subject: "Réinitialisation de votre mot de passe JMP Solutions",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0284c7;">Réinitialisation de votre mot de passe</h1>
            <p>Bonjour,</p>
            <p>Vous avez demandé la réinitialisation de votre mot de passe pour l'administration de JMP Solutions.</p>
            <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
            <p style="margin: 20px 0;">
              <a href="${resetUrl}" style="background-color: #0284c7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
                Réinitialiser mon mot de passe
              </a>
            </p>
            <p>Ce lien est valable pendant 1 heure.</p>
            <p>Si vous n'avez pas demandé cette réinitialisation, vous pouvez ignorer cet email.</p>
            <p>Cordialement,<br>L'équipe JMP Solutions</p>
          </div>
        `,
      });

      console.log(`Email envoyé avec succès:`, emailResult);
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'email:", emailError);
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email de réinitialisation" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message:
        "Si un compte existe avec cette adresse email, un lien de réinitialisation sera envoyé.",
    });
  } catch (error) {
    console.error(
      "Erreur lors de la demande de réinitialisation du mot de passe:",
      error
    );
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la demande de réinitialisation du mot de passe",
      },
      { status: 500 }
    );
  }
}
