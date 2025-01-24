import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import HiringSteps from "@/components/sections/HiringSteps";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import TestimonialsNew from "@/components/sections/TestimonialsNew";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <WhyChooseUs />
      <Stats />
      <Services />
      <HiringSteps />
      {/*<Testimonials />*/}
      <TestimonialsNew />
      <Blog />
      <CTA />
    </main>
  );
};

export default HomePage;
