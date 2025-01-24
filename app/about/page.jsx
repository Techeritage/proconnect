import CTA from "@/components/sections/CTA";
import Stats from "@/components/sections/Stats";
import { CheckCheck } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-dvh !pt-20">
      <div className="grid md:grid-cols-2 gap-7 md:gap-20 myContainer max-w-[1440px] mx-auto">
        <h1 className="md:leading-[70px] whitespace-nowrap">
          Connecting Top <br /> Talent with{" "}
          <span className="opacity-50">
            Leading <br /> Employers – Seamlessly.
          </span>
        </h1>
        <div className="md:flex items-end">
          <p className="md:max-w-[80%] md:leading-[30px] font-aeoReg opacity-85">
            ProConnect bridges the gap between skilled professionals and
            companies seeking exceptional talent, creating opportunities for
            growth and success.
          </p>
        </div>
      </div>
      <div className="w-full h-[300px] bg-gray-200" />
      <section className="myContainer">
        <h2 className="text-center font-aeoBold">Our Mission and Vision</h2>
        <div className="max-w-4xl mx-auto flex max-md:flex-col gap-5 mt-10 md:mt-16 md:h-[600px]">
          <div className="basis-1/2 flex flex-col md:gap-7">
            <div className="bg-gray-200 w-full flex-grow" />
            <div className="space-y-3">
              <h4 className="font-aeoBold">MISION</h4>
              <p>
                Our mission is to empower individuals and businesses by creating
                a dynamic, efficient, and inclusive hiring ecosystem.
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-7">
            <div className="space-y-3">
              <h4 className="font-aeoBold">VISION</h4>
              <p>
                We envision a world where finding the right job or talent is
                effortless and inspiring.
              </p>
            </div>
            <div className="bg-gray-200 w-full flex-grow" />
          </div>
        </div>
      </section>
      <section className="myContainer max-md:!pt-0">
        <h2 className="text-center font-aeoBold">Who We Are</h2>
        <div className="grid md:grid-cols-2 mt-10 gap-10 md:mt-16">
          <div>
            <p className="max-w-[90%]">
              At <span className="font-aeoBold">ProConnect</span>, we are a
              dynamic platform dedicated to transforming the way professionals
              and businesses connect. Founded on the principles of innovation
              and inclusivity, we aim to simplify the hiring process for
              employers while empowering job seekers to achieve their career
              goals.
              <br />
              <br />
              Our journey began with a vision to address the challenges of
              traditional recruitment—bridging the gap between talented
              individuals and companies in need of their skills. Today,
              ProConnect stands as a trusted partner for thousands of users,
              offering tools and resources that make job hunting and hiring
              seamless, efficient, and impactful.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-aeoBold mb-5 underline">
              Our Key Highlights
            </h4>
            <ul className="grid gap-5">
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-aeoBold">Established Expertise: </span>
                  With a team of experienced professionals and a deep
                  understanding of the recruitment landscape, we bring insights
                  that drive success.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-aeoBold">Global Reach:</span> Connecting
                  talent and opportunities across industries and borders.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-aeoBold">Proven Results:</span> Over
                  100+ successful hires and counting, with a growing
                  network of satisfied job seekers and hirers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Stats />
      <section className="myContainer">
        <h2 className="text-center font-aeoBold">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-10 md:mt-16">
          <div className="flex flex-col md:gap-7">
            <p className="max-w-[90%]">
              At <span className="font-aeoBold">ProConnect</span>, we provide a
              comprehensive suite of services designed to bridge the gap between
              top talent and the businesses that need them. Whether you're an
              employer looking to build a winning team or a job seeker ready to
              take the next step in your career, we have the tools and resources
              to help you succeed.
            </p>
            <div className="bg-gray-200 flex-grow h-full w-full"></div>
          </div>
          <div className="space-y-10 md:space-y-5">
            <div>
              <h4 className="text-xl font-aeoBold mb-5 underline">
                For Employers
              </h4>
              <ul className="grid gap-5">
                <li className="flex gap-2">
                  <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                  <span className="tracking-wider">
                    <span className="font-aeoBold">Talent Pool Access: </span>
                    Tap into a diverse network of skilled professionals across
                    various industries.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                  <span className="tracking-wider">
                    <span className="font-aeoBold">Streamlined Hiring:</span>{" "}
                    Post job openings and manage applications effortlessly with
                    our intuitive dashboard.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                  <span className="tracking-wider">
                    <span className="font-aeoBold">Recruitment Insights:</span>{" "}
                    Leverage data-driven insights to refine your hiring
                    strategies.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-aeoBold mb-5 underline">
                For Job Seekers
              </h4>
              <ul className="grid gap-5">
                <li className="flex gap-2">
                  <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                  <span className="tracking-wider">
                    <span className="font-aeoBold">
                      Personalized Job Matching:{" "}
                    </span>
                    Find opportunities tailored to your skills, experience, and
                    career goals.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                  <span className="tracking-wider">
                    <span className="font-aeoBold">Career Resources:</span>{" "}
                    Access interview tips, industry insights, and career
                    development guides to stay ahead.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bgGray myContainer">
        <div className="pb-10 border-b-2 border-black">
          <h2 className="font-aeoBold">
            Meet our <br /> amazing team
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-7 max-w-[1440px] mx-auto">
          <div className="space-y-2">
            <div className="bg-gray-200 rounded-xl h-[300px]" />
            <p className="font-aeoBold text-xl">Mrs. Kelechi</p>
            <p>Founder & CEO</p>
          </div>
          <div className="space-y-2">
            <div className="bg-gray-200 rounded-xl h-[300px]" />
            <p className="font-aeoBold text-xl">Mrs. Kelechi</p>
            <p>Founder & CEO</p>
          </div>
          <div className="space-y-2">
            <div className="bg-gray-200 rounded-xl h-[300px]" />
            <p className="font-aeoBold text-xl">Mrs. Kelechi</p>
            <p>Founder & CEO</p>
          </div>
        </div>
      </section>
      <CTA />
      {/*faqs, contact, map*/}
    </main>
  );
};

export default AboutPage;
