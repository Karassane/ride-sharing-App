"use client";

import React from "react";
import TripCard from "@/components/TripCard/TripCard";
import Filters from "@/components/Filters/Filters"; // Importez le composant Filters
import { useRouter } from "next/navigation"; // Importer useRouter

export default function Hero() {
  const router = useRouter();

  const handleTripCardClick = () => {
    router.push("/carpool-reservation"); // Rediriger vers la page /reservation
  };

  return (
    <div className="hero-container">
      <div className="centered-container">
        <Filters /> {/* Ajoutez les filtres ici */}
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
          onClick={handleTripCardClick} // Passez la fonction de clic
        />
      </div>
    </div>
  );
}
