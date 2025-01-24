import Steps from "@/components/Steps";
import React from "react";

const HireTalentPage = () => {
  return (
    <main className="pt-20 min-h-dvh">
      <section className="grid gap-3 md:gap-7 myContainer">
        <h1 className="">
          Find the Perfect <br /> Talent for Your Team
        </h1>
        <p className="md:max-w-[80%] md:leading-[30px] font-aeoReg opacity-85">
          Discover skilled professionals to drive your <br /> busines forward,
          faster and smarter.
        </p>
      </section>
      <Steps />
    </main>
  );
};

export default HireTalentPage;
