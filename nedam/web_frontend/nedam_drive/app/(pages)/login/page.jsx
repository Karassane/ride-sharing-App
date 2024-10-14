import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Login from "@/components/otherPages/Login";
import React from "react";

export const metadata = {
  title:
    "Login || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header4 /> <MobailHeader1 />
      <main className="main">
        <Login />
      </main>
      <Footer4 />
    </>
  );
}
