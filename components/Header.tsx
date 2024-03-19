"use client";
import { usePathname } from 'next/navigation'
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname()

  const ClickHandler = () => {
    setToggle(!toggle);
  };

  const isActive = (path) => {
    return pathname === path; // Check if the path is the current route
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-8" alt="Tax Free Club" />
        </a>
        <button onClick={ClickHandler} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/* SVG for hamburger menu icon */}
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${toggle ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700">
            <li>
             <a href="/" className={`${isActive('/') ? 'underline' : ''} underline-offset-8 py-2 px-3 text-white bg-black rounded md:p-0`} aria-current="page">Home</a>
            </li>
            <li>
              <a href="/challenges" className={`${isActive('/challenges') ? 'underline' : ''} hover:underline underline-offset-8 py-2 px-3 text-white bg-black rounded md:p-0 `}>Challenges</a>
            </li>
            <li>
              <a href="/ramadan" className={`${isActive('/ramadan') ? 'underline' : ''} hover:underline underline-offset-8 py-2 px-3 text-white bg-black rounded md:p-0 `}>Ramadan Program</a>
            </li>
            <li>
              <a href="/about" className={`${isActive('/about') ? 'underline' : ''} hover:underline underline-offset-8 py-2 px-3 text-white bg-black rounded md:p-0 `}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}