import { raleway } from "@/app/layout";
import { ServicesList } from "@/constant/ServicesList";
import { CheckCheck } from "lucide-react";

const Services = () => {
  return (
    <section className="myContainer">
      <h2 className="font-aeoBold">Services Tailored <br /> to Your Needs</h2>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        From finding top talent to simplifying recruitment, <br /> ProConnect offers a
        range of services designed to empower your business.
      </p>
      {/**Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mt-16">
        {ServicesList.map((serv, index) => (
          <div
            key={serv.title}
            //ref={(el) => (cardsRef.current[index] = el)}
            className="bg-service p-6 py-8 border border-[#314DFF4D] rounded-2xl space-y-6"
          >
            <div className="relative">
              <div className="relative p-3 w-fit rounded-full bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md">
                <span className="text-primary">{serv.icon}</span>
              </div>

              <h1 className={`${raleway.className} font-bold lineText opacity-50 !text-6xl absolute right-0 top-[50%] translate-y-[-50%]`}>{`0${
                index + 1
              }`}</h1>
            </div>
            <p className="text-base md:text-lg font-aeoBold max-w-[80%]">{serv.title}</p>
            <p className="max-w-[85%] opacity-90">{serv.description}</p>
            {serv.keyOfferings && (
              <div className="space-y-2">
                {serv.keyOfferings.map((key) => (
                  <div key={key} className="myFlex gap-2">
                    <CheckCheck size={18} className="text-primary" />{" "}
                    <span className="tracking-wider">{key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
