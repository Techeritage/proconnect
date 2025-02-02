import React from "react";
import Button from "../Button";

const HeroNew = () => {
  return (
    <section className="relative h-dvh overflow-x-hidden">
      <video
        // ref={nextVdRef}
        autoPlay
        src="/hero.mp4"
        loop
        muted
        // id="next-video"
        className="absolute left-0 top-0 size-full object-cover object-center"
        // onLoadedData={handleVideoLoad}
      />
      <div className="absolute myFlex flex-col gap-7 md:gap-8 justify-center text-white z-40 top-0 bg-black/60 left-0 right-0 bottom-0">
        <h1 className="text-center">
          Empowering Talent. <br />{" "}
          <span className="">Building Exceptional the Teams.</span>
        </h1>
        <p className="opacity-80 max-w-[90%] md:max-w-[60%] mx-auto text-center md:text-lg">
          At ProConnect, we don’t just connect you with top talent—we help
          nurture it. From skill development and leadership training to seamless
          recruitment solutions, we fuel your business growth with people who
          thrive.
        </p>
        <Button
          cta="Get Started"
          className="bg-primary text-white !px-10"
          link="/contact"
        />
      </div>
    </section>
  );
};

export default HeroNew;
