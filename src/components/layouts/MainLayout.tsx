import Image from "next/image";
import LogoWorldRanked from "@/assets/images/hero-image.jpg";
import { palette } from "@/theme/palette";
import LogoSvg from "../icons/LogoSvg";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  // py-5 px-8 sm:px-12
  return (
    <main className="flex-grow flex flex-col overflow-auto relative">
      <div className="relative">
        <Image
          src={LogoWorldRanked}
          alt="Logo World Ranked"
          className="w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LogoSvg />
        </div>
      </div>
      <div className="flex-grow min-h-screen" style={{ backgroundColor: palette.dark }} />

      <div className="absolute top-[10%] sm:top-[12%] lg:top-[16%] xl:top-[25%] left-0 right-0 rounded-xl border-[1px] border-[#6C727F] shadow-sm p-5 flex flex-col w-[90%] mx-auto text-white" style={{ backgroundColor: palette.dark }}>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
