"use client";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="lg:fixed bg-background-pink lg:bg-transparent lg:flex lg:justify-between px-5 pt-6 w-full ">
      <Image
        src="/logo.png"
        width={260}
        height={29.5}
        alt="Logo"
        className="hidden md:inline-block"
      />
      <Image
        src="/logo.png"
        width={160}
        height={17.88}
        alt="Logo"
        className="md:hidden"
      />
    </header>
  );
};
