import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = ({faqs}) => {
  return (
    <section className="myContainer">
      <h1 className="text-center">
        Got Questions? <br /> We’ve Got Answers
      </h1>
      <p className="opacity-85 text-center mt-2 text-sm w-[90%] md:w-[50%] mx-auto">
        We’ve answered common questions from employers and job seekers to help
        you understand how ProConnect works. Can’t find what you’re looking for?
        Contact us!
      </p>
      <div className="max-w-3xl mx-auto mt-20">
        <AccordionDemo faqs={faqs} />
      </div>
    </section>
  );
};

export function AccordionDemo({ faqs }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs?.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i + 1}`}
          className="last:border-b-0"
        >
          <AccordionTrigger className="text-base opacity-85 md:text-lg font-aeoBold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-[80%] text-base tracking-wider">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQs;
