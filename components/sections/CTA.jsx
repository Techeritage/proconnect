"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Button from "../Button";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const CTA = ({
  heading = "Ready to Find Your Next Top Hire?",
  content = "Streamline your recruitment process and connect with exceptional talent today. Let's make hiring effortless!",
  isBtn = true,
  btnCTA = "Get Started",
  btnLink = "/contact",
  placeholder,
}) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Animate background
      tl.fromTo(
        backgroundRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      // Animate heading
      tl.fromTo(
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
        },
        "-=0.5" // Overlap with previous animation
      );

      // Animate paragraph
      tl.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.7"
      );

      // Animate button
      tl.fromTo(
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
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative text-white overflow-hidden bg-[#01123b] min-h-[500px] md:min-h-[550px] myFlex justify-center"
    >
      <div
        ref={backgroundRef}
        className="bg-primary absolute -bottom-[150px] md:-bottom-[220px] left-[50%] -translate-x-[50%] size-[280px] md:size-[450px] rounded-full blur-3xl -z-0"
      />
      <div className="relative myFlex flex-col gap-y-6 justify-center">
        <h2
          ref={headingRef}
          className="font-semibold text-center max-w-[90%] mx-auto md:max-w-[70%] text-2xl md:text-4xl"
        >
          {heading}
        </h2>
        <p
          ref={paragraphRef}
          className="text-center opacity-90 max-md:max-w-[90%] max-w-[70%] text-base md:text-lg"
        >
          {content}
        </p>
        <div
          ref={buttonRef}
          className={clsx(
            "mt-6 relative p-1 rounded-full",
            isBtn
              ? "bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md"
              : "bg-white"
          )}
        >
          {!isBtn && (
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent pl-6 placeholder:text-black/70 focus:ring-0 focus:outline-none text-black/70 pr-3"
              placeholder={placeholder}
            />
          )}
          <Button
            cta={btnCTA}
            link={btnLink}
            className={clsx(
              "text-primary tracking-wider !font-semibold",
              isBtn ? "bg-white !px-10" : "bg-primary text-white"
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;