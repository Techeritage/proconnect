"use client";

import { I24Support } from "iconsax-react";
import { Sparkles } from "lucide-react";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animate section title and subtitle
    gsap.fromTo(
      sectionRef.current.querySelector('h2'),
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      sectionRef.current.querySelector('p:first-of-type'),
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Animate cards with stagger effect
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            // toggleActions: "play none none reverse"
          }
        }
      );

      // Subtle hover effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.inOut"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power1.inOut"
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="myContainer !pb-20">
      <h2 className="font-semibold">Why Choose Us</h2>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        We make hiring simple, effective, and stress-free. Here's why employers
        trust us:
      </p>
      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-14 md:mt-20 place-items-center">
        <div 
          ref={el => cardsRef.current[0] = el}
          className="myFlex flex-col justify-center gap-3 bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] h-[250px] mx-auto"
        >
          <Rocket size={32} className="fill-primary text-primary" />
          <h4 className="font-semibold text-center tracking-wider mt-5 mb-2">
            Streamlined Hiring Process
          </h4>
          <p className="text-center opacity-85 text-sm leading-relaxed">
            Save time with our efficient and user-friendly platform designed to
            simplify every step of your recruitment journey.
          </p>
        </div>
        <div 
          ref={el => cardsRef.current[1] = el}
          className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] lg:min-h-[280px] mx-auto"
        >
          <div className="relative z-10 myFlex flex-col justify-center h-full gap-3">
            <Sparkles size={32} className="fill-primary text-primary" />
            <h4 className="font-semibold text-center tracking-wider mt-5 mb-2">
              Access to Top Talent
            </h4>
            <p className="text-center opacity-95 text-sm leading-relaxed w-[90%] mx-auto">
              Discover exceptional professionals handpicked to meet your
              specific needs. Quality talent, just a click away.
            </p>
          </div>
        </div>
        <div 
          ref={el => cardsRef.current[2] = el}
          className="myFlex flex-col justify-center gap-3 bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] h-[250px] mx-auto"
        >
          <I24Support size="36" color="#023BC6" variant="Bold" />
          <h4 className="font-semibold text-center tracking-wider mt-5 mb-2">
            Dedicated Support
          </h4>
          <p className="text-center opacity-85 text-sm leading-relaxed">
            Enjoy personalized assistance every step of the way. Our team is
            here to ensure your hiring experience is smooth and successful.
          </p>
        </div>
      </div>
      <div className="mt-14">
        <p className="text-sm mb-3 font-aeoReg">
          Ready to Hire Smarter?{" "}
          <Link href="/contact" className="border-b italic border-primary font-semibold">
            Let's Connect!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;