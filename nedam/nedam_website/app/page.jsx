import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Blogs from "@/components/homes/common/blogs/Blogs2";
import Cta from "@/components/homes/common/cta/Cta";
import Partners from "@/components/common/partners/Partners";
import DownloadApp from "@/components/homes/home-4/DownloadApp";
import Features from "@/components/homes/common/features/Features";
import Feet from "@/components/homes/home-4/Feet";
import Hero from "@/components/homes/home-11/Hero";
import Service from "@/components/homes/home-4/Service";
import Steps from "@/components/homes/home-3/Proces2";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title:
    "Home 4 || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
};
export default function page() {
  return (
    <>
      
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
