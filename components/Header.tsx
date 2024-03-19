"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import { useState } from "react";
export default function Header() {
  const [toggel, settogel] = useState(false);
  const Clickhandeler = () => {
    settogel(!toggel);
  };
  return (
    <header className="w-full h-28 py-4 px-8 flex justify-between items-center border-b border-gray-800 ">
      <div className="">
        <Image src={Logo} alt="logo" />
      </div>
      <nav className="space-x-10 max-md:space-x-5 max-sm:space-x-3">
        <Link
          className="text-white hover:text-gray-300 text-2xl max-sm:text-xs max-md:text-xs max-sm:hidden"
          href="/home"
        >
          Home
        </Link>
        <Link
          className="text-2xl text-white hover:text-gray-300 max-sm:text-xs max-md:text-xs max-sm:hidden"
          href="/challenges"
        >
          Challenge
        </Link>
        <Link
          className="text-2xl text-white hover:text-gray-300 max-sm:text-xs max-md:text-xs max-sm:hidden"
          href="/Ramadan"
        >
          Ramadan Program
        </Link>
        <Link
          className="text-2xl text-white hover:text-gray-300 max-sm:text-xs max-md:text-xs max-sm:hidden "
          href="/about"
        >
          About Us
        </Link>
        <button className="hidden max-sm:block mt-10" onClick={Clickhandeler}>
          click
        </button>
        {/* add the humberguer btn  */}
        {toggel ? (
          <nav className="absolute w-screen top-28 left-0 felx items-center justify-center text-[12px]">
            <Link className="m-3" href="/home">
              Home
            </Link>
            <Link className="m-3" href="/challenges">
              Challenge
            </Link>
            <Link className="m-3 " href="/Ramadan">
              Ramadan Program
            </Link>
            <Link className=" m-1" href="/about">
              About Us
            </Link>
          </nav>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}
