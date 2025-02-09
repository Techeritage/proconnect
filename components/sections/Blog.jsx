"use client";

import { Clock } from "lucide-react";
import Button from "../Button";
import { useBlogs } from "@/services/queries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const { data, isLoading, error } = useBlogs();

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from([...textRef.current.children], {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (cardsRef.current.length > 0) {
        gsap.from(cardsRef.current, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 1,
          stagger: 0.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Coming Soon</p>;

  return (
    <section ref={sectionRef} className="bg-bgGray">
      <div className="myContainer">
        <div ref={textRef}>
          <h2 className="max-w-[90%] font-semibold">
            Insights and Inspiration <br className="max-md:hidden" /> for
            Smarter Hiring
          </h2>
          <p className="opacity-85 mt-2 text-sm w-[90%]">
            Explore expert tips, trends, and insights to elevate your hiring
            strategies.
          </p>
        </div>

        <div className="mt-10 md:mt-16 max-md:myFlex max-md:gap-4 max-md:overflow-x-scroll max-md:no-scrollbar md:grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {data?.data && data.data.length > 0 ? (
            data.data.map((blog, i) => (
              <div
                key={blog.id || i}
                ref={(el) => el && (cardsRef.current[i] = el)}
                className="border border-gray-300 bg-white max-md:min-w-[330px] max-md:max-w-[330px] rounded-2xl p-2"
              >
                <div className="bg-gray-100 h-[250px] w-full rounded-[8px]" />
                <h4 className="text-base md:text-lg font-semibold mt-2">
                  {blog.title ||
                    "5 Proven Strategies to Attract Top Talent in 2024"}
                </h4>
                <p className="line-clamp-2 mt-2">
                  {blog.description ||
                    "Discover actionable tips to stand out in a competitive market and secure the best candidates for your team."}
                </p>
                <div className="myFlex gap-1 opacity-85 mt-4">
                  <Clock size={18} />
                  <p className="text-sm">3 mins reading time</p>
                </div>
              </div>
            ))
          ) : (
            <p>No blog posts available</p>
          )}
        </div>
        <div className="myFlex justify-center mt-16">
          <Button
            ref={buttonRef}
            cta="View More"
            link="/blog"
            className="border bg-white !px-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
