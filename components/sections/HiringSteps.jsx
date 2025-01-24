import Button from "../Button";
import Steps from "../Steps";

const HiringSteps = () => {
  return (
    <section className="myContainer bg-bgGray">
      <h1>
        Simplified <br /> Hiring Process
      </h1>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        Finding the right talent doesn’t have to be complicated.{" "}
        <br className="max-md:hidden" /> Follow these three easy steps to
        connect with top candidates effortlessly.
      </p>

      <Steps />
      <div className="w-full myFlex justify-center max-md:mt-20">
        <Button
          cta="Start Hiring"
          className="text-white bg-primary !px-20 tracking-wider"
        />
      </div>
    </section>
  );
};

export default HiringSteps;
