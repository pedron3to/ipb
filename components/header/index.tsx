"use client";
import Link from "next/link";
import { Menu } from "../menu";
import { MenuMobile } from "../menu/menuMobile";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

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
          <Image
            src={pathname === "/sobre" ? "/logo.png" : "/logo.png"}
            alt="logo"
            width={140}
            height={140}
          />
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
