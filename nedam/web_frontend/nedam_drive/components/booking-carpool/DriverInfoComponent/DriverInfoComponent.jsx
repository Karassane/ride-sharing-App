import React from "react";
import "./DriverInfoComponent.scss";

const DriverInfoComponent = ({ driver }) => {
  return (
    <div className="driver-info-component">
      <div className="driver-details">
        <img src={driver.avatar} alt={driver.name} />
        <div>
          <h3>{driver.name}</h3>
          <p>({driver.rating})</p>
        </div>
      </div>
      <div className="car-details">
        <p>VOLKSWAGEN Voyage - Gris</p>
      </div>
      <div className="preferences">
        <p>Pas de cigarette, svp</p>
        <p>Je préfère ne pas voyager en compagnie d'animaux</p>
      </div>
    </div>
  );
};

export default DriverInfoComponent;
