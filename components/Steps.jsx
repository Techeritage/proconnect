"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  const stepsRef = useRef(null);
  const stepRefs = useRef([]);

  useGSAP(() => {
    const steps = stepRefs.current;

    steps.forEach((step, index) => {
      // Create separate animations for each step
      gsap.fromTo(
        step,
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
          delay: index * 0.3, // Staggered animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 90%",
          },
        }
      );

      // Hover effect for steps
      step.addEventListener("mouseenter", () => {
        gsap.to(step.querySelector(".step-number"), {
          scale: 1.1,
          rotation: 360,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });

        gsap.to(step, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power1.inOut",
        });
      });

      step.addEventListener("mouseleave", () => {
        gsap.to(step.querySelector(".step-number"), {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });

        gsap.to(step, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power1.inOut",
        });
      });
    });
  });

  return (
    <div
      ref={stepsRef}
      className="md:relative max-md:grid gap-y-20 md:gap-y-10 md:bg-wavy wavy md:max-w-4xl mx-auto bg-contain md:mt-28 md:min-w-max md:min-h-[300px]"
    >
      <div
        ref={(el) => (stepRefs.current[0] = el)}
        className="md:absolute -top-7 -left-[120px] myFlex flex-col md:max-w-[300px] justify-center gap-3"
      >
        <div className="bg-primary rounded-full size-16 flex-center step-number">
          <h2 className="font-semibold text-white">1</h2>
        </div>
        <p className="text-base text-center md:text-lg font-semibold max-w-[80%]">
          Submit Your Requirements
        </p>
        <p className="text-center max-md:max-w-[90%]">
          Tell us about your hiring needs. Fill out a form with job details,
          qualifications, and specific requirements.
        </p>
      </div>

      <div
        ref={(el) => (stepRefs.current[1] = el)}
        className="md:absolute top-4 left-[50%] md:max-w-[300px] md:-translate-x-[50%] myFlex flex-col justify-center gap-3"
      >
        <div className="bg-primary rounded-full size-16 flex-center step-number">
          <h2 className="font-semibold text-white">2</h2>
        </div>
        <p className="text-base md:text-lg font-semibold max-w-[80%] text-center">
          Candidate Shortlisting
        </p>
        <p className="text-center max-md:max-w-[90%]">
          We source, screen, and verify candidates to match your needs. Review
          our top picks for your role.
        </p>
      </div>

      <div
        ref={(el) => (stepRefs.current[2] = el)}
        className="md:absolute -right-[120px] -top-7 md:max-w-[300px] myFlex flex-col justify-center gap-3"
      >
        <div className="bg-primary rounded-full size-16 flex-center step-number">
          <h2 className="font-semibold text-white">3</h2>
        </div>
        <p className="text-base md:text-lg font-semibold max-w-[80%] text-center">
          Schedule Interviews
        </p>
        <p className="text-center max-md:max-w-[90%]">
          Select your preferred candidates and schedule interviews with ease.
          We'll handle the coordination for you.
        </p>
      </div>
    </div>
  );
};

export default Steps;
