import CTA from "@/components/sections/CTA";
import { Clock } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
  return (
    <main className="!pt-20 min-h-dvh">
      <section className="grid gap-3 md:gap-7 myContainer">
        <h1 className="">Insights & Resources</h1>
        <p className="md:max-w-[80%] md:leading-[30px] font-aeoReg opacity-85">
          Stay informed with the latest career advice, industry <br /> trends,
          and hiring insights.
        </p>
      </section>
      <section className="myContainer !pt-0 grid md:grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-3 max-w-[1440px] mx-auto">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="border border-gray-300 rounded-2xl p-2">
            <Link href={`/blog/${"5 Proven Strategies to Attract Top Talent in 2024"}`}>
              <div className="bg-gray-100 h-[150px] w-full rounded-[8px]" />
              <h4 className="text-base md:text-lg font-aeoBold mt-2">
                5 Proven Strategies to Attract Top Talent in 2024
              </h4>
              <p className="line-clamp-2 mt-2">
                Discover actionable tips to stand out in a competitive market
                and secure the best candidates for your team.
              </p>
              <div className="myFlex gap-1 opacity-85 mt-4">
                <Clock size={18} />
                <p className="text-sm">3 mins reading time</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <p className="text-center font-aeoReg mt-7 mb-20 underline">Load More</p>
      <CTA
        isBtn={false}
        heading="Stay Updated with the Latest Insights"
        placeholder="Enter Email Address"
        btnCTA="Subscribe Now"
        content="Never miss an update! Subscribe to our newsletter and get exclusive content, industry insights, and expert tips delivered straight to your inbox."
      />
    </main>
  );
};

export default BlogPage;
