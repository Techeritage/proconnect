import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = ({ faqs }) => {
  return (
    <section className="myContainer">
      <h1 className="text-center">
        Got Questions? <br />{" "}
        <span className="opacity-50"> We’ve Got Answers</span>
      </h1>
      <p className="opacity-95 text-center mt-2 text-sm w-[90%] md:w-[50%] mx-auto">
        Explore common questions from employers and job seekers about
        ProConnect. Need more help? Contact us!
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
          <AccordionTrigger className="text-base py-7 opacity-85 md:text-lg font-aeoBold">
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
