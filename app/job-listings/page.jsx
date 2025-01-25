import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const JobListingsPage = () => {
  return (
    <main className="min-h-dvh !pt-24">
      <section className="bg-[#01184f] h-[200px] w-full">
        <div className="myContainer">
          <div className="text-white font-aeoReg myFlex gap-1">
            <Link className="opacity-85 hover:opacity-100" href="/">
              Home
            </Link>
            <ChevronRight size={18} />
            <p className="">jobs</p>
          </div>
          <div className="mt-8">
            <div className="bg-white p-1 rounded-full md:w-[50%] myFlex">
              <input
                type="text"
                className="input !ring-0 font-aeoReg !rounded-full !px-7 placeholder:text-black/80"
                placeholder="job title or keyword"
              />
              <button className="h-[56px] bg-primary font-aeoReg tracking-wider transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-white hover:text-primary text-white px-10 rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
      {/* faq */}
    </main>
  );
};

export default JobListingsPage;
