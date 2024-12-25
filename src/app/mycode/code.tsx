"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      {/* Large Header */}
      <div className="hidden lg:block h-[132px] bg-white">
        <div className="max-w-screen-2xl md:w-full h-full grid grid-rows-2">
          <div className="flex justify-between items-center px-6">
            <Image
              width={16}
              height={16}
              alt="Search icon"
              src="/images/Search.svg"
            />
            <p className="font-normal text-[24px] leading-[29.52px]">Avion</p>
            <div className="flex">
              <Link href="/cart">
                <Image
                  width={16}
                  height={16}
                  alt="Shopping cart icon"
                  src="/images/Shopping--cart.svg"
                />
              </Link>
              <Image
                width={16}
                height={16}
                alt="Avatar icon"
                src="/images/User--avatar.svg"
                className="ml-4"
              />
            </div>
          </div>
          <div className="bg-white flex justify-center items-center border-t border-[#0000001A] pt-[15px] gap-[44px]">
            {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
              <div
                key={item}
                className="hover:underline cursor-pointer font-normal text-[16px] leading-[21.16px] text-[#726E8D]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Small Header */}
      <header className="lg:hidden bg-white fixed top-0 left-0 w-full h-[69px] z-50">
        <div className="flex justify-between items-center px-6 h-full">
          <div className="font-normal text-[24px] leading-[29.52px]">Avion</div>
          <div className="flex gap-5">
            <Image
              width={16}
              height={16}
              alt="Search icon"
              src="/images/Search.svg"
            />
            <Image
              width={16}
              height={16}
              alt="Menu icon"
              src="/images/Menu.svg"
              onClick={() => setOpenMenu(!OpenMenu)}
              className="cursor-pointer"
            />
          </div>
        </div>
        {OpenMenu && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <ul className="flex flex-col items-center gap-4">
              {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
                <li
                  key={item}
                  className="text-[14px] text-[#726E8D] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}