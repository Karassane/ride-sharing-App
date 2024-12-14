"use client";

import VerticalSearchBar from "@/components/VerticalSearchBar/VerticalSearchBar";
import HorizontalSearchBar from "@/components/HorizontalSearchBar/HorizontalSearchBar";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleHorizontalSearch = (searchParams) => {
    // Exemple de redirection dynamique
    router.push(
      `/select-carpool?from=${searchParams.from}&to=${searchParams.to}&date=${searchParams.date}&passengers=${searchParams.passengers}`
    );
  };

  const handleVerticalSearch = (searchParams) => {
    router.push(
      `/select-carpool?from=${searchParams.from}&to=${searchParams.to}&date=${searchParams.date}&passengers=${searchParams.passengers}`
    );
  };

  return (
    <section className="section banner-carpooling bg-2 pt-150 pb-160 banner-carpooling">
      <div className="container-sub">
        <div className="box-banner-homepage-4">
          <p className="text-16 color-text wow fadeInUp">
            Where Would You Like To Go?
          </p>
          <h1 className="heading-52-medium color-text mb-30 wow fadeInUp">
            Nedam Carpooling,
          </h1>
          <h1 className="heading-52-large color-text mb-30 wow fadeInUp">
            Your best carpool partner !
          </h1>
        </div>
      </div>

      <div className="vertical-search-wrapper">
        <VerticalSearchBar onSearch={handleVerticalSearch} />
      </div>

      <div className="horizontal-search-wrapper">
        {/* Passez la fonction de redirection comme prop */}
        <HorizontalSearchBar onSearch={handleHorizontalSearch} />
      </div>
    </section>
  );
}
