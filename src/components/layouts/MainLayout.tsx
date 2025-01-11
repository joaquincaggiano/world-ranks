"use client";

import Image from "next/image";
import LogoWorldRanked from "@/assets/images/hero-image.jpg";
import LogoSvg from "../icons/LogoSvg";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <main className="flex flex-col min-h-screen relative">
      <div className="relative">
        <Image
          src={LogoWorldRanked}
          alt="Logo World Ranked"
          className="w-full h-full"
          priority
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LogoSvg />
        </div>
      </div>
      <div className="flex-grow min-h-screen bg-dark" />

      <div
        className={`absolute top-[10%] sm:top-[12%] lg:top-[16%] xl:top-[25%] left-0 right-0 rounded-xl border-[1px] border-dark2 shadow-sm flex flex-col ${
          pathname.includes("country") ? "w-[50%]" : "w-[90%] py-5 px-8"
        } mx-auto text-white bg-dark`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
