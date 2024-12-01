"use client";

import React from "react";
import "./Filters.scss";

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="filters-section">
        <h4>
          Trier par <a href="#reset">Tout effacer</a>
        </h4>
        <ul>
          <li>
            <input type="radio" name="sort" id="early-departure" />
            <label htmlFor="early-departure">Départ le plus tôt</label>
            <span className="icon">⏰</span>
          </li>
          <li>
            <input type="radio" name="sort" id="lowest-price" />
            <label htmlFor="lowest-price">Prix le plus bas</label>
            <span className="icon">💶</span>
          </li>
          <li>
            <input type="radio" name="sort" id="nearest-start" />
            <label htmlFor="nearest-start">Proche du point de départ</label>
            <span className="icon">🚶</span>
          </li>
          <li>
            <input type="radio" name="sort" id="nearest-arrival" />
            <label htmlFor="nearest-arrival">Proche du point d'arrivée</label>
            <span className="icon">🚶</span>
          </li>
          <li>
            <input type="radio" name="sort" id="shortest-trip" />
            <label htmlFor="shortest-trip">Trajet le plus court</label>
            <span className="icon">⏳</span>
          </li>
        </ul>
      </div>

      <div className="filters-section">
        <h4>Confiance et sécurité</h4>
        <ul>
          <li>
            <input type="checkbox" id="verified-profile" />
            <label htmlFor="verified-profile">Profil Vérifié</label>
            <span className="icon">🔒</span>
          </li>
        </ul>
      </div>

      <div className="filters-section">
        <h4>Services et équipements</h4>
        <ul>
          <li>
            <input type="checkbox" id="instant-booking" />
            <label htmlFor="instant-booking">Réservation instantanée</label>
            <span className="icon">⚡</span>
          </li>
          <li>
            <input type="checkbox" id="smoking-allowed" />
            <label htmlFor="smoking-allowed">Cigarette autorisée</label>
            <span className="icon">🚬</span>
          </li>
          <li>
            <input type="checkbox" id="pets-allowed" />
            <label htmlFor="pets-allowed">Animaux de compagnie autorisés</label>
            <span className="icon">🐾</span>
          </li>
          <li>
            <input type="checkbox" id="reclining-seats" />
            <label htmlFor="reclining-seats">Sièges inclinables</label>
            <span className="icon">🛋️</span>
          </li>
          <li>
            <input type="checkbox" id="electric-plugs" />
            <label htmlFor="electric-plugs">Prises électriques</label>
            <span className="icon">🔌</span>
          </li>
          <li>
            <input type="checkbox" id="air-conditioning" />
            <label htmlFor="air-conditioning">Climatisation</label>
            <span className="icon">❄️</span>
          </li>
          <li>
            <input type="checkbox" id="e-tickets" />
            <label htmlFor="e-tickets">E-billets</label>
            <span className="icon">📱</span>
          </li>
        </ul>
      </div>

      <a href="#platform-transparency" className="transparency-link">
        Transparence des plateformes
      </a>
    </div>
  );
};

export default Filters;
