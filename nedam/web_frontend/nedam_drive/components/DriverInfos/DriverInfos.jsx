"use client";

import React from "react";
import "./DriverInfos.scss";

const DriverInfos = ({ driver }) => {
  return (
    <div className="driver-infos">
      <div className="driver-infos__header">
        <div className="driver-avatar">
          {driver?.avatar ? (
            <img src={driver.avatar} alt={`${driver.name}`} />
          ) : (
            <div className="avatar-placeholder">
              {driver?.name?.[0]?.toUpperCase() || "?"}
            </div>
          )}
        </div>
        <div className="driver-details">
          <h1 className="driver-name">{driver.name}</h1>
          <p className="driver-age">{driver.age} ans</p>
          <p className="driver-level">
            Niveau d'expérience : {driver.experience}
          </p>
        </div>
      </div>

      <div className="driver-rating">
        <span className="rating-star">⭐</span>
        <span className="rating-value">{driver.rating}/5</span>
        <span className="rating-reviews">— {driver.reviews} avis</span>
      </div>

      <div className="driver-verifications">
        <div className="verification-item">
          <span className="verification-icon">✔️</span>
          Adresse e-mail vérifiée
        </div>
        <div className="verification-item">
          <span className="verification-icon">✔️</span>
          Numéro de téléphone vérifié
        </div>
      </div>

      <hr className="divider" />

      <div className="driver-bio">
        <h2>Faites connaissance avec {driver.name}</h2>
        <p className="bio-item">
          <span className="bio-icon">💬</span> {driver.bio}
        </p>
        <p className="bio-item">
          <span className="bio-icon">🚭</span> Pas de cigarette, svp
        </p>
        <p className="bio-item">
          <span className="bio-icon">🐾</span> Je préfère ne pas voyager en
          compagnie d'animaux
        </p>
        <p className="driver-type">
          {driver.isProfessional
            ? "Membre professionnel"
            : "Membre non-professionnel"}
        </p>
      </div>

      <hr className="divider" />

      <div className="driver-stats">
        <p className="stats-item">{driver.tripsPublished} trajets publiés</p>
        <p className="stats-item">Membre depuis {driver.memberSince}</p>
      </div>

      <button className="report-button">Signaler ce membre</button>
    </div>
  );
};

export default DriverInfos;
