import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Reservation from "@/components/booking-carpool/Reservation/Reservation";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import WeeklyCalendar from "@/components/booking-carpool/WeeklyCalendar/WeeklyCalendar";

export const metadata = {
  title:
    "Home 10 || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
};

export default function page() {
  return (
    <>
      <Header4 />
      <MobailHeader1 />
      {/* <Hero /> */}
      <main className="main">
        <Reservation />
      </main>
      <Footer4 />
    </>
  );
}
