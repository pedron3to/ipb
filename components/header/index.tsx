"use client";
import Link from "next/link";
import { Menu } from "../menu";
import { MenuMobile } from "../menu/menuMobile";

const Header = () => {
  return (
    <header
      className="absolute top-0 flex w-full items-center justify-between p-4 px-4 md:px-20 z-10"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
      }}
    >
      <div className="flex items-center">
        <Link href="/">
          <span className="font-bold text-white text-[20px] md:text-[32px]">
            IPB Criciúma
          </span>
        </Link>
      </div>
      <nav className="hidden sm:block">
        <Menu />
      </nav>
      <MenuMobile />
    </header>
  );
};

export default Header;
