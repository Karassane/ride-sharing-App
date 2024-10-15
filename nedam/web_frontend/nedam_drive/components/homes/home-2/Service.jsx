import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <section className="section pt-20">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">Our Services</h2>
        </div>
        <div className="row mt-60">
          {services.slice(0, 2).map((elm, i) => (
            <div key={i} className="col-lg-6 mb-30">
              <div className="cardServiceStyle2 wow fadeInUp">
                <div className="cardImage" >
                  <Link href={`/service-single/${elm.id}`}>
                    <Image
                      width={370}
                      height={400}
                      src={elm.image}
                      alt="Luxride"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  <h3 className="text-custom-title mb-8">
                    {elm.title}
                  </h3>
                  <Link href={`/${elm.id}`} className="text-custom-description"> 
                    <p className="text-custom-description mb-10">
                      {elm.description}
                    </p>
                  </Link>   
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
