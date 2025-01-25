import ContactForm from "@/components/Forms/ContactForm";
import Map from "@/components/sections/Map";
import { Ticket } from "lucide-react";
import { Phone } from "lucide-react";
import { Landmark } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="pt-20 min-h-dvh">
      <section className="myContainer md:myFlex md:justify-between gap-16">
        <div className="md:basis-[45%] space-y-5">
          <p className="font-aeoReg border opacity-85 w-fit rounded-full px-3 pt-[2px]">
            Reach Out To Us
          </p>
          <h2 className="font-aeoBold">Send Us A Message</h2>
          <p>
            <span className="opacity-85">Or just reach out manaully to</span>
            <br />
            <a
              className="text-primary w-fit font-aeoReg"
              href="mailto:info@officialproconnect.com"
            >
              info@officialproconnect.com
            </a>
          </p>
        </div>
        <div className="md:basis-[55%] max-md:mt-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-5">
            <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 p-3 py-5 rounded-xl">
              <MessageCircleMore
                className="text-primary mb-4 max-md:mb-8"
                strokeWidth={1.8}
                size={24}
              />
              <div className="space-y-1 mb-4 max-md:mb-7">
                <p className="text-lg font-aeoBold opacity-90">Live Chat</p>
                <p className="opacity-85">Speak to our team quickly</p>
              </div>

              <a
                className="text-primary w-fit font-aeoReg underline max-md:text-sm"
                href="mailto:info@officialproconnect.com"
              >
                info@officialproconnect.com
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 p-3 py-5 rounded-xl">
              <Ticket
                className="text-primary mb-4 max-md:mb-8"
                strokeWidth={1.8}
                size={24}
              />
              <div className="space-y-1 mb-4">
                <p className="text-lg font-aeoBold opacity-90">
                  Submit Help Ticket
                </p>
                <p className="opacity-85">We're available to help via email</p>
              </div>
              <a className="text-primary w-fit font-aeoReg underline max-md:text-sm" href="#">
                send ticket
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 p-3 py-5 rounded-xl">
              <Landmark
                className="text-primary mb-4 max-md:mb-8"
                strokeWidth={1.8}
                size={24}
              />
              <div className="space-y-1 mb-4">
                <p className="text-lg font-aeoBold opacity-90">
                  Visit Our Office
                </p>
                <p className="opacity-85">Visit our location in real life</p>
              </div>
              <a className="text-primary w-fit font-aeoReg underline max-md:text-sm" href="#">
                18, Karimu Street, Surulere
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 p-3 py-5 rounded-xl">
              <Phone
                className="text-primary mb-4 max-md:mb-8"
                strokeWidth={1.8}
                size={24}
              />
              <div className="space-y-1 mb-4">
                <p className="text-lg font-aeoBold opacity-90">
                  Call Us Directly
                </p>
                <p className="opacity-85">Available during working hours</p>
              </div>
              <a
                className="text-primary w-fit font-aeoReg underline max-md:text-sm"
                href="tel:+2348024352278"
              >
                (+234) 802 631 4926
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      {/* faq */}
      <Map />
    </main>
  );
};

export default ContactPage;
