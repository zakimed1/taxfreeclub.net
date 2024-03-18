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
      <section className="bg-[#080808] text-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl font-bold mb-4">Make Yourself Great Again</h1>
          <p className="text-xl mb-10">
            Development, Design Marketing-Spline Skillful Work.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200">
              Join Challenge Now
            </Button>
            <Button className="border border-white text-white hover:bg-gray-800">
              Discover TFC
            </Button>
          </div>
        </div>
        <Section2 />
        <Section3 />
        
      </section>
      <Footer />
    </>
  );
}

