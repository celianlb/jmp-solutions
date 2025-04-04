/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://jmpsolutions.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*"],
      },
    ],
    additionalSitemaps: [
      // Si vous avez des sitemaps supplémentaires, vous pouvez les ajouter ici
      // 'https://jmpsolutions.fr/server-sitemap.xml',
    ],
  },
  exclude: ["/admin", "/admin/*", "/api/*"],
  // Changez la priorité des pages importantes
  transform: async (config, path) => {
    // Personnalisation de la priorité en fonction du chemin
    let priority = 0.7;

    // Pages principales avec priorité élevée
    if (path === "/") {
      priority = 1.0;
    } else if (path.startsWith("/services/")) {
      priority = 0.8;
    } else if (path === "/a-propos" || path === "/contact") {
      priority = 0.9;
    } else if (path.startsWith("/blog/")) {
      priority = 0.6;
    }

    // Fréquence de changement
    let changefreq = "monthly";
    if (path === "/") {
      changefreq = "weekly";
    } else if (path.startsWith("/blog")) {
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
};
