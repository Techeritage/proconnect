"use client";

import * as React from "react";
import SelectBtn from "@/components/SelectBtn";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  SlidersHorizontal,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useJobs } from "@/services/queries";

export const sortOptions = [
  { item: "Newest First", value: "newest" },
  { item: "Oldest First", value: "oldest" },
];

const JobListingsPage = () => {
  const { data: jobs, isLoading, error } = useJobs();
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [locationFilter, setLocationFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("newest");

  // Filter and sort jobs
  const filteredJobs = React.useMemo(() => {
    if (!jobs?.data) return [];

    let filtered = jobs.data.filter((job) => {
      const matchesSearch =
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        locationFilter === "all" || job.location === locationFilter;
      return matchesSearch && matchesLocation;
    });

    // Sort jobs by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [jobs, searchTerm, locationFilter, sortBy]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `Posted ${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error loading jobs
      </div>
    );

  return (
    <main className="!pt-24">
      <section className="bg-[#01184f] h-[200px] w-full sticky top-0 z-50">
        <div className="myContainer">
          <div className="text-white font-aeoReg myFlex gap-1">
            <Link className="opacity-85 hover:opacity-100" href="/">
              Home
            </Link>
            <ChevronRight size={18} />
            <p>Jobs</p>
          </div>
          <div className="mt-8">
            <div className="bg-white p-1 rounded-full md:w-[50%] myFlex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input !ring-0 font-aeoReg !rounded-full !px-7 placeholder:text-black/80"
                placeholder="Job title or keyword"
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
            <h3 className="font-aeoReg">{filteredJobs.length} jobs found</h3>
            <div className="max-md:max-w-[200px] max-md:mt-2 md:min-w-[200px] myFlex">
              <SelectBtn
                label="Sort By"
                options={sortOptions}
                handleChange={(value) => setSortBy(value)} // Changed from onChange to handleChange
                defaultValue="newest"
              />
            </div>
          </div>
          <div className="myFlex gap-5">
            <SlidersHorizontal className="opacity-85" />
            <DropdownMenuFilter
              trigger="Work Location"
              value={locationFilter}
              onChange={setLocationFilter}
              options={[
                { label: "All Locations", value: "all" },
                ...Array.from(
                  new Set(jobs?.data?.map((job) => job.location) || [])
                ).map((loc) => ({
                  label: loc,
                  value: loc,
                })),
              ]}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                onClick={() => setSelectedJob(job)}
                className="bg-white py-5 px-3 cursor-pointer rounded-xl border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg md:text-xl opacity-90 tracking-wider font-aeoBold">
                  {job.jobTitle}
                </h4>
                <div>
                  <p className="opacity-85">{job.companyName}</p>
                  <p className="opacity-85">{job.location}</p>
                </div>
                {job.experience && (
                  <div className="bg-gray-100 w-fit p-1 text-sm px-2 rounded-md font-aeoBold text-gray-600">
                    {job.experience} years experience
                  </div>
                )}
                <p className="text-xs opacity-85">
                  {formatDate(job.createdAt)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </main>
  );
};

const DropdownMenuFilter = ({ trigger, value, onChange, options }) => {
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
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const JobDetailsModal = ({ job, onClose }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!job) return null;

  const Content = () => (
    <>
      <div className="py-4 pt-7 space-y-1 border-b">
        <h3 className="font-aeoBold">{job.jobTitle}</h3>
        <p className="opacity-85">{job.companyName}</p>
        <p className="opacity-85">{job.location}</p>
      </div>
      <div className="py-4 border-b">
        <h4 className="font-aeoBold">Job Details</h4>
        <div className="flex gap-5 opacity-85 mt-3">
          <BriefcaseBusiness />
          <div>
            <p className="font-aeoBold mb-1">Experience Required</p>
            <div className="bg-gray-100 w-fit p-1 text-sm px-2 rounded-md font-aeoBold text-gray-600">
              {job.experience || "Not specified"}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <h4 className="font-aeoBold">Location</h4>
        <div className="mt-3 opacity-85 myFlex gap-5">
          <MapPin />
          <p>{job.location}</p>
        </div>
      </div>
      <div className="py-4">
        <h4 className="font-aeoBold">Required Skills</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {job.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 p-1 text-sm px-2 rounded-md font-aeoBold text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="py-4">
        <h4 className="font-aeoBold">Full Job Description</h4>
        <div
          className="opacity-85 mt-3"
          dangerouslySetInnerHTML={{ __html: job.jobDescription }}
        />
      </div>
    </>
  );

  if (isDesktop) {
    return (
      <Dialog open={!!job} onOpenChange={() => onClose()}>
        <DialogContent className="sm:max-w-[425px] max-h-[80dvh]">
          <DialogTitle className="sr-only">Job Details</DialogTitle>
          <div className="overflow-y-scroll no-scrollbar max-h-[80dvh] pb-[100px]">
            <Content />
          </div>
          <DialogFooter className="fixed bottom-0 right-0 left-0 p-2">
            <Button className="bg-primary hover:text-primary hover:bg-white w-full text-white h-[56px] font-aeoBold">
              Apply Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={!!job} onOpenChange={() => onClose()}>
      <DrawerContent className="px-3 h-[80dvh]">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Job Details</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto h-full pb-24">
          <Content />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button className="bg-primary hover:text-primary hover:bg-white text-white h-[56px] font-aeoBold">
              Apply Now
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default JobListingsPage;
