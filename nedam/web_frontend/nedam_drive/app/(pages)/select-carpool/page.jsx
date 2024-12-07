import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import HorizontalSearchBar from "@/components/HorizontalSearchBar/HorizontalSearchBar";
import Hero from "@/components/select-carpool/Hero";
import MobailHeader1 from "@/components/headers/MobailHeader1";

export const metadata = {
  title: "carpool-selection || Carpool Selection",
  description: "Carpool Selection",
};

export default function Page() {
  const tabs = {
    all: {
      label: "Tout",
      icon: "⚪",
      count: 6,
    },
    carpooling: {
      label: "Covoiturage",
      icon: "🚗",
      count: 5,
    },
    bus: {
      label: "Bus",
      icon: "🚌",
      count: 1,
    },
  };

  return (
    <>
      <Header4 />
      <MobailHeader1 />

      <main className="main_carpool">
        <section className="search-section">
          <HorizontalSearchBar />
        </section>
        <section className="hero-section">
          {/* Passez `tabs` en tant que prop au Hero */}
          <Hero tabs={tabs} />
        </section>
      </main>

      <Footer4 />
    </>
  );
}
