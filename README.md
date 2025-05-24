# Projet : Blog Collaboratif Headless (1 Journée)

## Contexte
Vous êtes en deuxième année de Master Développement Full-Stack. L'objectif de ce projet d'une journée est de découvrir et mettre en pratique l'usage d'un CMS headless (Strapi v4) combiné à un framework frontend de votre choix (Next.js, Nuxt, SvelteKit, Angular, Remix, etc.).

## Objectif général
Créer un petit blog collaboratif où :

- **Auteurs** (rôle Author) peuvent rédiger, modifier et publier leurs propres articles.
- **Visiteurs** (rôle Public) peuvent lire les articles publiés et laisser des commentaires.

---

## 1. Backend Strapi

1. **Installation et démarrage** (port 1337) :
   ```bash
   npx create-strapi-app@latest mon-blog --quickstart
   ```

2. **Modélisation** :

   ### Content Type `Article`
   - `title` (String, requis)
   - `slug` (UID, unique, basé sur `title`)
   - `content` (Rich Text)
   - `coverImage` (Media, image unique)
   - `status` (Enumeration : `draft` / `published`, activer Draft & Publish)
   - `author` (Relation Many-to-One → User)

   ### Content Type `Comment`
   - `content` (Text, requis)
   - `authorName` (String, requis)
   - `publishedAt` (DateTime, basé sur `createdAt`)
   - `article` (Relation Many-to-One → Article)

3. **Rôles & Permissions** (Admin UI → Settings > Users & Permissions > Roles)

   - **Public** :
     - Articles : `find`, `findOne` (sur les articles publiés)
     - Commentaires : `create`

   - **Author** :
     - Articles : `create`
     - Articles : `update`, `delete` **seulement** sur ses propres articles (voir policy ci‑dessous)
     - Commentaires : `create`

   > **Restreindre `update`/`delete` à l’auteur seul** :
   > 1. Créer la policy `is-owner` dans `src/policies/is-owner.js` :
   >    ```js
   >    module.exports = async (ctx, next) => {
   >      const { id } = ctx.params;
   >      const user = ctx.state.user;
   >      const entity = await strapi.entityService.findOne(
   >        'api::article.article', id, { populate: ['author'] }
   >      );
   >      if (!entity || entity.author.id !== user.id) {
   >        return ctx.unauthorized('Vous ne pouvez modifier ou supprimer que vos propres articles.');
   >      }
   >      return await next();
   >    };
   >    ```
   > 2. Surcharger les routes `PUT` & `DELETE` :
   >    ```js
   >    // src/api/article/routes/article.js
   >    module.exports = {
   >      routes: [
   >        {
   >          method: 'PUT', path: '/articles/:id', handler: 'api::article.article.update',
   >          config: { policies: ['plugin::users-permissions.isAuthenticated', 'global::is-owner'] }
   >        },
   >        {
   >          method: 'DELETE', path: '/articles/:id', handler: 'api::article.article.delete',
   >          config: { policies: ['plugin::users-permissions.isAuthenticated', 'global::is-owner'] }
   >        }
   >      ],
   >    };
   >    ```
   > 3. Redémarrer Strapi :
   >    ```bash
   >    npm run develop
   >    ```

4. **Endpoints à tester** :
   - **Auth** : `POST /api/auth/local` (email + mot de passe)
   - **Articles** :
     - `GET  /api/articles?filters[status][$eq]=published&populate=coverImage,author`
     - `GET  /api/articles?filters[slug][$eq]={slug}&populate=coverImage,author,comments`
   - **Commentaires** : `POST /api/comments`

---

## 2. Frontend (au choix)

### Pages à réaliser

1. **Accueil**
   - Afficher tous les articles publiés sous forme de grille : vignette (`coverImage`), titre, nom de l’auteur, date de publication.
   - Chaque carte renvoie à la page détail.

2. **Page Article** (`/[slug]`)
   - Afficher : `coverImage`, `title`, `author.name`, `publishedAt`, `content` (HTML).
   - Liste des commentaires existants.
   - Formulaire de commentaire (nom + contenu) → `POST /api/comments`.

3. **Connexion Auteur** (bonus facultatif)
   - Formulaire login (email + mot de passe) → `POST /api/auth/local`.
   - Stockage du JWT (`localStorage` ou cookie).
   - Mini-dashboard pour lister ses drafts (bonus).

### Contraintes techniques
- Consommer l’API Strapi avec `fetch` ou `axios`.
- SSR ou SSG/ISR selon le framework (par ex. dans Next.js : `fetch(..., { next: { revalidate: 60 } })`).
- Créer des composants réutilisables (grille, carte, formulaire).
- Adapter le site pour mobile et desktop (responsive).

---

## 3. Livrables & critères d’évaluation

| Critère                | Détails                                                             |
|------------------------|---------------------------------------------------------------------|
| **README**             | Instructions pour lancer Strapi et le frontend, variables d’env.    |
| **Modélisation Strapi**| Content Types et permissions configurés correctement                 |
| **API**                | Endpoints testés (Postman/Playground) et fonctionnels               |
| **Frontend**           | Code clair (pages/components), consommation API, SSR/SSG/ISR adapté |
| **UI/UX**              | Interface propre, navigation intuitive, responsive                  |
| **Bonus**              | Auth JWT, dashboard auteur, pagination, filtres simples             |

---

## 4. Planning conseillé (6–8 h)

1. **1–2 h** : Installation & modélisation Strapi + tests API
2. **2–3 h** : Développement accueil + page article + commentaires
3. **1–2 h** : Mise en œuvre SSR/SSG/ISR et revalidation
4. **1–2 h** : Peaufinage UI/UX + fonctionnalités bonus

---

*Bon travail et amusez-vous bien !*