"use client";

import Button from "../Button";

const HeroNew = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Desktop Video */}
      <video
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
        autoPlay
        src="/hero99.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute md:hidden inset-0 w-full h-full object-cover object-[70%_center]"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 md:gap-8 text-white bg-black/75 md:bg-black/60 z-40 px-4">
        <h1 className="text-center">
          Empowering Talent. <br />
          <span>Building Exceptional Teams.</span>
        </h1>
        <p className="opacity-80 max-w-[98%] md:max-w-[60%] mx-auto text-center md:text-lg">
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
