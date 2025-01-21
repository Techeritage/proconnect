import { I24Support } from "iconsax-react";
import { Handshake } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Rocket } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="myContainer bg-bgGray">
      <h2 className="font-aeoBold">Why Choose Us</h2>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        We make hiring simple, effective, and stress-free. Here’s why employers
        trust us:
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 place-items-center">
        <div className="myFlex flex-col justify-center gap-3 bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] h-[250px] mx-auto">
          <Rocket size={32} className="fill-primary text-primary" />
          <h4 className="font-aeoBold text-center tracking-wider mt-5 mb-2">
            Streamlined Hiring Process
          </h4>
          <p className="text-center opacity-85 text-sm leading-relaxed">
            Save time with our efficient and user-friendly platform designed to
            simplify every step of your recruitment journey.
          </p>
        </div>
        <div className="relative overflow-hidden text-white bg-[#000c28] rounded-2xl p-6 max-w-[400px] min-h-[280px] mx-auto">
          <div className="bg-primary absolute -top-28 left-[50%] -translate-x-[50%] size-[200px] rounded-full blur-2xl -z-0" />
          <div className="relative z-10 myFlex flex-col justify-center h-full gap-3">
            <div className="relative p-3 rounded-full bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md">
              <Sparkles size={24} color="white" fill="white" />
            </div>
            <h4 className="font-aeoBold text-center tracking-wider mt-5 mb-2">
              Access to Top Talent
            </h4>
            <p className="text-center opacity-95 text-sm leading-relaxed w-[90%] mx-auto">
              Discover exceptional professionals handpicked to meet your
              specific needs. Quality talent, just a click away.
            </p>
          </div>
        </div>
        <div className="myFlex flex-col justify-center gap-3 bg-white rounded-2xl border border-gray-200 p-6 max-w-[400px] h-[250px] mx-auto">
          <I24Support size="36" color="#023BC6" variant="Bold" />
          <h4 className="font-aeoBold text-center tracking-wider mt-5 mb-2">
            Dedicated Support
          </h4>
          <p className="text-center opacity-85 text-sm leading-relaxed">
            Enjoy personalized assistance every step of the way. Our team is
            here to ensure your hiring experience is smooth and successful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
