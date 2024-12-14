"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Utiliser useRouter pour la navigation
import Modal from "@/components/common/Modal/Modal";
import "./DriverInfoComponent.scss";

const DriverInfoComponent = ({ driver }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false); // État pour le modal

  const handleRedirect = () => {
    router.push("/driver_page"); // Redirection vers la page driver_page
  };

  const handleContactClick = () => {
    console.log("Bouton cliqué");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal fermé");
    setModalOpen(false);
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

      <button className="contact-driver-button" onClick={handleContactClick}>
        <span className="icon">💬</span> Contacter{" "}
        {driver?.name || "le conducteur"}
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Contacter {driver?.name}</h2>
        <p>Veuillez entrer votre message pour contacter le conducteur.</p>
        <textarea
          rows="4"
          cols="50"
          placeholder="Écrivez votre message ici..."
        ></textarea>
        <button onClick={handleCloseModal}>Envoyer</button>
      </Modal>
    </div>
  );
};

export default DriverInfoComponent;
