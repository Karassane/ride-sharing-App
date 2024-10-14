import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Blogs from "@/components/homes/common/blogs/Blogs2";
import Cta from "@/components/homes/common/cta/Cta";
import Partners from "@/components/common/partners/Partners";
import DownloadApp from "@/components/homes/home-4/DownloadApp";
import Features from "@/components/homes/common/features/Features";
import Feet from "@/components/homes/home-4/Feet";
import Hero from "@/components/otherPages/driver/Hero";
import Service from "@/components/homes/home-4/Service";
import Steps from "@/components/homes/home-4/Steps";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title: "NEDAM Drive - Driver",
  description: "Driver page of NEDAM Drive website",
};
export default function page() {
  return (
    <>
      <MobailHeader1 />
      <div className="hero-header-wrapper">
        <Header4 />
        <Hero />
      </div>
      <main className="main">
        <DownloadApp />
        <Steps />
        <Service />
        <Feet />
        <Features />
        <div className="border-bottom mt-30"></div>
        <Partners />
        <Blogs />
        <Cta />
      </main>
      <Footer4 />
    </>
  );
}
