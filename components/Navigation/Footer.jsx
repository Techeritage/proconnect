"use client";

import { useEffect, useState } from "react";
import { FooterLinks } from "@/constant/FooterLinks";
import useFormSubmission from "@/hooks/useFormSubmission";
import { Send2 } from "iconsax-react";
import { Loader2 } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Confetti from "react-confetti";

const Footer = () => {
  const year = new Date().getFullYear();
  const { formData, handleChange, handleSubmit, isLoading, error, success } =
    useFormSubmission({
      endpoint: "/api/newsLetter/suscribe",
      defaultValues: { email: "" },
      validate: (data) => {
        if (!data.email || !data.email.includes("@")) {
          return "Please enter a valid email address.";
        }
        return null;
      },
    });
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [scrollY, setScrollY] = useState(0);

  // Update window size and scroll position
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setScrollY(window.scrollY); // Track scroll position
    };

    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("scroll", updateWindowSize);

    updateWindowSize(); // Initial call

    return () => {
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("scroll", updateWindowSize);
    };
  }, []);

  // Show confetti on form success
  useEffect(() => {
    if (success) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <footer className="myContainer border-t !pb-0" style={{ position: "relative" }}>
      {/* Confetti with dynamic scroll position */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false} // Stop after one burst
          numberOfPieces={150} // Moderate confetti for a pop effect
          gravity={0.8} // Slower falling speed for smoother burst
          initialVelocityY={15} // Controlled upward burst
          angle={90} // Shoot straight up
          spread={120} // Wide burst spread like champagne pop
          origin={{
            x: 0.5, // Center horizontally
            y: (scrollY + windowSize.height / 2) / windowSize.height,
          }} // Adjust based on current scroll position
          style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
        />
      )}

      <div className="flex lg:items-end max-lg:flex-col gap-7 justify-between pb-12 border-b">
        <div>
          <h4 className="text-lg md:text-2xl">
            SUBSCRIBE TO OUR <br />{" "}
            <span className="font-semibold !text-4xl lg:!text-5xl">
              NEWSLETTER
            </span>
          </h4>
          <p className="opacity-85 max-w-[700px] mt-4">
            Stay updated with the latest in talent solutions and business
            growth. Join ProConnect’s newsletter for exclusive insights and
            tips!
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-sm max-lg:hidden">
              Sign up for our <span className="font-semibold">Newsletter</span>{" "}
            </label>
            <div className="w-[300px] lg:mt-2 h-[50px] pl-3 pr-1 myFlex gap-3 justify-between rounded-[14px] border border-primary border-black">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full focus:outline-none placeholder:text-sm placeholder:text-black/80"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary p-2 rounded-xl myFlex justify-between"
              >
                {isLoading ? (
                  <Loader2 size="24" className="animate-spin" color="#ffffff" />
                ) : (
                  <Send2 size="24" color="#ffffff" variant="Bold" />
                )}
              </button>
            </div>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
          </form>
        </div>
      </div>
      <div className="lg:flex border-b w-full pt-10 md:py-12">
        <div className="md:basis-[35%]">
          <Image src="/logo656.png" width={100} height={100} alt="office" />
          <p className="opacity-85 -mt-3 -ml-1 md:max-w-[80%] md:font-aeoReg">
            ProConnect offers seamless recruitment solutions tailored to your
            business. We connect you with top professionals to achieve your
            goals faster.
          </p>
        </div>
        <div className="lg:basis-[65%] w-full grid max-md:grid-cols-2 grid-cols-4 max-md:mt-0 max-lg:mt-10 pt-10 md:pt-2 lg:justify-items-center">
          {FooterLinks.map((nav, i) => (
            <div key={i} className="max-md:mb-10">
              <p className="font-semibold mb-5">{nav.footerHeading}</p>
              <div className="grid gap-3">
                {nav.link.map((sub) => (
                  <div key={sub.name}>
                    <Link
                      href={sub.url}
                      className="w-fit opacity-85 hover:text-primary transition-colors duration-300"
                    >
                      {sub.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="myFlex !items-start max-md:flex-col-reverse gap-5 justify-between py-10">
        <p className="text-xs md:text-sm opacity-85">
          Copyright &copy; {year} Proconnect. All rights reserved
        </p>
        <div className="myFlex gap-2 opacity-85">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-all duration-300"
          >
            <Facebook size={20} />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
