import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Créer un utilisateur admin
  const adminPassword = await hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@jmpsolutions.fr" },
    update: {},
    create: {
      email: "admin@jmpsolutions.fr",
      name: "Admin",
      password: adminPassword,
    },
  });

  console.log({ admin });

  // Créer quelques articles de blog
  const post1 = await prisma.post.upsert({
    where: { slug: "pourquoi-entretenir-sa-piscine" },
    update: {},
    create: {
      title: "Pourquoi entretenir sa piscine ?",
      slug: "pourquoi-entretenir-sa-piscine",
      excerpt:
        "Découvrez pourquoi l'entretien régulier de votre piscine est essentiel pour sa longévité et votre santé.",
      content: `
        <p>L'entretien régulier de votre piscine est essentiel pour plusieurs raisons :</p>
        <h2>Santé et sécurité</h2>
        <p>Une piscine mal entretenue peut devenir un terrain propice au développement de bactéries et d'algues, ce qui peut causer des problèmes de santé comme des infections cutanées ou oculaires.</p>
        <h2>Longévité des équipements</h2>
        <p>Un entretien régulier permet de prolonger la durée de vie de vos équipements (pompe, filtre, etc.) et de votre revêtement.</p>
        <h2>Économies à long terme</h2>
        <p>Prévenir les problèmes coûte moins cher que de les réparer. Un entretien régulier vous évite des réparations coûteuses.</p>
      `,
      published: true,
    },
  });

  const post2 = await prisma.post.upsert({
    where: { slug: "quel-type-de-revetement-choisir-pour-sa-piscine" },
    update: {},
    create: {
      title: "Quel type de revêtement choisir pour sa piscine ?",
      slug: "quel-type-de-revetement-choisir-pour-sa-piscine",
      excerpt:
        "Guide complet pour choisir le revêtement idéal pour votre piscine selon vos besoins et votre budget.",
      content: `
        <p>Le choix du revêtement de votre piscine est une décision importante qui affectera son esthétique, sa durabilité et son entretien.</p>
        <h2>Le liner</h2>
        <p>Le liner est une membrane en PVC qui assure l'étanchéité de la piscine. C'est une solution économique avec une durée de vie de 10 à 15 ans.</p>
        <h2>Le carrelage</h2>
        <p>Le carrelage offre une finition esthétique et durable. Il est résistant aux produits chimiques et aux UV, mais son installation est plus coûteuse.</p>
        <h2>L'enduit</h2>
        <p>L'enduit est une solution durable et personnalisable. Il offre une bonne résistance aux produits chimiques et aux UV.</p>
        <h2>La peinture</h2>
        <p>La peinture est une solution économique pour rénover une piscine existante. Sa durée de vie est cependant limitée à 3-5 ans.</p>
      `,
      published: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
