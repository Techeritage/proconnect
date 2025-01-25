"use client";

import * as React from "react";
import SelectBtn from "@/components/SelectBtn";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";

export const sortOptions = [{ item: "Date", value: "date" }];

const JobListingsPage = () => {
  return (
    <main className="!pt-24">
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
      <section className="bg-bgGray">
        <div className="myContainer h-full">
          <div className="md:myFlex justify-between mb-7">
            <h3 className="font-aeoReg">100 jobs found for you</h3>
            <div className="max-md:max-w-[200px] max-md:mt-2 md:min-w-[200px] myFlex">
              <SelectBtn label="Sort By" options={sortOptions} />
            </div>
          </div>
          <div className="myFlex gap-5">
            <SlidersHorizontal className="opacity-85" />
            <DropdownMenuRadioGroupDemo trigger="Work Location" />
            <DropdownMenuRadioGroupDemo trigger="Job Type" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            <div className="bg-white py-5 px-3 rounded-xl border border-gray-200 space-y-4 shadow-sm">
              <h4 className="text-lg md:text-xl opacity-90 tracking-wider font-aeoBold">
                Frontend Engineer
              </h4>
              <div>
                <p className="opacity-85">Spleet Company</p>
                <p className="opacity-85">Lagos</p>
              </div>
              <div className="bg-gray-100 w-fit p-1 text-sm px-2 rounded-md font-aeoBold text-gray-600">
                Full time
              </div>
              <p className="text-xs opacity-85">Posted 3 days ago</p>
            </div>
            <div className="bg-white py-5 px-3 rounded-xl border border-gray-200 space-y-4 shadow-sm">
              <h4 className="text-lg md:text-xl opacity-90 tracking-wider font-aeoBold">
                Frontend Engineer
              </h4>
              <div>
                <p className="opacity-85">Spleet Company</p>
                <p className="opacity-85">Lagos</p>
              </div>
              <div className="bg-gray-100 w-fit p-1 text-sm px-2 rounded-md font-aeoBold text-gray-600">
                Full time
              </div>
              <p className="text-xs opacity-85">Posted 3 days ago</p>
            </div>
            <div className="bg-white py-5 px-3 rounded-xl border border-gray-200 space-y-4 shadow-sm">
              <h4 className="text-lg md:text-xl opacity-90 tracking-wider font-aeoBold">
                Frontend Engineer
              </h4>
              <div>
                <p className="opacity-85">Spleet Company</p>
                <p className="opacity-85">Lagos</p>
              </div>
              <div className="bg-gray-100 w-fit p-1 text-sm px-2 rounded-md font-aeoBold text-gray-600">
                Full time
              </div>
              <p className="text-xs opacity-85">Posted 3 days ago</p>
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
    </main>
  );
};

export function DropdownMenuRadioGroupDemo({ trigger }) {
  const [workType, setWorkType] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="!bg-transparent !border-0 !ring-0 !shadow-none !p-0"
      >
        <Button
          variant="outline"
          className="text-base md:text-lg opacity-85 font-aeoReg"
        >
          {trigger} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={workType} onValueChange={setWorkType}>
          <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">Remote</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Hybrid</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">On-site</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default JobListingsPage;
