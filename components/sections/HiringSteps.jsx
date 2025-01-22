import React from "react";

const HiringSteps = () => {
  return (
    <section className="myContainer">
      <h1>
        Simplified <br /> Hiring Process
      </h1>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        Finding the right talent doesn’t have to be complicated.{" "}
        <br className="max-md:hidden" /> Follow these three easy steps to
        connect with top candidates effortlessly.
      </p>

      <div className="relative bg-wavy h-[100px] wavy max-w-5xl mx-auto bg-contain mt-20">
        <div className="bg-primary rounded-full size-14 flex-center absolute -top-7">
          <h2 className="font-aeoReg text-white">1</h2>
        </div>
        <div className="bg-primary rounded-full size-14 flex-center absolute top-4 left-[50%] -translate-x-[50%]">
          <h2 className="font-aeoReg text-white">2</h2>
        </div>
        <div className="bg-primary rounded-full size-14 flex-center absolute right-0 -top-7">
          <h2 className="font-aeoReg text-white">3</h2>
        </div>
      </div>
    </section>
  );
};

export default HiringSteps;
