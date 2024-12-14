import Footer4 from "@/components/footers/Footer4";
import Header from "@/components/headers/HeaderContact";
import Reservation from "@/components/booking-carpool/Reservation/Reservation";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import RideInfoComponent from "@/components/booking-carpool/RideInfoComponent/RideInfoComponent";
import DriverInfoComponent from "@/components/booking-carpool/DriverInfoComponent/DriverInfoComponent";

export const metadata = {
  title:
    "Booking Carpool || Booking and reserve a Driver for the Carpool Course",
  description: "Booking Carpool",
};

export default function page() {
  const driverData = {
    avatar: null,
    name: "Fares",
    rating: 4.9,
    reviews: 4,
    carModel: "Volkswagen Voyage - Gris",
  };

  return (
    <>
      <Header />
      <MobailHeader1 />
      <main className="main">
        {/* Le styles dans carpool_app.scss ! */}
        <div className="page-layout">
          {/* Section gauche */}
          <div className="left-column">
            <Reservation />
            <DriverInfoComponent driver={driverData} />
          </div>

          {/* Section droite */}
          <div className="right-column">
            <RideInfoComponent />
          </div>
        </div>
      </main>
      <Footer4 />
    </>
  );
}
