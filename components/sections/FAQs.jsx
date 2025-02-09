import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = ({ faqs }) => {
  return (
    <section className="myContainer">
      <h2 className="text-center font-semibold">
        Got Questions? <br />{" "}
        <span className="opacity-50"> We’ve Got Answers</span>
      </h2>
      <p className="opacity-95 text-center mt-4 md:w-[50%] mx-auto">
        Discover FAQs for employers and job seekers.{" "}
        <br className="max-md:hidden" /> Need more help? Contact us!
      </p>
      <div className="max-w-3xl mx-auto mt-10 md:mt-16">
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
          <AccordionTrigger className="text-base py-7 opacity-85 md:text-lg font-semibold">
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
