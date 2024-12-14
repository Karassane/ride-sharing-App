import Footer1 from "@/components/footers/Footer1";
import Header9 from "@/components/headers/Header9";

import Hero from "@/components/homes/nedam-drive-2nd/Hero";

import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title:
    "Home 10 || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
};

export default function page() {
  return (
    <>
      <Header9 /> <MobailHeader1 />
      <main className="main">
        <Hero />
      </main>
      <Footer1 />
    </>
  );
}
