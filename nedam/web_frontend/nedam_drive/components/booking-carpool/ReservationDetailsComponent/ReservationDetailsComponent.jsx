import React from "react";
import "./ReservationDetailsComponent.scss";

const ReservationDetailsComponent = () => {
  return (
    <div className="reservation-details">
      <div className="price">
        <h2>64,79 €</h2>
        <p>1 passager</p>
      </div>
      <button className="reservation-button">Demande de réservation</button>
    </div>
  );
};

export default ReservationDetailsComponent;
