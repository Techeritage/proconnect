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
          <div className="myFlex justify-between">
            <h3 className="font-aeoReg">100 jobs found for you</h3>
            <div className="min-w-[200px] myFlex">
              <DropdownMenuRadioGroupDemo />
              <SelectBtn label="Sort By" options={sortOptions} />
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
    </main>
  );
};

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="!bg-transparent !border-0 !ring-0 !shadow-none !p-0"
      >
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default JobListingsPage;
