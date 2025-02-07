"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const HeroNew = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const videoDesktopRef = useRef(null);
  const videoMobileRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Video frame animation
      gsap.set("#video-frame", {
        scale: 0.9,
        borderRadius: "20px",
      });
      gsap.from("#video-frame", {
        scale: 1,
        borderRadius: "0",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Staggered entrance animations
      tl.fromTo(
        headlineRef.current,
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
        }
      )
        .fromTo(
          paragraphRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          }
        )
        .fromTo(
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
          }
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      id="video-frame"
    >
      {/* Desktop Video */}
      <video
        ref={videoDesktopRef}
        autoPlay
        src="/hero.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute max-md:hidden inset-0 w-full h-full object-cover object-center"
      />

      {/* Mobile Video */}
      <video
        ref={videoMobileRef}
        autoPlay
        src="/hero99.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute md:hidden inset-0 w-full h-full object-cover object-[70%_center]"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 md:gap-8 text-white bg-black/70 md:bg-black/30 z-40 px-4">
        <h1 ref={headlineRef} className="text-center">
          Empowering Talent. <br />
          <span>Building Exceptional Teams.</span>
        </h1>
        <p
          ref={paragraphRef}
          className="opacity-80 max-w-[98%] md:max-w-[60%] mx-auto text-center md:text-lg"
        >
          At ProConnect, we don't just connect you with top talent—we help
          nurture it. From skill development and leadership training to seamless
          recruitment solutions, we fuel your business growth with people who
          thrive.
        </p>
        <Button
          ref={buttonRef}
          cta="Get Started"
          className="bg-primary text-white !px-10"
          link="/contact"
        />
      </div>
    </section>
  );
};

export default HeroNew;
