# ride-sharing-App - 05/10/2024 - Using DJANGO (Python) and React

==> Structure d'un projet React avec Next.js (pour l'application WEB):

user_auth_frontend/
│
├── public/
│ ├── favicon.ico # Icône du site (personnalisable)
│ └── ... # Autres fichiers publics (images, etc.)
│
├── pages/
│ ├── api/ # Endpoints d'API côté serveur (facultatif)
│ ├── index.js # Page d'accueil
│ ├── login.js # Page de connexion
│ ├── signup.js # Page d'inscription
│ └── \_app.js # Fichier pour configurer l'application globale (styles globaux, etc.)
│
├── components/
│ ├── Layout.js # Composant layout principal
│ ├── Navbar.js # Composant de la barre de navigation
│ └── FormInput.js # Composant réutilisable pour les champs de formulaire
│
├── styles/
│ ├── globals.css # Styles globaux pour toute l'application
│ ├── login.module.css # Styles spécifiques pour la page de connexion
│ └── signup.module.css # Styles spécifiques pour la page d'inscription
│
├── utils/
│ └── api.js # Gestion des appels API (axios ou fetch)
│
├── package.json # Fichier de configuration du projet (dépendances, scripts, etc.)
├── next.config.js # Configuration de Next.js
└── .gitignore # Fichier pour exclure certains fichiers du dépôt Git
