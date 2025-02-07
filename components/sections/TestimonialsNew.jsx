"use client";

import * as React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Autoplay from "embla-carousel-autoplay";

import { QuoteUp } from "iconsax-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsNew = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section ref={sectionRef} className="myContainer border-t">
      <h2 ref={headingRef} className="font-semibold">
        What Our <br /> Clients Say
      </h2>
      <p ref={paragraphRef} className="opacity-85 mt-2 text-sm w-[90%]">
        Discover the experiences of employers and job seekers who have{" "}
        <br className="max-md:hidden" /> successfully connected through
        ProConnect.
      </p>
      <div className="md:myFlex mt-16 md:gap-10 max-w-[1440px] mx-auto">
        <div className="md:basis-[60%]">
          <CarouselPlugin />
        </div>
        <div className="max-md:hidden md:basis-[40%]">
          <div className="h-[400px] w-full max-w-[500px]">
            <Image
              src="/happy2.svg"
              width={500}
              height={400}
              alt="happy client"
            />
          </div>
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
                  <p className="text-xl md:text-2xl">
                    ProConnect helped us find the perfect candidates quickly and
                    efficiently. The process was seamless and stress-free!
                  </p>
                </div>
                <div className="pt-7 md:w-[80%] myFlex justify-between">
                  <div>
                    <p className="font-semibold">Emmanuel Adewale</p>
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
