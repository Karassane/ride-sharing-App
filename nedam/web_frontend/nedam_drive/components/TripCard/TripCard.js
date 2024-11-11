import React from "react";
import Image from "next/image";
import "./TripCard.scss";

const TripCard = ({
  date = "Demain",
  fromCity = "Paris",
  toCity = "Alger",
  departureTime = "00:30",
  arrivalTime = "02:40",
  duration = "2h10",
  price = "9.99",
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

      <div className="trip-details">
        <div className="trip-schedule">
          <div className="schedule-top">
            <span className="time">{departureTime}</span>
            <div className="line-container">
              <div className="line"></div>
              <span className="duration">{duration}</span>
              <div className="line"></div>
            </div>
            <span className="time">{arrivalTime}</span>
          </div>
          <div className="schedule-bottom">
            <span>{fromCity}</span>
            <span>{toCity}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>{price} DZA</span>
        </div>
      </div>

      <div className="driver-details">
        <Image
          src="/assets/imgs/template/car.webp"
          alt="Car icon"
          width={30}
          height={30}
          className="car-icon"
        />
        <Image
          src={driver.avatar}
          alt="Driver avatar"
          width={40}
          height={40}
          className="driver-avatar"
        />
        <div className="driver-info">
          <p className="driver-name">{driver.name}</p>
          <span className="rating">★ {driver.rating}</span>
          <span className="badge">Super Driver</span>
        </div>
        <div className="instant-booking">
          <span>⚡ Réservation instantanée</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
