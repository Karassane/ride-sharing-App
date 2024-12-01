"use client";

import React from "react";
import TripCard from "@/components/TripCard/TripCard";
import Filters from "@/components/Filters/Filters";
import FilterTabs from "@/components/FilterTabs/FilterTabs";
import TripSummary from "@/components/TripSummary/TripSummary";
import { useRouter } from "next/navigation";

export default function Hero({ tabs }) {
  const router = useRouter();

  const handleTripCardClick = () => {
    router.push("/carpool-reservation");
  };

  return (
    <div className="hero-container">
      {/* Filters Section */}
      <div className="filters-wrapper">
        <Filters />
      </div>

      {/* Main Content Section */}
      <div className="main-content-wrapper">
        {/* Tabs Section */}
        <div className="tabs-wrapper">
          <FilterTabs tabs={tabs} />
        </div>

        {/* Trip Summary Section */}
        <div className="summary-wrapper">
          <TripSummary
            date="Dim. 8 déc."
            from="Paris, France"
            to="Marseille, France"
            availableTrips={10}
          />
        </div>

        {/* Trips Section */}
        <div className="trips-wrapper">
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
            onClick={handleTripCardClick}
          />
        </div>
      </div>
    </div>
  );
}
