import React from "react";
import Button from "../Button";
import clsx from "clsx";

const CTA = ({
  heading = "Ready to Find Your Next Top Hire?",
  content = "Streamline your recruitment process and connect with exceptional talent today. Let’s make hiring effortless!",
  isBtn = true,
  btnCTA = "Get Started",
  btnLink = "/contact",
  placeholder,
}) => {
  return (
    <section className="relative text-white overflow-hidden bg-[#000c28] min-h-[500px] md:min-h-[550px] myFlex justify-center">
      <div className="bg-primary absolute -bottom-[150px] md:-bottom-[220px] left-[50%] -translate-x-[50%] size-[280px] md:size-[450px] rounded-full blur-3xl -z-0" />
      <div className="relative myFlex flex-col gap-y-6 justify-center">
        <h2 className="font-aeoBold text-center max-w-[90%] mx-auto md:max-w-[70%]">
          {heading}
        </h2>
        <p className="text-center opacity-90 max-md:max-w-[90%] max-w-[70%]">
          {content}
        </p>
        <div
          className={clsx(
            "mt-6 relative p-1 rounded-full",
            isBtn
              ? "bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md"
              : "bg-white"
          )}
        >
          {!isBtn && (
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent pl-6 placeholder:text-black/70 focus:ring-0 focus:outline-none text-black/70 pr-3"
              placeholder={placeholder}
            />
          )}
          <Button
            cta={btnCTA}
            link={btnLink}
            className={clsx(
              "text-primary tracking-wider !font-aeoBold",
              isBtn ? "bg-white !px-10" : "bg-primary text-white"
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
