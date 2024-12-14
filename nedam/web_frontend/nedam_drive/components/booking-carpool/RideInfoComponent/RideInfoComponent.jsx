import React from "react";
import "./RideInfoComponent.scss";

const RideInfoComponent = ({
  date = "Vendredi 27 décembre",
  departure = {
    city: "Paris",
    location: "Porte d'Orléans",
    time: "06:00",
    duration: "7h10",
  },
  arrival = {
    city: "Marseille",
    location: "Saint-Charles",
    time: "13:10",
  },
  driver = {
    name: "zdek",
    rating: 4.3,
    avatar: null,
  },
  passengers = 1,
  price = 64.79,
}) => {
  return (
    <div className="ride-info-component">
      <div className="ride-info-component__header">
        <h2>{date}</h2>
      </div>

      <div className="ride-info-component__route">
        <div className="route__timeline">
          <div className="timeline__point"></div>
          <div className="timeline__line"></div>
          <div className="timeline__point"></div>
        </div>
        <div className="route__details">
          <div className="route__stop">
            <div className="time">{departure.time}</div>
            <div className="location">
              <div className="city">{departure.city}</div>
              <div className="place">{departure.location}</div>
            </div>
          </div>
          <div className="route__duration">{departure.duration}</div>
          <div className="route__stop">
            <div className="time">{arrival.time}</div>
            <div className="location">
              <div className="city">{arrival.city}</div>
              <div className="place">{arrival.location}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ride-info-component__driver">
        <div className="car-icon">🚗</div>
        <div className="driver-avatar">
          {driver.avatar ? (
            <img src={driver.avatar} alt={driver.name} />
          ) : (
            <div className="avatar-placeholder">
              {driver.name[0].toUpperCase()}
            </div>
          )}
        </div>
        <div className="driver-info">
          <span className="name">{driver.name}</span>
          <span className="rating">{driver.rating}</span>
        </div>
      </div>

      <div className="ride-info-component__footer">
        <div className="passengers">{passengers} passager</div>
        <div className="price">{price.toFixed(2)} €</div>
      </div>

      <button className="ride-info-component__button">
        <span className="calendar-icon">📅</span>
        Demande de réservation
      </button>
    </div>
  );
};

export default RideInfoComponent;
