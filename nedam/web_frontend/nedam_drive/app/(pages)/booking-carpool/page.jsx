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
  const driverInfo = {
    avatar: "https://example.com/driver-avatar.jpg",
    name: "zdek",
    rating: 4.3,
  };

  return (
    <>
      <Header />
      <MobailHeader1 />
      {/* <Hero /> */}
      <main className="main">
        <Reservation />
        <RideInfoComponent />
        <div className="driver-info-container">
          <DriverInfoComponent driver={driverInfo} />
        </div>
      </main>
      <Footer4 />
    </>
  );
}
