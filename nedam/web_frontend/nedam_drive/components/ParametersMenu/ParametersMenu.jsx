"use client"; // Add this line at the top

import React, { useState } from "react";
import "./ParametersMenu.css";
import { FaBell, FaCog, FaGlobe, FaMoon, FaUser, FaEye, FaCommentDots, FaHandsHelping } from "react-icons/fa";

const ParametersMenu = () => {
  // Menu items for different sections
  const settingsMenuItems = [
    { label: "Supervision", icon: <FaCog />, onClick: () => alert("Supervision Clicked") },
    { label: "Default audience settings", icon: <FaEye />, onClick: () => alert("Audience Settings Clicked") },
    { label: "Reaction preferences", icon: <FaCommentDots />, onClick: () => alert("Reaction Preferences Clicked") },
    { label: "Notifications", icon: <FaBell />, onClick: () => alert("Notifications Clicked") },
    { label: "Accessibility", icon: <FaHandsHelping />, onClick: () => alert("Accessibility Clicked") },
    { label: "Language and region", icon: <FaGlobe />, onClick: () => alert("Language & Region Clicked") },
    { label: "Media", icon: <FaGlobe />, onClick: () => alert("Media Clicked") },
    { label: "Dark mode", icon: <FaMoon />, onClick: () => alert("Dark Mode Clicked") },
    { label: "Profile details", icon: <FaUser />, onClick: () => alert("Profile Details Clicked") },
    { label: "How people can find and contact you", icon: <FaUser />, onClick: () => alert("Find & Contact Clicked") },
  ];

  const preferencesMenuItems = [
    { label: "Notifications", icon: <FaBell />, onClick: () => alert("Notifications Clicked") },
    { label: "Language settings", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
  ];

  const Vostrajets = [
    { label: "Domicile -> Travail", icon: <FaBell />, onClick: () => alert("Notifications Clicked") },
    { label: "Horaires des covoiturages", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
    { label: "Récaputilatif de mes trajets", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },

  ];

  const Preferences = [
    { label: "Solde", icon: <FaBell />, onClick: () => alert("Notifications Clicked") },
    { label: "Paiement et codes promo", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
    { label: "Passe Transport", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
    { label: "Parrainage", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
    { label: "Info personnelles", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
    { label: "Vos avantages", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
    { label: "Membres bloqués", icon: <FaGlobe />, onClick: () => alert("Language Settings Clicked") },
  ];

  const Aide = [
    { label: "Questions fréquentes", icon: <FaCog />, onClick: () => alert("Debug Tools Clicked") },
    { label: "Conditions générales", icon: <FaCog />, onClick: () => alert("System Monitoring Clicked") },
    { label: "Protection des données", icon: <FaCog />, onClick: () => alert("System Monitoring Clicked") },
    { label: "Paramètres des cookies", icon: <FaCog />, onClick: () => alert("System Monitoring Clicked") },
  ];

  return (
    <div className="settings-menu">
      <div className="header">
        <h3>Parametres</h3>
      </div>
      
    
      <div className="section">
      <hr />
      <h3 style={{ fontWeight: 'bold' }}>Vos trajets</h3>
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
      <h3 style={{ fontWeight: 'bold' }}>Preferences</h3>
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
      <h3 style={{ fontWeight: 'bold' }}>Aide</h3>
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
  );
};

export default ParametersMenu;
