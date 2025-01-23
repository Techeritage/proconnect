import React from "react";
import Button from "../Button";

const CTA = () => {
  return (
    <section className="relative text-white bg-[#000c28] min-h-[500px] md:min-h-[550px] myFlex justify-center">
      <div className="bg-primary absolute -bottom-[150px] md:-bottom-[220px] left-[50%] -translate-x-[50%] size-[280px] md:size-[450px] rounded-full blur-3xl -z-0" />
      <div className="relative myFlex flex-col gap-y-6 justify-center">
        <h2 className="font-aeoBold text-center">
          Ready to Find Your Next <br /> Top Hire?
        </h2>
        <p className="text-center opacity-90 max-md:max-w-[90%]">
          Streamline your recruitment process and connect with exceptional{" "}
          <br className="max-md:hidden" />
          talent today. Let’s make hiring effortless!
        </p>
        <div className="md:px-20 mt-6 relative p-1 md:p-2 rounded-full bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md">
          <Button
            cta="Contact Us"
            className="bg-white !px-10 text-primary tracking-wider !font-aeoBold"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
