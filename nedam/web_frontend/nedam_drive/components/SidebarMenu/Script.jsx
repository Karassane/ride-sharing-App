"use client"; // Ensure client-side rendering
import React, { useState, useEffect } from "react";
import { FaHistory, FaList, FaMoneyBillWave,FaUserCircle, FaHome,FaClock,FaRoute,FaDollarSign, FaCreditCard, FaTicketAlt, FaHandshake, FaUser, FaGift, FaBan, FaQuestionCircle, FaFileAlt, FaShieldAlt, FaCookieBite } from "react-icons/fa";
import "./style.css"; // Import your provided CSS here
const iconFontSize = '2rem'; // Define the font size once


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState("calc(100vh - 32px)");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setSidebarHeight(
      !isMenuActive ? `${document.querySelector(".sidebar").scrollHeight}px` : "56px"
    );
  };

  // Adjust sidebar height on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarHeight("calc(100vh - 32px)");
      } else {
        setIsCollapsed(false);
        setSidebarHeight("auto");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`sidebar ${isCollapsed ? "collapsed" : ""} ${isMenuActive ? "menu-active" : ""}`}
      style={{ height: sidebarHeight }}
      onClick={toggleSidebar} // Trigger the sidebar toggle on clicking anywhere in the sidebar
    >
      <nav className="sidebar-nav" onClick={(e) => e.stopPropagation()}> {/* Prevent sidebar toggle when clicking on the nav */}
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              <FaHome className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Trajet</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              <FaHistory className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Historique des covoiturages</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaList className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Récapitulatif de mes trajets</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaDollarSign className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Solde</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaCreditCard className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Paiement et codes promo</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaTicketAlt className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Passe Transport</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaHandshake className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Parrainage</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaUser className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Info personnelles</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaGift className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Vos avantages</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaBan className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Membres bloqués</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaQuestionCircle className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Questions fréquentes</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaFileAlt className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Conditions générales</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaShieldAlt className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Protection des données</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FaCookieBite className={`nav-icon ${isCollapsed ? "collapsed" : ""}`} style={{ fontSize: iconFontSize }} />
              {!isCollapsed && <span className="nav-label">Paramètres des cookies</span>}
            </a>
          </li>
          {/* Add other menu items with icons here */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
