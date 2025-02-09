"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";
import Steps from "../Steps";

gsap.registerPlugin(ScrollTrigger);

const HiringSteps = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const stepsRef = useRef([]);

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

    // Animate each step
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3, // Staggered effect for steps
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="myContainer">
      <h2 ref={headingRef} className="font-semibold">
        Simplified <br /> Hiring Process
      </h2>
      <p ref={subheadingRef} className="opacity-85 mt-2 text-sm w-[90%] max-md:mb-16">
        Finding the right talent doesn’t have to be complicated.{" "}
        <br className="max-md:hidden" /> Follow these three easy steps to
        connect with top candidates effortlessly.
      </p>
      <Steps stepsRef={stepsRef} />
      <div className="w-full myFlex justify-center max-md:mt-20">
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