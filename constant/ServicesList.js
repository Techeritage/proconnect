import { FolderOpenDot } from "lucide-react";
import { Handshake } from "lucide-react";
import { Globe } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { Laptop } from "lucide-react";
import { Book } from "lucide-react";
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
  {
    title: "Training and Development",
    icon: <Book size={32} strokeWidth={1.4} />,
    description:
      "Upskill your workforce with customized training programs to boost productivity.",
    keyOfferings: [
      "Skills Development Programs",
      "Leadership Training",
      "Onboarding Assistance",
    ],
    link: "/outsourcing",
  },
  {
    title: "Specialized Recruitment Services",
    icon: <Globe size={32} strokeWidth={1.4} />,
    description:
      "Hire niche talent for industry-specific roles with our specialized expertise.",
    keyOfferings: [
      "Diversity and Inclusion Hiring",
      "Industry-Specific Recruitment",
      "Global Talent Search",
    ],
    link: "/outsourcing",
  },
  {
    title: "Freelance and Gig Worker Recruitment",
    icon: <Laptop size={32} strokeWidth={1.4} />,
    description:
      "Connect with skilled freelancers and gig workers for short-term projects.",
    keyOfferings: ["Project-Based Hiring", "Flexible Workforce Solutions"],
    link: "/outsourcing",
  },
  {
    title: "Background Checks and Compliance",
    icon: <UserRoundSearch size={32} strokeWidth={1.4} />,
    description:
      " Ensure all hires meet legal and professional standards with thorough checks.",
    keyOfferings: [
      "Thorough Candidate Vetting",
      "Criminal Background Screening",
    ],
    link: "/outsourcing",
  },
  {
    title: "Dedicated Support",
    icon: <Handshake size={32} strokeWidth={1.4} />,
    description:
      "Enjoy personalized assistance at every stage of your recruitment journey.",
    keyOfferings: ["24/7 Assistance", "Custom Hiring Strategies"],
    link: "/outsourcing",
  },
];
