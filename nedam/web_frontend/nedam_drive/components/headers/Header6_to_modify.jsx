"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";
import Language from "./components/Language";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaPlusCircle, FaUserCircle } from "react-icons/fa"; // Importer l'icône de l'utilisateur

export default function Header6() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header sticky-bar ${scrolled ? "stick" : ""}`}>
      <div className="container-fluid">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <Image
                  width={150}
                  height={50}
                  alt="luxride"
                  src="/assets/imgs/template/logo.svg"
                  style={{ height: "fit-content" }}
                />
              </Link>
            </div>

            {/* Cette partie concerne les éléments du menu droite du header */}
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

            {/* Cette partie concerne les éléments du menu gauche du header */}
            <div className="header-right d-flex align-items-center justify-content-end">
              {/* Ajouter les deux nouveaux éléments */}
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

              {/* Langue et connexion */}
              <div className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-10">
                <Language />
              </div>

              {/* Menu utilisateur avec avatar */}
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
