"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { MobileNavLinks, NavLinks } from "@/constant/NavLinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

const Header = () => {
  const navContainerRef = useRef(null);
  const pathName = usePathname();

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavActive, setIsNavActive] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isNavActive) {
      document.body.style.overflow = "hidden";
      setMenuVisible(true); // Show menu immediately when isMenu is true
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setMenuVisible(false), 200); // Delay hiding to allow animation to play
    }
  }, [isNavActive]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <header
      ref={navContainerRef}
      className="fixed z-[1000] top-0 left-0 right-0 px-[3%] lg:px-[5%] border-none transition-all duration-700 myFlex justify-between h-[90px]"
    >
      <Link href="/" className="z-[5000]">
        <Image
          src="/logo656.png"
          width={90}
          height={90}
          alt="office"
          className="object-contain max-md:w-[80px] -mb-7"
        />
      </Link>
      <nav className="max-md:hidden">
        <ul className="myFlex justify-between space-x-1 text-sm">
          {NavLinks.map(({ title, link }) => (
            <li key={title}>
              <Link
                href={link}
                className={clsx(
                  "nav-hover-btn",
                  pathName === link && "text-base font-semibold"
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        cta="Contact Us"
        className="bg-primary text-white max-md:hidden !px-7"
        link="/contact"
      />
      <button
        className="z-[5000] md:hidden transition-all duration-300"
        onClick={() => setIsNavActive(!isNavActive)}
      >
        {isNavActive ? (
          <X strokeWidth={1.7} size={32} />
        ) : (
          <Menu strokeWidth={1.7} size={32} />
        )}
      </button>

      {menuVisible && (
        <nav
          className={clsx(
            "fixed top-0 myFlex justify-center z-[1000] h-dvh bottom-0 right-0 left-0 bg-bgGray",
            isNavActive ? "animate-slide-in" : "animate-slide-out"
          )}
        >
          <ul className="grid gap-5">
            {MobileNavLinks.map(({ title, link }) => (
              <li key={title} className="text-center">
                <Link
                  onClick={() => setIsNavActive(false)}
                  href={link}
                  className={clsx(
                    "nav-hover-btn !ml-0 text-3xl font-aeoReg",
                    pathName === link && "text-primary !font-aeoBold"
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="myFlex absolute bottom-10 gap-4 opacity-85">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
