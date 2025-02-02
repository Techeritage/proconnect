import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import FAQs from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import HeroNew from "@/components/sections/HeroNew";
import HiringSteps from "@/components/sections/HiringSteps";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import TestimonialsNew from "@/components/sections/TestimonialsNew";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { CommonFaqs } from "@/constant/CommonFaqs";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      {/* <Hero /> */}
      <HeroNew />
      <WhyChooseUs />
      <Stats />
      <Services />
      <HiringSteps />
      <TestimonialsNew />
      <Blog />
      <FAQs faqs={CommonFaqs} />
      <CTA />
    </main>
  );
};

export default HomePage;
