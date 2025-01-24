"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { QuoteUp } from "iconsax-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsNew = () => {
  return (
    <section className="myContainer border-t">
      <h1 className="">
        What Our <br /> Clients Say
      </h1>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        Discover the experiences of employers and job seekers who have{" "}
        <br className="max-md:hidden" /> successfully connected through
        ProConnect.
      </p>
      <div className="md:myFlex mt-16 md:gap-10 max-w-[1440px] mx-auto">
        <div className="md:basis-[60%]">
          <CarouselPlugin />
        </div>
        <div className="max-md:hidden md:basis-[40%]">
          <div
            style={{
              clipPath:
                "polygon(15% 0, 100% 0, 100% 72%, 85% 100%, 0 100%, 0 30%)",
            }}
            className="bg-bgGray h-[400px] w-full max-w-[500px] rounded-tr-2xl rounded-bl-2xl rounded-tl-[95px] rounded-br-[90px]"
          />
        </div>
      </div>
    </section>
  );
};

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="relative w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {/* Navigation Buttons */}
        <CarouselPrevious className="btn size-10 bottom-2 right-[70px] md:right-[200px] z-10" />
        <CarouselNext className="btn size-10 bottom-2 z-10 right-5 md:right-[150px] bg-primary text-white" />

        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="w-full">
                <div className="space-y-5 md:w-[80%] pb-8 border-b">
                  <QuoteUp size="32" color="#023BC6" variant="Bold" />
                  <p className="text-xl md:text-2xl font-aeoReg">
                    ProConnect helped us find the perfect candidates quickly and
                    efficiently. The process was seamless and stress-free!
                  </p>
                </div>
                <div className="pt-7 md:w-[80%] myFlex justify-between">
                  <div>
                    <p className="font-aeoBold">Emmanuel Adewale</p>
                    <p className="opacity-85 text-sm">Recruiter</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default TestimonialsNew;
