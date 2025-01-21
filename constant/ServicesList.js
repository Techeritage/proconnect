import { FolderOpenDot } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { Target } from "lucide-react";

export const ServicesList = [
  {
    title: "Talent Acquisition and Recruitment",
    icon: <Target size={32} strokeWidth={1.4} />,
    description:
      "Find and hire the best candidates efficiently for your organization.",
    keyOfferings: [
      "Strategic Talent Sourcing",
      "Candidate Screening and Assessment",
      "Executive Search Solutions",
    ],
    link: "/talent",
  },
  {
    title: "Flexible Staffing Solutions",
    icon: <RefreshCcw size={32} strokeWidth={1.4} />,
    description:
      "Scale your workforce up or down seamlessly to meet business demands.",
    keyOfferings: [
      "Temporary Staffing:",
      "Contract-to-Hire",
      "Permanent Placement",
    ],
    link: "/staffing",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    icon: <FolderOpenDot size={32} strokeWidth={1.4} />,
    description:
      "Let us handle your end-to-end recruitment needs with expertise and precision.",
    keyOfferings: [
      "End-to-End Recruitment Management",
      "Customizable RPO Packages",
    ],
    link: "/outsourcing",
  },
];
