import React from "react";
import TripCard from "@/components/TripCard/TripCard"; // Composant Trip Card

export default function Hero() {
  return (
    <div className="centered-container">
      <TripCard
        date="Demain"
        fromCity="Paris"
        toCity="Algiers"
        departureTime="00:30"
        arrivalTime="02:40"
        duration="2h10"
        price="9,99"
        driver={{
          name: "Fares",
          avatar: "/assets/imgs/page/driver/driver_1.webp",
          rating: "4.8",
        }}
      />
    </div>
  );
}
