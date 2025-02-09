import AboutHeader from "@/components/sections/AboutHeader";
import CTA from "@/components/sections/CTA";
import FAQs from "@/components/sections/FAQs";
import Map from "@/components/sections/Map";
import Stats from "@/components/sections/Stats";
import WWO from "@/components/sections/WWO";
import { AboutFaqs } from "@/constant/AboutFaqs";

const AboutPage = () => {
  return (
    <main className="min-h-dvh !pt-20">
      <AboutHeader />
      <Stats className="!from-bgGray !to-white" />
      <WWO />
      <FAQs faqs={AboutFaqs} />
      <CTA />
      <Map />
    </main>
  );
};

export default AboutPage;
