# ride-sharing-App - 05/10/2024 - Using DJANGO (Python) and React

===> Résumé des étapes de configuration et d'installation de React avec Next.js pour le développement du front-end web :

1. Mise à jour de Node.js avec NVM :

   - Node.js est nécessaire pour exécuter Next.js ! Il faut utiliser une version compatible de Node.js avec Next.js !

   1. Installation de NVM :
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
      source ~/.bashrc

   2. Installation de la version correcte de Node.js :
      - Installation de la dernière version LTS (v20.18.0) :
        nvm install --lts
   3. Utilisation de la version souhaitée de Node.js :
      nvm use 20.18.0

   4. Vérification de la version de Node.js :
      node -v

2. Création du projet Next.js :

   - Après avoir installé la version correcte de Node.js, on peut créer le projet Next.js pour le premier service que j'ai appelé "user_authentification".

   1. Commande pour créer le projet Next.js :
      npx create-next-app user_auth_frontend

# Explication de la structure du projet Next.js

user_auth_frontend/
│
├── public/
│ ├── favicon.ico # Icône du site affichée dans l'onglet du navigateur
│ └── ... # Autres fichiers publics (images, polices, etc.)
│
├── src/ # Le dossier source contenant tous les fichiers applicatifs
│ ├── app/ # Contient les pages et layouts de l'application (remplace le dossier `pages/`)
│ │ ├── fonts/ # Dossier contenant les fichiers de polices utilisés
│ │ │ ├── GeistMonoVF.woff
│ │ │ └── GeistVF.woff
│ │ ├── globals.css # Styles globaux de l'application
│ │ ├── layout.tsx # Layout principal partagé par toutes les pages
│ │ ├── page.tsx # Page d'accueil (page principale)
│ │ └── ... # Autres pages ou dossiers de routes
│ │
│ ├── components/ # Dossier pour les composants réutilisables (non obligatoire, mais conseillé)
│ │ ├── Navbar.tsx # Exemple : Composant de la barre de navigation
│ │ ├── Footer.tsx # Exemple : Composant du pied de page
│ │ └── ... # Autres composants réutilisables dans l'application
│ │
│ ├── styles/ # Dossier contenant les fichiers de styles spécifiques à des composants ou pages
│ │ └── ... # Exemples de fichiers CSS ou modules CSS spécifiques
│ │
│ └── utils/ # Dossier contenant les utilitaires (gestion des appels API, fonctions partagées)
│ └── api.js # Exemple de fichier pour gérer les appels API
│
├── .eslintrc.json # Configuration ESLint pour garantir un code de qualité
├── next.config.mjs # Configuration principale de Next.js
├── package.json # Fichier de configuration des dépendances et des scripts de démarrage
├── postcss.config.js # Configuration de PostCSS (utilisé avec Tailwind CSS)
├── tailwind.config.ts # Fichier de configuration de Tailwind CSS
├── tsconfig.json # Configuration TypeScript pour le projet
└── .gitignore # Fichier pour exclure certains fichiers du suivi Git

### Voici une explication détaillée des différents fichiers et dossiers qui composent le projet **Next.js** "user_auth_frontend", selon la structure visible dans l'image partagée.

## `src/` et `app/`

Le répertoire `src/` est utilisé pour organiser les fichiers source du projet, et à l'intérieur de celui-ci, `app/` contient les composants principaux de l'application.

### Contenu du répertoire `app/` :

- **`fonts/`** : Ce dossier contient les polices personnalisées utilisées dans l'application. Par exemple, les fichiers `GeistMonoVF.woff` et `GeistVF.woff` semblent être des polices personnalisées utilisées dans l'interface utilisateur.
- **`favicon.ico`** : C'est l'icône utilisée pour représenter l'application dans l'onglet du navigateur.

- **`globals.css`** : Fichier contenant les styles globaux qui s'appliquent à l'ensemble de l'application, quelle que soit la page ou le composant.

- **`layout.tsx`** : Ce fichier TypeScript avec JSX (`tsx`) gère la mise en page principale de l'application. Il est souvent utilisé pour les éléments de structure comme les en-têtes ou les pieds de page qui sont partagés sur plusieurs pages.

- **`page.tsx`** : Fichier de page principale dans Next.js. C'est ici que le contenu par défaut de la page principale de l'application est défini.

## `node_modules/`

Ce répertoire contient toutes les dépendances du projet installées via **npm**. Il s'agit de bibliothèques et de modules nécessaires pour que le projet fonctionne correctement.

## Fichiers de configuration

- **`.eslintrc.json`** : Ce fichier configure **ESLint**, un outil de linteage qui aide à maintenir un code propre et sans erreurs. Les règles de style et les conventions de code y sont définies.

- **`.gitignore`** : Ce fichier liste les fichiers et dossiers qui ne doivent pas être suivis par **Git**, comme le dossier `node_modules/` et d'autres fichiers temporaires.

- **`next-env.d.ts`** : Un fichier de configuration généré automatiquement pour l'utilisation de TypeScript avec Next.js.

- **`next.config.mjs`** : Ce fichier contient la configuration de Next.js. On y configure des options comme le support de certaines fonctionnalités, l'optimisation des images, le routing, etc.

- **`package.json` et `package-lock.json`** : Le fichier `package.json` contient la liste des dépendances, des scripts de démarrage et des informations sur le projet. Le fichier `package-lock.json` verrouille les versions des dépendances installées, assurant que tout fonctionne de manière cohérente sur différentes machines.

- **`postcss.config.js`** : Fichier de configuration pour **PostCSS**, un outil permettant de transformer le CSS avec divers plugins, comme l'ajout de préfixes spécifiques à des navigateurs ou la gestion des variables CSS.

- **`tailwind.config.ts`** : Fichier de configuration pour **Tailwind CSS**. Il permet de définir des thèmes personnalisés, des couleurs, et des options pour le système de classes utilitaires.

- **`tsconfig.json`** : Fichier de configuration pour le compilateur **TypeScript**. Il définit les règles de compilation et précise quels fichiers inclure ou exclure.

## Fichiers de documentation

- **`README.md`** : Ce fichier contient la documentation du projet. Il décrit les étapes pour démarrer le projet, les technologies utilisées, et toutes les informations pertinentes pour les développeurs ou contributeurs.

---

Cette structure utilise **TypeScript** par défaut, comme l'indiquent les extensions `.ts` et `.tsx`, ainsi que le fichier `tsconfig.json`. Si l'on souhaite passer à **JavaScript** pur, il est possible de renommer les fichiers `.tsx` en `.js` et de supprimer les fichiers et dépendances spécifiques à TypeScript, comme `tsconfig.json` et `next-env.d.ts`.
