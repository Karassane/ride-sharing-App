import React from "react";
import Image from "next/image";
import "./TripCard.scss";

const TripCard = ({
  date = "Demain", // Valeur par défaut pour la date
  fromCity = "Paris",
  toCity = "Lille",
  departureTime = "00:30",
  arrivalTime = "02:40",
  duration = "2h10",
  price = "25,99",
  driver = {
    name: "Fares",
    avatar: "/assets/imgs/page/driver/driver_1.webp",
    rating: "4.8",
  },
}) => {
  return (
    <div className="trip-card">
      <div className="trip-date">
        <h2>{date}</h2>
        <p>{`${fromCity}, France ➔ ${toCity}, France : 85 trajets disponibles`}</p>
      </div>

      <div className="trip-info">
        <div className="trip-schedule">
          <span className="time">{departureTime}</span>
          <span className="duration">{duration}</span>
          <span className="time">{arrivalTime}</span>
          <div className="locations">
            <span>{fromCity}</span>
            <span>{toCity}</span>
          </div>
        </div>

        <div className="driver-info">
          <Image
            src={driver.avatar}
            alt="Driver avatar"
            width={30}
            height={30}
            className="driver-avatar"
          />
          <div className="driver-details">
            <p>{driver.name}</p>
            <span className="rating">★ {driver.rating}</span>
            <span className="badge">Super Driver</span>
          </div>
          <div className="instant-booking">
            <span>⚡ Réservation instantanée</span>
          </div>
        </div>

        <div className="trip-price">
          <span>{price} €</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
