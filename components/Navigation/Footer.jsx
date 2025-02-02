"use client";

import { FooterLinks } from "@/constant/FooterLinks";
import { Send2 } from "iconsax-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState("");
  return (
    <footer className="myContainer !pb-0">
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
          <div>
            <label className="text-sm max-lg:hidden">
              Sign up for our <span className="font-semibold">Newsletter</span>{" "}
            </label>
            <div className="w-[300px] lg:mt-2 h-[50px] pl-3 pr-1 myFlex gap-3 justify-between rounded-[14px] border border-primary border-black">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full focus:outline-none placeholder:text-sm placeholder:text-black/80"
              />
              <button className="bg-primary p-2 rounded-xl myFlex justify-between">
                <Send2 size="24" color="#ffffff" variant="Bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex border-b w-full pt-10 md:py-12">
        <div className="md:basis-[35%]">
          <Image src="/logo998.png" width={100} height={100} alt="office" />
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
