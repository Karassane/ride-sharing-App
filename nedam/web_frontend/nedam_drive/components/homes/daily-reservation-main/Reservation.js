
"use client";

import React from "react";
import "./Reservation.scss";

export default function Reservation() {
  return (
    <div className="reservation-container">
      <h1 className="date-title">Dimanche 24 novembre</h1>

      {/* Section Trajet */}
      <div className="trip-section">
        <div className="trip-details">
          {/* Conteneur central pour départ, ligne et arrivée */}
          <div className="center-container">
            {/* Départ */}
            <div className="trip-info start">
              <p className="time">
                09:30 <span className="sub-time">7h40</span>
              </p>
              <p className="location-title">La Croix-De-Berny</p>
              <p className="location-subtitle">Gare RER de La Croix-De-Berny</p>
            </div>

            {/* Ligne verticale avec points */}
            <div className="trip-divider">
              <div className="top-dot"></div>
              <div className="line"></div>
              <div className="bottom-dot"></div>
            </div>

            {/* Arrivée */}
            <div className="trip-info end">
              <p className="time">17:10</p>
              <p className="location-title">Aix-en-Provence</p>
              <p className="location-subtitle">
                Aire de covoiturage Pont-de-l'Arc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
