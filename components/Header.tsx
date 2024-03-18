import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
export default function Header() {
  return (
    <header className="w-screen py-4 px-8 flex justify-between items-center border-b border-gray-800">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <nav className="space-x-10 max-sm:space-x-3">
        <Link
          className="text-white hover:text-gray-300 text-2xl max-sm:text-xs "
          href="/home"
        >
          Home
        </Link>
        <Link
          className="text-2xl text-white hover:text-gray-300 max-sm:text-xs "
          href="/challenges"
        >
          Challenge
        </Link>
        <Link
          className="text-2xl text-white hover:text-gray-300 max-sm:text-xs "
          href="/Ramadan"
        >
          Ramadan Program
        </Link>
        <Link
          className="text-2xl text-white hover:text-gray-300 max-sm:text-xs  "
          href="/about"
        >
          About Us
        </Link>
      </nav>
    </header>
  );
}
