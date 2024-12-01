"use client"; // Ensure client-side rendering

import React from "react";
import "./ParametersMenu.css";
import { FaHome,FaClock,FaRoute,FaDollarSign, FaCreditCard, FaTicketAlt, FaHandshake, FaUser, FaGift, FaBan, FaQuestionCircle, FaFileAlt, FaShieldAlt, FaCookieBite } from "react-icons/fa";
const ParametersMenu = () => {

const Vostrajets = [
  { 
    label: "Domicile -> Travail", 
    icon: <FaHome />, // Home icon for "Domicile -> Travail"
    onClick: () => alert("Domicile -> Travail Clicked") 
  },
  { 
    label: "Horaires des covoiturages", 
    icon: <FaClock />, // Clock icon for carpooling schedules
    onClick: () => alert("Horaires des covoiturages Clicked") 
  },
  { 
    label: "Récapitulatif de mes trajets", 
    icon: <FaRoute />, // Route icon for trip summary
    onClick: () => alert("Récapitulatif de mes trajets Clicked") 
  },
];


  const Preferences = [
    { label: "Solde", icon: <FaDollarSign />, onClick: () => alert("Solde Clicked") },
    { label: "Paiement et codes promo", icon: <FaCreditCard />, onClick: () => alert("Paiement Clicked") },
    { label: "Passe Transport", icon: <FaTicketAlt />, onClick: () => alert("Passe Transport Clicked") },
    { label: "Parrainage", icon: <FaHandshake />, onClick: () => alert("Parrainage Clicked") },
    { label: "Info personnelles", icon: <FaUser />, onClick: () => alert("Info Personnelles Clicked") },
    { label: "Vos avantages", icon: <FaGift />, onClick: () => alert("Avantages Clicked") },
    { label: "Membres bloqués", icon: <FaBan />, onClick: () => alert("Membres Bloqués Clicked") },
  ];
  
  const Aide = [
    { label: "Questions fréquentes", icon: <FaQuestionCircle />, onClick: () => alert("Questions Fréquentes Clicked") },
    { label: "Conditions générales", icon: <FaFileAlt />, onClick: () => alert("Conditions Générales Clicked") },
    { label: "Protection des données", icon: <FaShieldAlt />, onClick: () => alert("Protection des Données Clicked") },
    { label: "Paramètres des cookies", icon: <FaCookieBite />, onClick: () => alert("Paramètres Cookies Clicked") },
  ];

  return (
    <div className="main-container">
  <div className="settings-menu">
    <div className="header">Parametres</div>

    {/* Scrollable section */}
    <div className="scroll-container">
      <div className="section">
        <div className="header3">Vos trajets</div>
        <ul>
          {Vostrajets.map((item, index) => (
            <li key={index} className="menu-item" onClick={item.onClick}>
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="section">
        <div className="header3">Preferences</div>
        <ul>
          {Preferences.map((item, index) => (
            <li key={index} className="menu-item" onClick={item.onClick}>
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="section">
        <div className="header3">Aide</div>
        <ul>
          {Aide.map((item, index) => (
            <li key={index} className="menu-item" onClick={item.onClick}>
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  <div className="other-component">
    {/* Add your other component here */}
    <div className="header">Other Component</div>
    <p>This is the second container.</p>
  </div>
</div>

  );
};

export default ParametersMenu;
