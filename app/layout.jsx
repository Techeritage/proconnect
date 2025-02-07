import { DM_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SWRProviders from "@/context/SWRProvider";

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
      <body className={`${dmSans.className} antialiased`}>
        <SWRProviders>{children}</SWRProviders>
        <Toaster />
      </body>
    </html>
  );
}
