"use client";

import { I24Support } from "iconsax-react";
import { Sparkles } from "lucide-react";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyChooseUs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial states
    gsap.set(".section-title", { opacity: 0, y: 30 });
    gsap.set(".feature-card", { opacity: 0, y: 40 });
    gsap.set(".cta-text", { opacity: 0, y: 20 });
    gsap.set(".feature-icon", { scale: 0.5, opacity: 0 });
    
    // Animate section title
    gsap.to(".section-title", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
      }
    });

    // Animate feature cards
    gsap.to(".feature-card", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 75%",
      }
    });

    // Animate icons
    gsap.to(".feature-icon", {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 75%",
      }
    });

    // Animate CTA text
    gsap.to(".cta-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-text",
        start: "top 85%",
      }
    });

    // Add hover animations for cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(card.querySelector('.feature-icon'), {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(card.querySelector('.feature-icon'), {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <section className="myContainer !pb-20">
      <div className="section-title">
        <h2 className="font-semibold">Why Choose Us</h2>
        <p className="opacity-85 mt-2 text-sm w-[90%]">
          We make hiring simple, effective, and stress-free. Here's why employers
          trust us:
        </p>
      </div>
      
      <div className="features-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-14 md:mt-20 place-items-center">
        <div className="feature-card myFlex flex-col justify-center gap-3 bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] h-[250px] mx-auto">
          <Rocket size={32} className="feature-icon fill-primary text-primary" />
          <h4 className="font-semibold text-center tracking-wider mt-5 mb-2">
            Streamlined Hiring Process
          </h4>
          <p className="text-center opacity-85 text-sm leading-relaxed">
            Save time with our efficient and user-friendly platform designed to
            simplify every step of your recruitment journey.
          </p>
        </div>
        
        <div className="feature-card relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] lg:min-h-[280px] mx-auto">
          <div className="relative z-10 myFlex flex-col justify-center h-full gap-3">
            <Sparkles size={32} className="feature-icon fill-primary text-primary" />
            <h4 className="font-semibold text-center tracking-wider mt-5 mb-2">
              Access to Top Talent
            </h4>
            <p className="text-center opacity-95 text-sm leading-relaxed w-[90%] mx-auto">
              Discover exceptional professionals handpicked to meet your
              specific needs. Quality talent, just a click away.
            </p>
          </div>
        </div>
        
        <div className="feature-card myFlex flex-col justify-center gap-3 bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] h-[250px] mx-auto">
          <I24Support size="36" className="feature-icon" color="#023BC6" variant="Bold" />
          <h4 className="font-semibold text-center tracking-wider mt-5 mb-2">
            Dedicated Support
          </h4>
          <p className="text-center opacity-85 text-sm leading-relaxed">
            Enjoy personalized assistance every step of the way. Our team is
            here to ensure your hiring experience is smooth and successful.
          </p>
        </div>
      </div>
      
      <div className="mt-14 cta-text">
        <p className="text-sm mb-3 font-aeoReg">
          Ready to Hire Smarter?{" "}
          <Link href="/contact" className="border-b italic border-primary font-semibold hover:text-primary transition-colors duration-300">
            Let's Connect!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;