import { DM_Sans, Raleway } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "ProConnect - Your Recruitment Partner",
  description:
    "ProConnect connects employers with top talent and helps job seekers find their dream jobs. Explore our recruitment services and industry insights today.",
};

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
