import BreadCumb from "@/components/contact/BreadCumb";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import Offices from "@/components/contact/Offices";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title: "NEDAM Drive - Contact",
  description: "Contact page of NEDAM Drive website",
};
export default function page() {
  return (
    <>
      <Header4 />
      <MobailHeader1 />
      <main className="main">
        <BreadCumb />
        <Offices />
        <Map />
        <ContactForm />
      </main>
      <Footer4 />
    </>
  );
}
