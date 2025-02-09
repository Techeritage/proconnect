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
import { Menu, X, Linkedin, Facebook, Instagram } from "lucide-react";

const HeaderNew = () => {
  const navContainerRef = useRef(null);
  const innerContainerRef = useRef(null);
  const pathName = usePathname();

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavVisible2, setIsNavVisible2] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavActive, setIsNavActive] = useState(false);

  // Handle body scroll lock
  useEffect(() => {
    if (isNavActive) {
      document.body.style.overflow = "hidden";
      setMenuVisible(true);
    } else {
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => setMenuVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isNavActive]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (!innerContainerRef.current) return;

      if (currentScrollY === 0) {
        setIsNavVisible2(false);
        setIsNavVisible(true);
        innerContainerRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible2(false);
        setIsNavVisible(false);
        innerContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible2(true);
        setIsNavVisible(true);
        innerContainerRef.current.classList.add("floating-nav");
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();
  }, [currentScrollY]);

  // Handle nav animation
  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  const logoSrc =
    isNavVisible2 || (pathName !== "/" && !isNavVisible2)
      ? "/logo656.png"
      : "/logoo2.png";

  const logoSize =
    logoSrc === "/logo656.png"
      ? {
          width: 70,
          height: 50,
          className: "object-contain max-md:w-[80px] mt-3 ml-4",
        }
      : {
          width: 130,
          height: 50,
          className: "object-contain max-md:w-[120px]",
        };

  return (
    <header
      ref={navContainerRef}
      className="fixed top-0 left-0 right-0 z-[1000] pt-3 px-[3%] lg:px-[5%] transition-all duration-300"
    >
      <div
        ref={innerContainerRef}
        className="w-full glassmorphism h-[65px] rounded-full myFlex justify-between px-2 max-lg:pr-3"
      >
        <Link href="/" className="z-[5000] transition-all duration-300">
          <Image src={logoSrc} alt="office" {...logoSize} />
        </Link>

        <nav className="max-lg:hidden">
          <ul className="myFlex justify-between space-x-1 text-sm">
            {NavLinks.map(({ title, link }) => (
              <li key={title}>
                <Link
                  href={link}
                  className={clsx(
                    "nav-hover-btn",
                    pathName === link && "text-base font-semibold",
                    (isNavVisible2 || pathName !== "/") && "!text-black"
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
          className="bg-primary text-white max-lg:hidden !px-7"
          link="/contact"
        />

        <button
          className="z-[5000] lg:hidden"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <Menu
            strokeWidth={1.7}
            size={32}
            className={clsx(
              (isNavVisible2 || pathName !== "/") && "text-black"
            )}
          />
        </button>
      </div>

      {menuVisible && (
        <nav
          className={clsx(
            "fixed top-0 myFlex justify-center z-[1000] h-dvh text-black bottom-0 right-0 left-0 bg-white",
            isNavActive ? "animate-slide-in" : "animate-slide-out"
          )}
        >
          <button
            className="z-[5000] absolute right-9 top-9 lg:hidden"
            onClick={() => setIsNavActive(!isNavActive)}
          >
            <X strokeWidth={1.7} size={32} color="#000" />
          </button>

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
            {[Linkedin, Facebook, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-all duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderNew;
