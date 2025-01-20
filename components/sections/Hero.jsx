"use client";

import React, { useEffect } from "react";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Briefcase, MedalStar } from "iconsax-react";
import { ArrowUp2 } from "iconsax-react";
import { Percent } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline();
      tl.to("#imageCont", {
        scale: 1,
        top: "140px",
        left: "55vw",
        transform: "none",
        inset: "0", // Reset any previous inset
        ease: "power2.inOut",
        duration: 1.2,
      }).to(".check > *", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 0.8,
      });

      // Cleanup function to kill the timeline when the media query no longer matches
      return () => {
        tl.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.to("#imageCont", {
        scale: 1,
        top: "900px",
        //left: "50%",
        //transform: "translate(-50%, 0)",
        //inset: "0",
        ease: "power2.inOut",
        paddingBottom: "50px",
        duration: 1.2,
      }).to(".check > *", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 0.8,
      });

      // Cleanup function to kill the timeline when the media query no longer matches
      return () => {
        tl.kill();
      };
    });

    // Cleanup function to remove matchMedia listeners when the component unmounts
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className="bg-bgGray max-md:pb-24 pt-24 relative min-h-dvh w-[100vw] overflow-x-hidden">
      <div className="myFlex myContainer max-md:flex-col min-w-full">
        <div className="basis-1/2 space-y-7 check">
          <h1 className="opacity-0 translate-y-4">
            Discover Top Talent, <br /> Build Exceptional <br /> Teams.
          </h1>
          <div className="opacity-0 translate-y-4">
            <p className="opacity-80 max-w-[80%]">
              ProConnect offers seamless recruitment solutions tailored to your
              business. We connect you with top professionals to achieve your
              goals faster.
            </p>
          </div>
          <div className="myFlex max-md:flex-col max-md:!items-start max-md:gap-y-3 md:space-x-4 opacity-0 translate-y-4">
            <Button
              cta="Get Started Today"
              className="bg-primary text-white"
              link="#"
            />
            <Button
              cta="Browse Our Services"
              link="#"
              className="bg-white ring-1 ring-gray-200"
              icon={<ArrowRight size={18} />}
            />
          </div>
          <div className="myFlex max-md:!items-start max-md:gap-y-7 gap-10 max-md:flex-col md:pt-7 opacity-0 translate-y-4">
            <div className="myFlex space-x-3">
              <Briefcase color="#023BC6" size={28} variant="Bold" />
              <div className="space-y-[2px]">
                <p className="font-aeoBold text-sm">Streamlined Hiring</p>
                <p className="opacity-80 text-sm whitespace-nowrap">
                  Simplify your recruitment process.
                </p>
              </div>
            </div>
            <div className="myFlex space-x-3">
              <MedalStar color="#023BC6" size={28} variant="Bold" />
              <div className="space-y-[2px]">
                <p className="font-aeoBold text-sm">Exceptional Talent</p>
                <p className="opacity-80 text-sm whitespace-nowrap">
                  Find the best fit for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 myFlex justify-center bg-bgGray">
          <div
            id="imageCont"
            className="flex gap-2 md:gap-3 scale-105 md:scale-125 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-30"
          >
            <div className="relative flex flex-col gap-2 md:gap-3">
              <div className="relative w-[170px] h-[170px] md:w-[225px] md:h-[225px] rounded-tl-2xl">
                <div className="absolute max-md:hidden min-w-[150px] p-2 md:py-3 myFlex gap-x-2 md:gap-x-4 rounded-lg bg-white shadow-2xl bottom-3 -left-4 md:-left-24 z-50">
                  <div className="myFlex">
                    <p className="text-lg md:text-3xl font-aeoBold text-primary">
                      100
                    </p>
                    <div className="flex flex-col w-fit -mt-1.5 md:-mt-3 ml-[1px] md:ml-[2px]">
                      <div className="h-fit">
                        <ArrowUp2
                          color="#023bc6"
                          size={14}
                          className="max-md:size-2"
                        />
                        <ArrowUp2
                          color="#023bc6"
                          size={14}
                          className="-mt-[6px] md:-mt-[9px] max-md:size-2"
                        />
                      </div>
                      <Percent
                        color="#023bc6"
                        size={14}
                        className="max-md:size-2"
                      />
                    </div>
                  </div>
                  <div className="md:space-y-2">
                    <p className="text-[10px] md:text-sm font-aeoReg whitespace-nowrap">
                      Effortless Hiring
                    </p>
                    <div className="w-14 h-[7px] md:h-[9px] rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100" />
                  </div>

                  <div className="ml-2 min-w-7 md:min-w-10 h-[14px] md:h-[22px] bg-green-500 rounded-full relative">
                    <div className="absolute right-[1px] top-[50%] translate-y-[-50%] w-3 h-3 md:w-5 md:h-5 bg-white rounded-full" />
                  </div>
                </div>
                <Image
                  src="/officeee.jpg"
                  width={1000}
                  height={225}
                  alt="office"
                  className="absolute inset-0 h-[170px] md:h-[225px] object-cover rounded-tl-2xl bg-white"
                />
              </div>
              <div
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 25% 100%, 0 74%, 0 0)",
                }}
                className="relative w-[170px] h-[170px] md:w-[225px] md:h-[225px]"
              >
                <Image
                  src="/officeee.jpg"
                  width={1000}
                  height={225}
                  alt="office"
                  className="absolute rounded-bl-[55px] md:rounded-bl-[70px] inset-0 h-[170px] md:h-[225px] object-cover bg-white"
                />
              </div>
              <div className="absolute md:hidden min-w-[150px] p-2 md:py-3 myFlex gap-x-2 md:gap-x-4 rounded-lg bg-white shadow-2xl bottom-3 -left-5 md:-left-24 z-50">
                <div className="myFlex">
                  <p className="text-lg md:text-3xl font-aeoBold text-primary">
                    100
                  </p>
                  <div className="flex flex-col w-fit -mt-1.5 md:-mt-3 ml-[1px] md:ml-[2px]">
                    <div className="h-fit">
                      <ArrowUp2
                        color="#023bc6"
                        size={14}
                        className="max-md:size-2"
                      />
                      <ArrowUp2
                        color="#023bc6"
                        size={14}
                        className="-mt-[6px] md:-mt-[9px] max-md:size-2"
                      />
                    </div>
                    <Percent
                      color="#023bc6"
                      size={14}
                      className="max-md:size-2"
                    />
                  </div>
                </div>
                <div className="md:space-y-2">
                  <p className="text-[10px] md:text-sm font-aeoReg whitespace-nowrap">
                    Effortless Hiring
                  </p>
                  <div className="w-14 h-[7px] md:h-[9px] rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100" />
                </div>

                <div className="ml-2 min-w-6 md:min-w-10 h-[14px] md:h-[22px] bg-green-500 rounded-full relative">
                  <div className="absolute right-[1px] top-[50%] translate-y-[-50%] w-3 h-3 md:w-5 md:h-5 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative w-fit h-fit">
                <div className="absolute md:min-w-[170px] p-2 md:py-3 pr-4 myFlex gap-x-2 md:gap-x-4 rounded-lg bg-white shadow-2xl bottom-3 -right-5 md:-right-24 z-50">
                  <MedalStar
                    color="#F4B800"
                    className="size-7 md:size-10"
                    variant="Bold"
                  />
                  <div className="md:space-y-2">
                    <p className="text-[10px] md:text-sm font-aeoReg whitespace-nowrap">
                      Employers Satisfaction
                    </p>
                    <div className="w-14 h-[7px] md:h-[9px] rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100" />
                  </div>
                </div>
                <div
                  style={{
                    clipPath:
                      "polygon(78% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                  }}
                  className="relative w-[170px] h-[215px] md:w-[225px] md:h-[325px]"
                >
                  <Image
                    src="/officeee.jpg"
                    width={1000}
                    height={1000}
                    alt="office"
                    className="absolute rounded-tr-[47px] md:rounded-tr-[60px] h-[215px] md:h-[325px] object-cover inset-0 bg-white"
                  />
                </div>
              </div>

              <div className="w-[170px] h-[125px] md:w-[225px] md:h-[125px] bg-[#e6f5f8] rounded-br-2xl relative overflow-hidden">
                <div className="absolute -left-[160px] -top-5">
                  <div className="w-[300px] h-[300px] rounded-full bg-[#83cbdc]/50 relative flex items-center justify-center">
                    <div className="absolute w-[90%] h-[90%] rounded-full bg-[#e6f5f8] flex items-center justify-center">
                      <div className="absolute w-[80%] h-[80%] rounded-full bg-[#83cbdc]/50 flex items-center justify-center">
                        <div className="absolute w-[86%] h-[86%] rounded-full bg-[#e6f5f8] flex items-center justify-center">
                          <div className="absolute w-[70%] h-[70%] rounded-full bg-[#83cbdc]/50 flex items-center justify-center">
                            <div className="absolute w-[80%] h-[80%] rounded-full bg-[#e6f5f8]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ArrowUpRight
                  size={22}
                  className="absolute text-primary top-3 right-3"
                />
                <p className="absolute bottom-3 left-3 font-aeoBold">
                  WE OFFER <br />
                  BEST SERVICES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="myFlex mt-10 max-md:hidden check">
        <div className="basis-[35%] px-[3%] lg:px-[5%] opacity-0 transalate-y-4">
          <p className="font-aeoBold text-sm">
            We collaborate with 1000+ companies
          </p>
        </div>
        <div
          style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className="basis-[65%] px-[3%] lg:px-[5%] w-full opacity-0 transalate-y-4 h-[100px] bg-white myFlex justify-around"
        >
          <Image
            src="/partner1.png"
            width={100}
            height={40}
            alt="office"
            style={{ filter: "grayscale(100%)" }}
          />
          <Image
            src="/partner1.png"
            width={100}
            height={40}
            alt="office"
            style={{ filter: "grayscale(100%)" }}
          />
          <Image
            src="/partner1.png"
            width={100}
            height={40}
            alt="office"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
