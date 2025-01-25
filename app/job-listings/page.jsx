import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const JobListingsPage = () => {
  return (
    <main className="min-h-dvh !pt-24">
      <section className="bg-[#01184f] h-[200px] w-full">
        <div className="myContainer">
          <div className="text-white font-aeoReg myFlex gap-1">
            <Link className="opacity-90 hover:opacity-100" href="/">
              Home
            </Link>
            <ChevronRight size={18} className=" opacity-90" />
            <p className="">jobs</p>
          </div>
          
        </div>
      </section>
      {/* faq */}
    </main>
  );
};

export default JobListingsPage;
