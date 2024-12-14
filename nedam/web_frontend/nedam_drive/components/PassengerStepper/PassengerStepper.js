// PassengerStepper.js
import React from "react";
import "./PassengerStepper.scss";

const PassengerStepper = ({ onPassengerChange }) => {
  return (
    <div className="passenger-stepper">
      <button className="stepper-btn" onClick={() => onPassengerChange(-1)}>
        -
      </button>
      <button className="stepper-btn" onClick={() => onPassengerChange(1)}>
        +
      </button>
    </div>
  );
};

export default PassengerStepper;
