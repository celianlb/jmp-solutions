# Configuration des Uploads d'Images

## Solution Implémentée

**Comportement uniforme** : Tous les uploads d'images (local ET production) utilisent Cloudinary pour garantir une expérience identique.

### Avantages

- ✅ **Comportement identique** en local et en production
- ✅ **URLs sécurisées** (HTTPS)
- ✅ **Persistance garantie** (pas de perte de fichiers)
- ✅ **Gratuit** (25GB offerts par Cloudinary)
- ✅ **Optimisation automatique** des images

## Configuration Requise

### 1. Créer un compte Cloudinary

1. Allez sur [cloudinary.com](https://cloudinary.com)
2. Créez un compte gratuit
3. Récupérez vos credentials dans le Dashboard

### 2. Variables d'Environnement

Ajoutez ces variables dans votre fichier `.env.local` (développement) et dans votre plateforme de déploiement (production) :

```env
# Cloudinary (OBLIGATOIRE pour tous les environnements)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# URL du site en production
NEXT_PUBLIC_SITE_URL="https://votre-domaine.com"
```

### 3. Configuration du Déploiement

Assurez-vous que ces variables d'environnement sont configurées dans votre plateforme de déploiement (Vercel, Netlify, etc.).

## Utilisation

Le système utilise maintenant Cloudinary dans **tous les environnements** :

- **Développement** : Upload vers Cloudinary
- **Production** : Upload vers Cloudinary

## Dépannage

### Erreur "Configuration d'upload manquante"

- Vérifiez que les variables Cloudinary sont configurées dans `.env.local`
- Redéployez après avoir ajouté les variables en production

### Images qui ne s'affichent pas

- Vérifiez que les URLs Cloudinary sont correctes
- Vérifiez les logs de l'API d'upload
- Assurez-vous que Cloudinary est bien configuré

### Erreur de taille de fichier

- Limite actuelle : 5MB
- Modifiez `maxFileSize` dans `lib/upload-config.ts` si nécessaire

## Migration

Si vous aviez des images dans `public/uploads/`, elles ne seront plus utilisées. Les nouvelles images seront stockées sur Cloudinary avec des URLs sécurisées.
