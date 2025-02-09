import { CheckCheck } from "lucide-react";

const WWO = () => {
  return (
    <section className="myContainer">
      <h2 className="text-center font-semibold">What We Offer</h2>
      <div className="grid md:grid-cols-2 gap-10 mt-10 md:mt-16">
        <div className="flex flex-col gap-4 md:gap-7">
          <p className="md:max-w-[90%]">
            At <span className="font-semibold">ProConnect</span>, we provide a
            comprehensive suite of services designed to bridge the gap between
            top talent and the businesses that need them. Whether you're an
            employer looking to build a winning team or a job seeker ready to
            take the next step in your career, we have the tools and resources
            to help you succeed.
          </p>
          <img
            src="/wwo.jpg"
            className="flex-grow object-cover h-[200px] w-full"
          ></img>
        </div>
        <div className="space-y-10 md:space-y-5">
          <div>
            <h4 className="text-xl font-semibold mb-5 underline">
              For Employers
            </h4>
            <ul className="grid gap-5">
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Talent Pool Access: </span>
                  Tap into a diverse network of skilled professionals across
                  various industries.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Streamlined Hiring:</span>{" "}
                  Post job openings and manage applications effortlessly with
                  our intuitive dashboard.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Recruitment Insights:</span>{" "}
                  Leverage data-driven insights to refine your hiring
                  strategies.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-5 underline">
              For Job Seekers
            </h4>
            <ul className="grid gap-5">
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">
                    Personalized Job Matching:{" "}
                  </span>
                  Find opportunities tailored to your skills, experience, and
                  career goals.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCheck size={18} className="text-primary min-w-[18px]" />{" "}
                <span className="tracking-wider">
                  <span className="font-semibold">Career Resources:</span>{" "}
                  Access interview tips, industry insights, and career
                  development guides to stay ahead.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WWO;
