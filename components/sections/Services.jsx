"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway } from "@/app/layout";
import { ServicesList } from "@/constant/ServicesList";
import { CheckCheck } from "lucide-react";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate subheading
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Animate service cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15, // Staggered effect
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-bgGray">
      <div className="myContainer">
        <h2 ref={headingRef} className="font-semibold">
          Services Tailored <br /> to Your Needs
        </h2>
        <p ref={subheadingRef} className="opacity-85 mt-2 text-sm w-[90%]">
          From finding top talent to simplifying recruitment,{" "}
          <br className="max-md:hidden" />
          ProConnect offers a range of services designed to empower your
          business.
        </p>
        {/** Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mt-16">
          {ServicesList.slice(0, 6).map((serv, index) => (
            <div
              key={serv.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-service p-6 py-8 border border-[#b3c4ee] rounded-2xl space-y-6 opacity-0"
            >
              <div className="relative">
                <div className="relative p-3 w-fit rounded-full bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md">
                  <span className="text-primary">{serv.icon}</span>
                </div>

                <h1
                  className={`${raleway.className} font-bold lineText opacity-50 !text-6xl absolute right-0 top-[50%] translate-y-[-50%]`}
                >
                  {`0${index + 1}`}
                </h1>
              </div>
              <p className="text-base md:text-lg font-semibold max-w-[80%]">
                {serv.title}
              </p>
              <p className="max-w-[85%] opacity-90">{serv.description}</p>
              {serv.keyOfferings && (
                <div className="space-y-2">
                  {serv.keyOfferings.map((key) => (
                    <div key={key} className="myFlex gap-2">
                      <CheckCheck size={18} className="text-primary" />{" "}
                      <span className="tracking-wider">{key}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-14">
          <p className="text-sm mb-3 font-aeoReg">
            Ready to transform your hiring process?
          </p>
          <Button
            cta="View Our Services"
            link="/services"
            className="bg-primary text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
