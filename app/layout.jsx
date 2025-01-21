import Header from "@/components/Navigation/Header";
import "../public/Aeonik/stylesheet.css";
import { Raleway } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "ProConnect - Your Recruitment Partner",
  description:
    "ProConnect connects employers with top talent and helps job seekers find their dream jobs. Explore our recruitment services and industry insights today.",
};

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-aeoLight antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
