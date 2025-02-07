"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Button from "../Button";
import Steps from "../Steps";

gsap.registerPlugin(ScrollTrigger);

const HiringSteps = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Animate section title
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

    // Animate subtitle
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

    // Animate button
    gsap.fromTo(
      buttonRef.current,
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
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section ref={sectionRef} className="myContainer">
      <h2 ref={titleRef} className="font-semibold">
        Simplified <br /> Hiring Process
      </h2>
      <p
        ref={subtitleRef}
        className="opacity-85 mt-2 text-sm w-[90%] max-md:mb-16"
      >
        Finding the right talent doesn't have to be complicated.{" "}
        <br className="max-md:hidden" /> Follow these three easy steps to
        connect with top candidates effortlessly.
      </p>
      <Steps />
      <div
        ref={buttonRef}
        className="w-full myFlex justify-center max-md:mt-20"
      >
        <Button
          cta="Start Hiring"
          link="/employers"
          className="text-white bg-primary !px-20 tracking-wider"
        />
      </div>
    </section>
  );
};

export default HiringSteps;
