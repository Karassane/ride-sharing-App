import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Register from "@/components/otherPages/Register";
import React from "react";

export const metadata = {
  title:
    "Register || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header4 /> <MobailHeader1 />
      <main className="main">
        <Register />
      </main>
      <Footer4 />
    </>
  );
}
