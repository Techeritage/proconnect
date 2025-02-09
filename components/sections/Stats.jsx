"use client";

import SpiralCircle from "../SpiralCircle";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stats = ({ className }) => {
  const statsRef = useRef(null);
  const spiralRefs = useRef([]);
  const numberRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(".stat-number", { opacity: 0, y: 30 });
      gsap.set(".stat-text", { opacity: 0, y: 20 });
      
      // Spiral animations
      gsap.to(spiralRefs.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Stats container animation
      gsap.from(".stat", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stat",
          start: "top 80%",
        }
      });

      // Number counting animations
      const stats = [
        { value: 10, suffix: "K+" },
        { value: 100, suffix: "K+" },
        { value: 95, suffix: "%" }
      ];

      numberRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".stat",
            start: "top 80%",
          }
        });

        let currentValue = { val: 0 };
        gsap.to(currentValue, {
          val: stats[index].value,
          duration: 2,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ".stat",
            start: "top 80%",
          },
          onUpdate: () => {
            if (el) {
              el.textContent = `${Math.round(currentValue.val)}${stats[index].suffix}`;
            }
          }
        });
      });

      // Text fade in animations
      gsap.to(".stat-text", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stat",
          start: "top 80%",
        }
      });

      // Hover effect for stat items
      const statItems = document.querySelectorAll('.stat-item');
      statItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -5,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={statsRef}
      className={clsx(
        "md:myContainer md:!py-20 max-md:bg-gradient-to-b from-white to-bgGray",
        className
      )}
    >
      <div className="relative stat text-white bg-primary w-full overflow-hidden h-[450px] md:h-[300px] md:rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-[82px] md:rounded-br-[95px]">
        <div 
          ref={el => spiralRefs.current[0] = el}
          className="absolute -bottom-[170px] -left-[170px]"
        >
          <SpiralCircle
            dimColor="#023BC6"
            mainColor="#3562d1"
          />
        </div>
        <div 
          ref={el => spiralRefs.current[1] = el}
          className="absolute -top-[170px] -right-[170px]"
        >
          <SpiralCircle
            dimColor="#023BC6"
            mainColor="#3562d1"
          />
        </div>
        <div className="relative z-10 h-full myFlex max-md:flex-col justify-evenly">
          <div className="stat-item myFlex flex-col justify-center">
            <h1 
              ref={el => numberRefs.current[0] = el}
              className="stat-number"
            >
              0
            </h1>
            <p className="stat-text">Verified Professionals</p>
          </div>
          <div className="stat-item myFlex flex-col justify-center">
            <h1 
              ref={el => numberRefs.current[1] = el}
              className="stat-number"
            >
              0
            </h1>
            <p className="stat-text">Successful Connections</p>
          </div>
          <div className="stat-item myFlex flex-col justify-center">
            <h1 
              ref={el => numberRefs.current[2] = el}
              className="stat-number"
            >
              0
            </h1>
            <p className="stat-text">Hiring Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;