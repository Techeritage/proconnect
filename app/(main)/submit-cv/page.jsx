import SubmitCVForm from "@/components/Forms/SubmitCVForm";
import FAQs from "@/components/sections/FAQs";
import { SubmitCVFaqs } from "@/constant/SubmitCVFaqs";
import React from "react";

const SubmitCVPage = () => {
  return (
    <main className="min-h-dvh !pt-20">
      <section className="grid gap-3 md:gap-7 myContainer">
        <h1 className="">
          Looking for your <br /> next opportunity?
        </h1>
        <p className="md:max-w-[80%] md:leading-[30px] font-aeoReg opacity-85">
          Submit your CV and let top employers discover your talent.{" "}
          <br className="max-md:hidden" /> Fill out the form below to get
          started!
        </p>
      </section>
      <SubmitCVForm />
      <FAQs faqs={SubmitCVFaqs} />
    </main>
  );
};

export default SubmitCVPage;
