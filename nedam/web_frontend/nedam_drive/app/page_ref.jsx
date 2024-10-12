import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Feet from "@/components/homes/home-4/Feet";
import Hero from "@/components/homes/home-11/Hero";
import Service from "@/components/homes/home-4/Service";
import Steps from "@/components/homes/home-3/Proces2";
import MobailHeader1 from "@/components/headers/MobailHeader1";

export const metadata = {
  title: "Nedam Drive - Home",
  description: "Nedam Drive Service",
};

export default function page() {
  return (
    <>
      <Header4 /> <MobailHeader1 />
      <main className="main">
        <Hero />
        <Steps />
        <Service />
        <Feet />
      </main>
      <Footer4 />
    </>
  );
}
