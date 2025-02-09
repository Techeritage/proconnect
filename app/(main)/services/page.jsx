import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";
import TestimonialsNew from "@/components/sections/TestimonialsNew";
import FAQs from "@/components/sections/FAQs";
import { ServicesFaqs } from "@/constant/ServicesFaqs";
import CTA from "@/components/sections/CTA";
import SectionHeader from "@/components/sections/SectionHeader";

const ServicePage = () => {
  return (
    <main className="min-h-dvh !pt-20">
      <SectionHeader />
      <WhyChooseUs />
      <Stats />
      <TestimonialsNew />
      <FAQs faqs={ServicesFaqs} />
      <CTA
        heading="Ready to Elevate Your Business?"
        content="Our team is here to help you achieve your goals. Let’s discuss how our tailored services can bridge the gap between talent and opportunity, driving your success."
        btnCTA="Get Started Today"
        btnLink="/contact"
      />
    </main>
  );
};

export default ServicePage;
