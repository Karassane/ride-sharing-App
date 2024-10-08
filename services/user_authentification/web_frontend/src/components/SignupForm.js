// "use client"; indique que ce composant doit être exécuté sur le client (et non sur le serveur)
// Ce commentaire est spécifique à Next.js (13+) où il est nécessaire de distinguer les composants
// côté client des composants côté serveur.
"use client";

// Importation de `useState` pour gérer les états locaux du composant.
// `axios` est importé pour faire des requêtes HTTP (ici une requête POST vers le backend).
import { useState } from "react";
import axios from "axios";

// Fonction principale du composant Signup qui représente le formulaire d'inscription.
export default function Signup() {
  // Utilisation de `useState` pour gérer l'état des champs du formulaire.
  // Ces valeurs (name, email, password, passwordConfirm) sont modifiées à chaque saisie dans le formulaire.
  const [name, setName] = useState(""); // Stocke le nom de l'utilisateur
  const [email, setEmail] = useState(""); // Stocke l'email de l'utilisateur
  const [password, setPassword] = useState(""); // Stocke le mot de passe
  const [passwordConfirm, setPasswordConfirm] = useState(""); // Stocke la confirmation du mot de passe

  // Fonction qui est exécutée lorsque l'utilisateur soumet le formulaire.
  // Elle empêche l'envoi classique du formulaire (rechargement de la page) avec `e.preventDefault()`.
  // Puis elle envoie les données du formulaire au backend via une requête POST avec axios.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de la soumission de formulaire (rechargement de la page).

    // Envoi des données du formulaire via axios (requête POST).
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/signup/", // L'URL de l'API du backend (endpoint d'inscription).
        {
          name, // Données envoyées au backend (nom de l'utilisateur).
          email, // Email de l'utilisateur.
          password, // Mot de passe de l'utilisateur.
          password_confirm: passwordConfirm, // Confirmation du mot de passe.
        },
        {
          headers: {
            "Content-Type": "application/json", // Type de contenu envoyé au serveur (ici du JSON).
          },
        }
      );

      // Si la réponse est un succès, un message est affiché à l'utilisateur.
      console.log("Account created:", response.data); // Affiche la réponse du backend dans la console du navigateur.
      alert("Account created successfully!"); // Alerte indiquant la création du compte.
    } catch (error) {
      // Si une erreur survient, elle est affichée dans la console et un message d'erreur est affiché.
      console.error("There was an error creating the account:", error); // Affiche l'erreur dans la console.
      alert("There was an error creating your account."); // Alerte d'erreur pour l'utilisateur.
    }
  };

  // Rendu du formulaire d'inscription. Chaque champ utilise l'état local pour la saisie de données.
  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }} // Applique un style de fond gris clair.
    >
      <div className="flex flex-col min-h-screen">
        <div className="container flex-1 flex flex-col items-center max-w-lg mx-auto px-4 py-28">
          <div
            className="flex flex-col p-6 rounded-2xl shadow-md shadow-white"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg')",
            }} // Utilise une image en arrière-plan pour un effet visuel.
          >
            <h1 className="text-center text-5xl mb-6 text-neutral-200">
              Sign Up
            </h1>

            {/* Formulaire d'inscription avec 4 champs (name, email, password, confirm password). 
                Chaque champ est lié à une variable d'état avec `value` et utilise `onChange` pour mettre à jour cette variable. */}
            <form onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                value={name} // Valeur liée à la variable d'état `name`.
                onChange={(e) => setName(e.target.value)} // Met à jour la valeur de `name`.
                className="w-auto mb-8 mt-6 mx-8 rounded-lg focus:text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Name" // Placeholders sont affichés tant que les champs ne sont pas remplis.
              />

              <input
                id="email"
                type="email"
                value={email} // Valeur liée à la variable d'état `email`.
                onChange={(e) => setEmail(e.target.value)} // Met à jour la valeur de `email`.
                className="w-auto mb-8 mt-6 mx-8 rounded-lg shadow-none text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Email"
              />

              <input
                id="password"
                type="password"
                value={password} // Valeur liée à la variable d'état `password`.
                onChange={(e) => setPassword(e.target.value)} // Met à jour la valeur de `password`.
                className="text-gray-200 w-auto mb-8 mt-6 mx-8 rounded-lg bg-transparent border-gray-200 border-t-transparent placeholder-gray-200 focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Password"
              />

              <input
                id="password_confirm"
                type="password"
                value={passwordConfirm} // Valeur liée à la variable d'état `passwordConfirm`.
                onChange={(e) => setPasswordConfirm(e.target.value)} // Met à jour la valeur de `passwordConfirm`.
                className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Confirm Password"
              />

              {/* Bouton pour soumettre le formulaire */}
              <button
                type="submit" // Indique que ce bouton soumettra le formulaire.
                className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none dark:focus:ring-blue-800"
              >
                <span className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Create Account
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
