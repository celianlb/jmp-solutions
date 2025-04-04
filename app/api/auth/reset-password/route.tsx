import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { createHash } from "crypto";
import { NextResponse } from "next/server";

// Fonction pour hacher un token
function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: "Token et mot de passe requis" },
        { status: 400 }
      );
    }

    // Hacher le token pour le comparer avec celui stocké en base
    const hashedToken = hashToken(token);

    // Rechercher l'entrée de réinitialisation de mot de passe
    const passwordReset = await prisma.passwordReset.findFirst({
      where: {
        token: hashedToken,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    if (!passwordReset) {
      return NextResponse.json(
        { message: "Token invalide ou expiré" },
        { status: 400 }
      );
    }

    // Hacher le nouveau mot de passe
    const hashedPassword = await hash(password, 10);

    // Mettre à jour le mot de passe de l'utilisateur
    await prisma.user.update({
      where: {
        id: passwordReset.userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    // Supprimer l'entrée de réinitialisation de mot de passe
    await prisma.passwordReset.delete({
      where: {
        id: passwordReset.id,
      },
    });

    return NextResponse.json({
      message: "Mot de passe réinitialisé avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la réinitialisation du mot de passe:", error);
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la réinitialisation du mot de passe",
      },
      { status: 500 }
    );
  }
}
