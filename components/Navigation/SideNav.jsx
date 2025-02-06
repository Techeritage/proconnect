"use client";

import { SideNavLinks } from "@/constant/SideNav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathName = usePathname();
  return (
    <aside className="fixed top-0 bottom-0 left-0 w-[300px] bg-white px-3">
      <div className="pt-2 border-b">
        <Link href="/admin?signIn=true" className="z-[5000]">
          <Image src="/logo656.png" width={60} height={100} alt="office" />
        </Link>
      </div>
      <nav className="grid gap-6 mt-8">
        {SideNavLinks.map((nav, i) => (
          <Link
            className={cn(
              "font-aeoReg opacity-85 px-5 py-3 rounded-xl transition-all duration-300 hover:text-primary",
              pathName === nav.url.split("?")[0] &&
                "bg-primary text-white hover:opacity-70 hover:text-white"
            )}
            key={i}
            href={nav.url}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
