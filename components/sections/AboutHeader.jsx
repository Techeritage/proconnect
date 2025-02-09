import { CheckCheck } from "lucide-react";

const AboutHeader = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-7 md:gap-20 myContainer max-w-[1440px] mx-auto">
        <h1 className="md:leading-[70px] md:whitespace-nowrap">
          Connecting Top <br /> Talent with{" "}
          <span className="opacity-50">
            Leading <br /> Employers – Seamlessly.
          </span>
        </h1>
        <div className="md:flex items-end">
          <p className="md:max-w-[80%] md:leading-[30px] opacity-85">
            ProConnect bridges the gap between skilled professionals and
            companies seeking exceptional talent, creating opportunities for
            growth and success.
          </p>
        </div>
      </div>
      <img src="/about1.jpg" className="w-full h-[400px] object-cover" />
      <section className="myContainer">
        <h2 className="text-center font-semibold">Our Mission and Vision</h2>
        <div className="max-w-4xl mx-auto flex max-md:flex-col gap-5 mt-10 md:mt-16 md:h-[600px]">
          <div className="basis-1/2 flex flex-col gap-4 md:gap-7">
            <img src="/mission.jpg" className="w-full object-cover flex-grow" />
            <div className="space-y-3">
              <h4 className="font-semibold">MISION</h4>
              <p>
                Our mission is to empower individuals and businesses by creating
                a dynamic, efficient, and inclusive hiring ecosystem.
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-7">
            <div className="space-y-3">
              <h4 className="font-semibold">VISION</h4>
              <p>
                We envision a world where finding the right job or talent is
                effortless and inspiring.
              </p>
            </div>
            <img src="/vision.png" className="w-full object-cover flex-grow" />
          </div>
        </div>
      </section>
      <section className="myContainer max-md:!pt-0">
        <h2 className="text-center font-semibold">Who We Are</h2>
        <div className="grid md:grid-cols-2 mt-10 gap-10 md:mt-16">
          <div>
            <p className="md:max-w-[90%]">
              At <span className="font-semibold">ProConnect</span>, we are a
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
            <h4 className="text-xl font-semibold mb-5 underline">
              Our Key Highlights
            </h4>
            <ul className="grid gap-5">
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Established Expertise: </span>
                  With a team of experienced professionals and a deep
                  understanding of the recruitment landscape, we bring insights
                  that drive success.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Global Reach:</span>{" "}
                  Connecting talent and opportunities across industries and
                  borders.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Proven Results:</span> Over
                  100+ successful hires and counting, with a growing network of
                  satisfied job seekers and hirers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-bgGray">
        <div className="myContainer">
          <div className="pb-10 border-b-2 border-black">
            <h2 className="font-semibold">
              Meet our <br /> amazing team
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-7 max-w-[1440px] mx-auto">
            <div className="space-y-2">
              <div className="bg-gray-200 rounded-xl h-[300px]" />
              <p className="font-semibold text-xl">Mrs. Kelechi</p>
              <p className="max-md:text-sm">Founder & CEO</p>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-200 rounded-xl h-[300px]" />
              <p className="font-semibold text-xl">Mrs. Kelechi</p>
              <p className="max-md:text-sm">Founder & CEO</p>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-200 rounded-xl h-[300px]" />
              <p className="font-semibold text-xl">Mrs. Kelechi</p>
              <p className="max-md:text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;
