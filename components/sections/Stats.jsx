"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SpiralCircle from "../SpiralCircle";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const Stats = ({ className }) => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    const counterElements = countersRef.current;

    counterElements.forEach((el, index) => {
      const numberEl = el.querySelector('h1');
      const value = parseFloat(numberEl.textContent);
      const suffix = numberEl.textContent.replace(/[0-9.]/g, '');

      gsap.fromTo(
        numberEl,
        { 
          innerHTML: 0 
        },
        {
          innerHTML: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
          },
          onUpdate: function() {
            // Format the number with appropriate suffix
            const currentValue = Math.round(gsap.getProperty(numberEl, "innerHTML"));
            numberEl.textContent = `${currentValue}${suffix}`;
          },
          onComplete: () => {
            // Ensure final value is exact
            numberEl.textContent = `${value}${suffix}`;
          }
        }
      );

      // Subtle entrance animation for paragraph
      gsap.fromTo(
        el.querySelector('p'),
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }
        }
      );
    });

    // Overall section animation
    gsap.fromTo(
      sectionRef.current,
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
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={clsx(
        "md:myContainer md:!py-20 max-md:bg-gradient-to-b from-white to-bgGray",
        className
      )}
    >
      <div className="relative stat text-white bg-primary w-full overflow-hidden h-[450px] md:h-[300px] md:rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-[82px] md:rounded-br-[95px]">
        <SpiralCircle
          dimColor="#023BC6"
          mainColor="#3562d1"
          position="-bottom-[170px] -left-[170px]"
        />
        <SpiralCircle
          dimColor="#023BC6"
          mainColor="#3562d1"
          position="-top-[170px] -right-[170px]"
        />
        <div className="relative z-10 h-full myFlex max-md:flex-col justify-evenly">
          <div 
            ref={el => countersRef.current[0] = el}
            className="myFlex flex-col justify-center"
          >
            <h1>10K+</h1>
            <p>Verified Professionals</p>
          </div>
          <div 
            ref={el => countersRef.current[1] = el}
            className="myFlex flex-col justify-center"
          >
            <h1>100K+</h1>
            <p>Successful Connections</p>
          </div>
          <div 
            ref={el => countersRef.current[2] = el}
            className="myFlex flex-col justify-center"
          >
            <h1>95%</h1>
            <p>Hiring Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;