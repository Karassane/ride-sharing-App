"use client"; // Indique que ce composant est un Client Component

import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/signup/",
        {
          name,
          email,
          password,
          password_confirm: passwordConfirm,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ajoute cette ligne
          },
        }
      );
      console.log("Account created:", response.data);
      alert("Account created successfully!");
    } catch (error) {
      console.error("There was an error creating the account:", error);
      alert("There was an error creating your account.");
    }
  };

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }}
    >
      <div className="flex flex-col min-h-screen">
        <div className="container flex-1 flex flex-col items-center max-w-lg mx-auto px-4 py-28">
          <div
            className="flex flex-col p-6 rounded-2xl shadow-md shadow-white"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg')",
            }}
          >
            <h1 className="text-center text-5xl mb-6 text-neutral-200">
              Sign Up
            </h1>

            <form onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // Gérer la saisie
                className="w-auto mb-8 mt-6 mx-8 rounded-lg focus:text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Name"
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Gérer la saisie
                className="w-auto mb-8 mt-6 mx-8 rounded-lg shadow-none text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Email"
              />

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Gérer la saisie
                className="text-gray-200 w-auto mb-8 mt-6 mx-8 rounded-lg bg-transparent border-gray-200 border-t-transparent placeholder-gray-200 focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Password"
              />

              <input
                id="password_confirm"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)} // Gérer la saisie
                className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                placeholder="Confirm Password"
              />

              <button
                type="submit" // Définit le bouton comme bouton de soumission
                className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none dark:focus:ring-blue-800"
              >
                <span className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Create Account
                </span>
              </button>
            </form>

            {/* Social buttons */}
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-neutral-200 border-0 white" />
              <span className="absolute px-3 font-medium text-neutral-200 -translate-x-1/2 left-1/2 bg-black">
                or
              </span>
            </div>

            <button
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              Sign up with Facebook
            </button>

            <button
              type="button"
              className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
            >
              Sign up with 𝕏
            </button>

            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              Sign up with Github
            </button>

            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              Sign up with Google
            </button>

            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              Sign up with Apple
            </button>

            <div className="text-center text-sm text-neutral-200 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-neutral-200"
                href="#"
              >
                Terms of Service
              </a>
              and
              <a
                className="no-underline border-b border-grey-dark text-neutral-200"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
