import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Blogs from "@/components/homes/common/blogs/Blogs2";
import Cta from "@/components/homes/common/cta/Cta";
import Partners from "@/components/common/partners/Partners";
import DownloadApp from "@/components/homes/home-4/DownloadApp";
import Features from "@/components/homes/common/features/Features";
import Feet from "@/components/homes/home-4/Feet";
import Hero from "@/components/homes/home-4/Hero";
import Services from "@/components/homes/home-10/Services";
import Steps from "@/components/homes/home-4/Steps";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title: "NEDAM Drive",
  description: "NEDAM Drive services",
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
        <Services />
        <DownloadApp />
        <Steps />
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
