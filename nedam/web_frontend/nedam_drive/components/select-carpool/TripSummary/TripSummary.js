"use client";

import React from "react";
import "./TripSummary.scss";

const TripSummary = ({ date, from, to, availableTrips }) => {
  return (
    <div className="trip-summary">
      <h4 className="date">{date}</h4>
      <p className="details">
        {from} → {to}
      </p>
      <span>{availableTrips} trajets disponibles</span>
    </div>
  );
};

export default TripSummary;
