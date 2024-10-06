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
      npx create-next-app@latest user_auth_frontend

# Explication de la structure du projet Next.js

La structure du workspace pour le projet `ride-sharing-App/user_auth_frontend` développé avec **Next.js** en **JavaScript**.

## Structure générale

```
ride-sharing-App/
├── user_auth_frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── app/
│   │   │   ├── fonts/
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.js
│   │   │   ├── page.js
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── ui/
│   │   ├── styles/
│   │   ├── utils/
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.js
│   └── README.md
```

### Dossiers et fichiers principaux

### `src/app/`

Ce répertoire contient le cœur de l'application. Il inclut les pages principales et la structure du projet :

- **`fonts/`** : Ce dossier contient les fichiers de polices personnalisées utilisés dans l'application.

  - Exemples : `GeistMonoVF.woff`, `GeistVF.woff`.

- **`favicon.ico`** : L'icône affichée dans l'onglet du navigateur.

- **`globals.css`** : Fichier contenant les styles globaux applicables à toutes les pages de l'application. C'est ici que sont définis les styles de base.

- **`layout.js`** : Ce fichier gère la mise en page principale de l'application. Tous les composants communs (comme la navigation ou le pied de page) seront définis ici pour être réutilisés dans chaque page.

- **`page.js`** : Ce fichier représente la page d'accueil de l'application. En Next.js, chaque fichier de page représente une route.

### `src/components/`

Ce répertoire contient tous les composants réutilisables du projet. Ces composants peuvent être utilisés dans différentes parties de l'application.

- **`layout/`** : Dossier qui contient les composants liés à la mise en page de l'application, tels que les en-têtes, les pieds de page, etc.

- **`ui/`** : Dossier contenant des composants UI (Interface Utilisateur) réutilisables, comme les boutons, les cartes, etc.

### `src/styles/`

Dossier où les fichiers CSS spécifiques peuvent être organisés, par exemple pour des composants ou des pages particulières.

### `src/utils/`

Contient des fonctions utilitaires, telles que des gestionnaires d'API, des helpers pour manipuler les données, ou des fonctions globales partagées dans toute l'application.

---

### Fichiers de configuration :

- **`.eslintrc.json`** : Fichier de configuration d'ESLint, utilisé pour s'assurer que le code respecte les bonnes pratiques et est correctement formaté.

- **`.gitignore`** : Fichier utilisé pour exclure certains fichiers ou dossiers du suivi Git, comme `node_modules/` ou d'autres fichiers temporaires.

- **`jsconfig.json`** : Utilisé pour configurer les chemins d'importation et résoudre les alias dans un projet JavaScript.

- **`next.config.mjs`** : Fichier de configuration de **Next.js** permettant de personnaliser le comportement du framework, comme l'optimisation des images ou les redirections.

- **`package.json`** : Ce fichier contient les informations sur le projet, notamment les dépendances, les scripts de démarrage, et les versions des packages.

- **`postcss.config.mjs`** : Fichier de configuration pour **PostCSS**, utilisé avec **Tailwind CSS** pour transformer le CSS avec des plugins.

- **`tailwind.config.js`** : Fichier de configuration pour **Tailwind CSS**, où on peut personnaliser les couleurs, les thèmes, et d'autres propriétés de design globales.

- **`README.md`** : Fichier de documentation du projet. Il contient des informations sur l'installation, l'utilisation, et les directives pour les contributeurs.

---

### Recommandation de structuration :

- **Composants** : On peut ajouter des sous-dossiers dans `components/` pour organiser les composants par fonctionnalités (par exemple `components/forms/`, `components/navigation/`).
- **Styles** : On peut créer des fichiers CSS spécifiques pour chaque composant ou page dans `src/styles/` pour une gestion plus modulaire des styles.
- **Tests** : On peut envisager d'ajouter un dossier `src/tests/` pour stocker les tests unitaires ou d'intégration, assurant ainsi la qualité du code.
- **Documentation** : Ajouter un dossier `docs/` pour documenter les aspects techniques ou les décisions architecturales importantes du projet.

### TO generate and configure React Native Application :

# Android Studio Installation and React Native Dependencies Setup Guide

This guide explains how to install and configure Android Studio on a Linux system, along with instructions for setting up React Native dependencies and testing your mobile application on an Android emulator.

## 1. Download Android Studio

You can download Android Studio from the official website:

- [Android Studio Download Page](https://developer.android.com/studio)

If you have already downloaded the `.tar.gz` file, follow the steps below to install it.

---

## 2. Installing Android Studio

### Step 1: Extract the Android Studio Archive

Navigate to the directory where the `.tar.gz` file was downloaded and extract it:

```bash
cd ~/Downloads
tar -xvzf android-studio-2024.1.2.12-linux.tar.gz
```

### Step 2: Move the Android Studio Directory to /opt

Move the extracted Android Studio directory to `/opt` for easier access:

```bash
sudo mv android-studio /opt/
```

### Step 3: Launch Android Studio

You can launch Android Studio using the following command:

```bash
/opt/android-studio/bin/studio.sh
```

### Step 4: Follow the Setup Wizard

1. When launching for the first time, Android Studio will prompt you to import settings. Select **Do not import settings** if you are installing it for the first time.
2. Accept the terms and conditions.
3. Select the default options to install the Android SDK and other necessary development tools.

---

## 3. Setting Up the Environment for React Native

### Step 1: Install Java 17

Install Java 17 as it's required by the Android Gradle plugin:

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

Ensure Java 17 is set as the default:

```bash
sudo update-alternatives --config java
```

Verify the installed version:

```bash
java -version
```

### Step 2: Install React Native

Run the following command to install a new React Native project with JavaScript:

```bash
npx react-native init mobile_frontend --template react-native-template-js
```

Navigate to the project directory:

```bash
cd mobile_frontend
```

### Step 3: Launch the Metro Bundler

Metro is the JavaScript bundler used by React Native:

```bash
npx react-native start
```

### Step 4: Configuring Android SDK and Emulator

Ensure the Android SDK is properly configured. Create or update the `local.properties` file in your React Native project's `android/` directory. It should point to the SDK location:

1. Create a file called `local.properties` inside the `android/` directory of your React Native project:

   ```bash
   touch android/local.properties
   ```

2. Add the following line to specify your SDK path (replace with your actual SDK location):

   ```bash
   sdk.dir=/home/your_username/Android/Sdk
   ```

You can locate your SDK path by checking the **SDK Location** in Android Studio under **Preferences > Appearance & Behavior > System Settings > Android SDK**.

### Step 5: Set Environment Variables

Ensure the `ANDROID_HOME` environment variable is set correctly. You can add the following lines to your `~/.bashrc` or `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

After adding these lines, run:

```bash
source ~/.bashrc  # or source ~/.zshrc
```

### Step 6: Running the App on an Android Emulator

1. Start an Android emulator:

```bash
npx react-native run-android
```

Make sure that an emulator is running. You can check available emulators with:

```bash
emulator -list-avds
```

If none are listed, you can create an emulator using Android Studio.

---

Other checks :

sdkmanager --list
adb version
ls $HOME/Android/Sdk^C
