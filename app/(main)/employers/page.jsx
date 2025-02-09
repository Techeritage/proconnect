import HireTalentForm from "@/components/Forms/HireTalentForm";
import CTA from "@/components/sections/CTA";
import FAQs from "@/components/sections/FAQs";
import Steps from "@/components/Steps";
import { HireTalentFaqs } from "@/constant/HireTalentFaqs";

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
      {/* <Steps /> */}
      <HireTalentForm />
      <FAQs faqs={HireTalentFaqs} />
      <CTA
        heading="Still Have Questions? We're Here to Help!"
        content="Contact our team to learn more about how we can support your hiring needs."
        btnCTA="Speak to Our Team"
        btnLink="/contact"
      />
    </main>
  );
};

export default HireTalentPage;
