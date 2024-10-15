import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <section className="section pt-30">
      <div className="container-sub container-sub-custom">
        
        <div className="row mt-30">
          {services.slice(0, 2).map((elm, i) => (
            <div key={i} className="col-lg-6 mb-30">
              <Link href={`/${elm.id}`} className="text-custom-description"> 
              <div className="cardServiceStyle2">
                <div className="cardImage" >
                    <Image
                      width={1000}
                      height={1500}
                      src={elm.image}
                      alt="Luxride"
                    />
                </div>
                <div className="cardInfo">
                  <h3 className="text-custom-title mb-8">
                    {elm.title}
                  </h3>
                  
                    <p className="text-custom-description mb-10">
                      {elm.description}
                    </p>
                   
                 
                </div>
              </div>
              </Link> 
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">Our Services</h2>
        </div>
      </div>
    </section>
  );
}
