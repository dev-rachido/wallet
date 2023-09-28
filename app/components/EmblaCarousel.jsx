import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay';


export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop:false},[Autoplay()]);


  return (
    <div className="embla overflow-hidden embla__container " ref={emblaRef}>
      <div className="embla__container lg:w-3/4 mx-auto my-2 opacity-3 contrast-50 ">
        <div className="embla__slide relative h-64 flex-[0_0_100%]  ">
          <Image
            
            src="/supermarkt.jpg"
            alt="none"
            objectFit="cover"
            fill
          />
        </div>
        <div className="embla__slide relative h-64 flex-[0_0_100%]">
          {" "}
          <Image
            
            src="/supermarkt2.jpg"
            alt="none"
            objectFit="cover"
            fill
          />
        </div>
        <div className="embla__slide relative h-64 flex-[0_0_100%]">Slide 3
        <Image
            src="/supermarkt3.jpg"
            alt="none"
            objectFit="cover"
            fill
          />
        </div>
        <div className="embla__slide relative h-64 flex-[0_0_100%]">Slide 3
        <Image
            
            src="/supermarkt6.jpg"
            alt="none"
            objectFit="cover"
            fill
          />
        </div>
        <div className="embla__slide relative h-64 flex-[0_0_100%]">Slide 3
        <Image
            
            src="/supermarkt4.jpg"
            alt="none"
            objectFit="cover"
            fill
          />
        </div>
        <div className="embla__slide relative h-64 flex-[0_0_100%]">Slide 3
        <Image
            src="/supermarkt5.jpg"
            alt="none"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}
