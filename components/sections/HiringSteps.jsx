import Button from "../Button";

const HiringSteps = () => {
  return (
    <section className="myContainer">
      <h1>
        Simplified <br /> Hiring Process
      </h1>
      <p className="opacity-85 mt-2 text-sm w-[90%]">
        Finding the right talent doesn’t have to be complicated.{" "}
        <br className="max-md:hidden" /> Follow these three easy steps to
        connect with top candidates effortlessly.
      </p>

      <div className="md:relative max-md:grid gap-y-10 md:bg-wavy wavy md:max-w-4xl mx-auto bg-contain mt-28 md:min-w-max md:min-h-[300px]">
        <div className="md:absolute -top-7 -left-[120px] myFlex flex-col md:max-w-[300px] justify-center gap-3">
          <div className="bg-primary rounded-full size-16 flex-center">
            <h2 className="font-aeoReg text-white">1</h2>
          </div>
          <p className="text-base text-center md:text-lg font-aeoBold max-w-[80%]">
            Submit Your Requirements
          </p>
          <p className="text-center max-md:max-w-[90%]">
            Tell us about your hiring needs. Fill out a form with job details,
            qualifications, and specific requirements.
          </p>
        </div>

        <div className="md:absolute top-4 left-[50%] md:max-w-[300px] md:-translate-x-[50%] myFlex flex-col justify-center gap-3">
          <div className="bg-primary rounded-full size-16 flex-center">
            <h2 className="font-aeoReg text-white">2</h2>
          </div>
          <p className="text-base md:text-lg font-aeoBold max-w-[80%] text-center">
            Candidate Shortlisting
          </p>
          <p className="text-center max-md:max-w-[90%]">
            We source, screen, and verify candidates to match your needs. Review
            our top picks for your role.
          </p>
        </div>

        <div className="md:absolute -right-[120px] -top-7 md:max-w-[300px] myFlex flex-col justify-center gap-3">
          <div className="bg-primary rounded-full size-16 flex-center">
            <h2 className="font-aeoReg text-white">3</h2>
          </div>
          <p className="text-base md:text-lg font-aeoBold max-w-[80%] text-center">
            Schedule Interviews
          </p>
          <p className="text-center max-md:max-w-[90%]">
            Select your preferred candidates and schedule interviews with ease.
            We’ll handle the coordination for you.
          </p>
        </div>
      </div>
      <div className="w-full myFlex justify-center max-md:mt-20">
        <Button
          cta="Start Hiring"
          className="text-white bg-primary px-10 tracking-wider"
        />
      </div>
    </section>
  );
};

export default HiringSteps;
