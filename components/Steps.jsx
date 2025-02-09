const Steps = ({ stepsRef }) => {
  return (
    <div className="md:relative max-md:grid gap-y-20 md:gap-y-10 md:bg-wavy wavy md:max-w-4xl mx-auto bg-contain md:mt-28 md:min-w-max md:min-h-[300px]">
      {[
        {
          step: "1",
          title: "Submit Your Requirements",
          description:
            "Tell us about your hiring needs. Fill out a form with job details, qualifications, and specific requirements.",
        },
        {
          step: "2",
          title: "Candidate Shortlisting",
          description:
            "We source, screen, and verify candidates to match your needs. Review our top picks for your role.",
        },
        {
          step: "3",
          title: "Schedule Interviews",
          description:
            "Select your preferred candidates and schedule interviews with ease. We’ll handle the coordination for you.",
        },
      ].map((item, index) => (
        <div
          key={item.step}
          ref={(el) => {
            if (el) stepsRef.current[index] = el;
          }}
          className={`md:absolute flex flex-col items-center justify-center gap-3 text-center ${
            index === 0
              ? "-top-7 -left-[120px]"
              : index === 1
              ? "top-4 left-[50%] md:-translate-x-[50%]"
              : "-top-7 -right-[120px]"
          } md:max-w-[300px]`}
        >
          <div className="bg-primary rounded-full size-16 flex-center">
            <h2 className="font-semibold text-white">{item.step}</h2>
          </div>
          <p className="text-base md:text-lg font-semibold max-w-[80%]">
            {item.title}
          </p>
          <p className="max-md:max-w-[90%]">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
