"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";
import Language from "./components/Language";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaPlusCircle, FaUserCircle } from "react-icons/fa";

export default function Header4() {
  const [scrolledUp, setScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Position précédente du scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY && window.scrollY > 200) {
        // Si l'utilisateur défile vers le haut
        setScrolledUp(true);
      } else {
        // Si l'utilisateur défile vers le bas
        setScrolledUp(false);
      }
      setLastScrollY(window.scrollY); // Mettre à jour la dernière position du scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'event listener lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Réagir à chaque changement de lastScrollY

  return (
    <header
      className={`header header-white header-bg-2 sticky-bar header4-custom ${
        scrolledUp ? "stick" : ""
      }`}
    >
      <div className="container-fluid box-header-home4">
        <div className="main-header">
          <div className="header-left">
            {/* Logo : */}
            <svg width="0" height="0">
              <defs>
                <filter id="metallic">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="1.5"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant=".75"
                    specularExponent="40"
                    lighting-color="#ffffff"
                    result="specOut"
                  >
                    <fePointLight x="-15000" y="-50000" />
                  </feSpecularLighting>
                  <feComposite
                    in="SourceGraphic"
                    in2="specOut"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>
              </defs>
            </svg>

            <div class="header-logo">
              <Link className="d-flex" href="/">
                <Image
                  width={250}
                  height={40}
                  alt="Nedam"
                  src="/assets/imgs/template/nedam_logo.png"
                  style={{ filter: "url(#metallic)" }}
                />
              </Link>
            </div>

            {/* header-nav: */}
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <Nav />
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>

            {/* header-right: */}
            <div className="header-right d-flex align-items-center justify-content-end">
              <div className="d-inline-block mr-4">
                <Link
                  href="/search_traject"
                  className="d-flex align-items-center custom-link"
                >
                  <FaSearch className="custom-icon search-icon" />
                  <span className="custom-text">Rechercher un trajet</span>
                </Link>
              </div>

              <div
                className="d-inline-block"
                style={{ marginLeft: "20px", marginRight: "40px" }}
              >
                <Link
                  href="/publish_traject"
                  className="d-flex align-items-center custom-link"
                >
                  <FaPlusCircle className="custom-icon publish-icon" />
                  <span className="custom-text">Publier un trajet</span>
                </Link>
              </div>

              <div className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-10">
                <Language />
              </div>

              <div className="dropdown d-inline-block">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="userMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle style={{ fontSize: "3em" }} />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="userMenuButton"
                  style={{ minWidth: "200px" }}
                >
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="/login"
                    >
                      <span className="ml-2">Connexion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      href="/register"
                    >
                      <span className="ml-2">Inscription</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
