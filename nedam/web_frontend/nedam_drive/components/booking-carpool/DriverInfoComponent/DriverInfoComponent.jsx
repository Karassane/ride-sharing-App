"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Utiliser useRouter pour la navigation
import "./DriverInfoComponent.scss";

const DriverInfoComponent = ({ driver }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/driver_page"); // Redirection vers la page driver_page
  };

  return (
    <div className="driver-info-component">
      <div
        className="driver-header"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        <div className="driver-avatar">
          {driver?.avatar ? (
            <img src={driver.avatar} alt={`Avatar de ${driver.name}`} />
          ) : (
            <div className="avatar-placeholder">
              {driver?.name?.[0]?.toUpperCase() || "?"}
            </div>
          )}
        </div>
        <div className="driver-name-rating">
          <h3 className="driver-name">{driver?.name || "Nom inconnu"}</h3>
          <p className="driver-rating">
            <span className="star-icon">⭐</span> {driver?.rating || "N/A"} -{" "}
            {driver?.reviews || "0"} avis
          </p>
        </div>
      </div>

      <div className="driver-details">
        <p className="reservation-confirmation">
          <span className="icon">📋</span> Votre réservation sera confirmée
          lorsque le conducteur acceptera votre demande
        </p>
        <p className="preference">
          <span className="icon">🚭</span> Pas de cigarette, svp
        </p>
        <p className="preference">
          <span className="icon">🐾</span> Je préfère ne pas voyager en
          compagnie d'animaux
        </p>
        <p className="car-details">
          <span className="icon">🚗</span>{" "}
          {driver?.carModel || "Voiture inconnue"}
        </p>
      </div>

      <button className="contact-driver-button">
        <span className="icon">💬</span> Contacter{" "}
        {driver?.name || "le conducteur"}
      </button>
    </div>
  );
};

export default DriverInfoComponent;
