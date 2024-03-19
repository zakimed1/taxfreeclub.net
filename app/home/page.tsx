"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Footer } from "@/components/footer";

export default function Hero() {
  return (
    <>
      <section className="bg-[#080808] text-white h-screen w-full">
        <Header />
        <div className="h-screen flex justify-center items-center flex-col  container mx-auto px-6 py-20 text-center max-sm:px-2 max-sm:py-10  ">
          <h1 className="text-7xl font-bold mb-20 max-sm:text-3xl max-sm:mb-5">
            Make Yourself Great Again
          </h1>
          <p className="text-xl mb-10 max-sm:text-xs max-sm:mb-5">
            Development, Design Marketing-Spline Skillful Work.
          </p>
          <div className="flex justify-center space-x-4 max-sm:space-x-0 max-sm:flex-col max-sm:m-10 max-sm:gap-4 max-sm:items-center">
            {/* to do change btn bg color  */}
            <Link href="/challenges">
              <Button className="bg-gray-100 text-white hover:bg-gray-200">
                Join Challenge Now
              </Button>
            </Link>
            <Link href="/about">
              <Button className="bg-white  border border-white text-black hover:bg-gray-800">
                Discover TFC
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}
