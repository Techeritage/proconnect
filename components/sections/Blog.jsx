"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Clock } from "lucide-react";
import Button from "../Button";
import { useBlogs } from "@/services/queries";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const { data, isLoading, error } = useBlogs();

  useGSAP(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Coming Soon</p>;

  return (
    <section ref={sectionRef} className="bg-bgGray">
      <div className="myContainer">
        <h2 ref={headingRef} className="max-w-[90%] font-semibold">
          Insights and Inspiration <br className="max-md:hidden" /> for Smarter
          Hiring
        </h2>
        <p ref={paragraphRef} className="opacity-85 mt-2 text-sm w-[90%]">
          Explore expert tips, trends, and insights to elevate your hiring
          strategies.
        </p>

        <div className="mt-10 md:mt-16 max-md:myFlex max-md:gap-4 max-md:overflow-x-scroll max-md:no-scrollbar md:grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {data?.data && data.data.length > 0 ? (
            data.data.map((blog, i) => (
              <div
                key={blog.id || i}
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
