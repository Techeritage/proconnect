"use client";

import { FooterLinks } from "@/constant/FooterLinks";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="myContainer !pb-0">
      <div className="md:flex border-b w-full md:pb-12">
        <div className="md:basis-[35%]">
          <Image src="/logo.png" width={130} height={100} alt="office" />
          <p className="opacity-85 -mt-3 -ml-1 max-w-[80%] font-aeoReg">
            ProConnect offers seamless recruitment solutions tailored to your
            business. We connect you with top professionals to achieve your
            goals faster.
          </p>
        </div>
        <div className="md:basis-[65%] w-full md:grid grid-cols-4 pt-10 md:pt-2 md:justify-items-center">
          {FooterLinks.map((nav, i) => (
            <div key={i} className="max-md:mb-10">
              <p className="font-aeoBold mb-5">{nav.footerHeading}</p>
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
