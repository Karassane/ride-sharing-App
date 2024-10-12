// Le composant est exécuté côté client grâce à cette directive
"use client";

// Importation de la police DM_Sans depuis Google Fonts
import { DM_Sans } from "next/font/google";

// Importation du hook `useEffect` de React pour exécuter du code après le rendu du composant
import { useEffect } from "react";

// Importation du fichier principal de styles SCSS pour l'application
import "../public/assets/scss/style.scss";

// Importation de la bibliothèque Swiper pour les carrousels
import { register } from "swiper/element/bundle";

// Hook pour récupérer le chemin actuel de l'URL (utile pour détecter les changements de route)
import { usePathname } from "next/navigation";

// Configuration de la police DM_Sans avec différents poids (400, 500, 700) et le sous-ensemble latin.
// La police sera ensuite disponible sous la variable CSS personnalisée "--dm-saans-font"
const DM_SansFont = DM_Sans({
  weight: ["400", "500", "700"], // Poids des caractères à importer
  subsets: ["latin"], // Sous-ensemble pour optimiser la police
  variable: "--dm-saans-font", // Variable CSS pour la police
});

// Enregistrement des composants Swiper pour qu'ils puissent être utilisés dans l'application
register();

// Définition du composant RootLayout qui encapsule toute la structure de la page
export default function RootLayout({ children }) {
  // Utilisation de `useEffect` pour importer des modules dynamiquement après le rendu
  useEffect(() => {
    // On s'assure que le code s'exécute seulement côté client (pas côté serveur)
    if (typeof window !== "undefined") {
      // Importation de Bootstrap uniquement côté client pour gérer les éléments interactifs comme les modals, dropdowns, etc.
      import("bootstrap/dist/js/bootstrap.esm").then((module) => {
        // Une fois Bootstrap importé, on peut utiliser ses fonctionnalités si nécessaire
      });
    }
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois au montage du composant

  // Utilisation de `usePathname` pour obtenir le chemin actuel de la page
  const path = usePathname();

  // Déclaration d'une variable pour gérer l'instance de `WOW.js` (une bibliothèque pour les animations)
  let wow = null;

  // Utilisation de `useEffect` pour initialiser `WOW.js` après chaque changement de route
  useEffect(() => {
    // Importation de `WOW.js` (une bibliothèque d'animations) côté client
    const { WOW } = require("wowjs");

    // Création d'une instance de `WOW` pour gérer les animations sur les éléments
    wow = new WOW({
      live: false, // Ne surveille pas les éléments ajoutés dynamiquement (utile si tout est déjà sur la page)
      mobile: false, // Désactive les animations sur les appareils mobiles pour des raisons de performance
    });

    // Démarrage des animations
    wow.init();
  }, [path]); // Cet effet est exécuté à chaque fois que le chemin `path` (URL) change

  // Structure du composant de mise en page
  return (
    <html lang="en">
      {/* L'élément <head> pourrait inclure des balises <meta>, des titres, etc. */}
      <head></head>
      {/* Le corps de la page, où les composants enfants seront insérés */}
      <body className={DM_SansFont.variable}>
        {/* Tous les enfants (pages, composants) de cette mise en page seront rendus ici */}
        {children}
      </body>
    </html>
  );
}
