import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { ServicesList } from "@/constant/ServicesList";
import { raleway } from "../layout";
import { CheckCheck } from "lucide-react";

const ServicePage = () => {
  return (
    <main className="min-h-dvh !pt-20">
      <section className="grid gap-3 md:gap-7 myContainer">
        <h1>
          Empowering Connections, <br /> Enabling Success
        </h1>
        <p className="md:max-w-[80%] md:leading-[30px] font-aeoReg opacity-85">
          Explore our tailored services designed to <br />
          bridge the gap between talent and opportunity.
        </p>
      </section>
      <section className="!pt-0 myContainer">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
          {ServicesList.map((serv, index) => (
            <div
              key={serv.title}
              //ref={(el) => (cardsRef.current[index] = el)}
              className="bg-service p-6 py-8 border border-[#b3c4ee] rounded-2xl space-y-6"
            >
              <div className="relative">
                <div className="relative p-3 w-fit rounded-full bg-white/20 backdrop-blur-[100px] border border-white/30 shadow-md">
                  <span className="text-primary">{serv.icon}</span>
                </div>

                <h1
                  className={`${raleway.className} font-bold lineText opacity-50 !text-6xl absolute right-0 top-[50%] translate-y-[-50%]`}
                >{`0${index + 1}`}</h1>
              </div>
              <p className="text-base md:text-lg font-aeoBold max-w-[80%]">
                {serv.title}
              </p>
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
      <WhyChooseUs />
    </main>
  );
};

export default ServicePage;
