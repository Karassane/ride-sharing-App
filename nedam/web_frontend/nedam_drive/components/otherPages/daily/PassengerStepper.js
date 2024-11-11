// PassengerStepper.js
import React from "react";
import "./PassengerStepper.scss";

const PassengerStepper = ({ passengerCount, onPassengerChange }) => {
  return (
    <div className="passenger-stepper">
      <button
        className="stepper-btn"
        onClick={() => onPassengerChange(-1)}
        disabled={passengerCount <= 1} // Désactive le bouton si le compte est 1
      >
        -
      </button>
      <span className="passenger-count">{passengerCount}</span>
      <button
        className="stepper-btn"
        onClick={() => onPassengerChange(1)}
        disabled={passengerCount >= 6} // Désactive le bouton si le compte est 6
      >
        +
      </button>
    </div>
  );
};

export default PassengerStepper;
