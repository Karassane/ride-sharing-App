import Footer4 from "@/components/footers/Footer4";
import Header from "@/components/headers/HeaderContact";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import DriverInfos from "@/components/DriverInfos/DriverInfos";

export const metadata = {
  title: "carpool-selection || Carpool Selection",
  description: "Carpool Selection",
};

export default function Page() {
  const driverData = {
    avatar: null,
    name: "Fares",
    age: 29,
    experience: "Confirmé",
    rating: 4.9,
    reviews: 4,
    bio: "J'aime bien discuter quand je me sens à l'aise",
    isProfessional: false,
    tripsPublished: 6,
    memberSince: "avril 2011",
  };

  return (
    <>
      <MobailHeader1 />
      <Header />
      <main className="main-container">
        <DriverInfos driver={driverData} />
      </main>
      <Footer4 />
    </>
  );
}
