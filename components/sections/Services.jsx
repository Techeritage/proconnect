"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { raleway } from "@/app/layout";
import { ServicesList } from "@/constant/ServicesList";
import { CheckCheck } from "lucide-react";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Animate section title and subtitle
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate service cards with stagger effect
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2, // Stagger delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );

      // // Subtle hover effect
      // card.addEventListener("mouseenter", () => {
      //   gsap.to(card, {
      //     scale: 1.05,
      //     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      //     duration: 0.3,
      //     ease: "power1.inOut",
      //   });
      // });

      // card.addEventListener("mouseleave", () => {
      //   gsap.to(card, {
      //     scale: 1,
      //     boxShadow: "none",
      //     duration: 0.3,
      //     ease: "power1.inOut",
      //   });
      // });
    });

    // Animate call-to-action section
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section ref={sectionRef} className="bg-bgGray">
      <div className="myContainer">
        <h2 ref={titleRef} className="font-semibold">
          Services Tailored <br /> to Your Needs
        </h2>
        <p ref={subtitleRef} className="opacity-85 mt-2 text-sm w-[90%]">
          From finding top talent to simplifying recruitment,{" "}
          <br className="max-md:hidden" /> ProConnect offers a range of services
          designed to empower your business.
        </p>

        {/**Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mt-16">
          {ServicesList.slice(0, 6).map((serv, index) => (
            <div
              key={serv.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-service p-6 py-8 border border-[#b3c4ee] rounded-2xl space-y-6"
            >
              <div className="relative">
                <div className="relative p-3 w-fit rounded-full bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md">
                  <span className="text-primary">{serv.icon}</span>
                </div>

                <h1
                  className={`${raleway.className} font-bold lineText opacity-50 !text-6xl absolute right-0 top-[50%] translate-y-[-50%]`}
                >{`0${index + 1}`}</h1>
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
        <div ref={buttonRef} className="mt-14">
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
