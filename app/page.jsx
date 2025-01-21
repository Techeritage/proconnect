import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import HiringSteps from "@/components/sections/HiringSteps";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Stats />
      <Services />
      <HiringSteps />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  );
};

export default HomePage;
