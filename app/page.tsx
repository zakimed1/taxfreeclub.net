import Image from "next/image";
import Header from "@/components/Header";
import { Footer } from "@/components/footer";
import Hero from "./home/page";
import { Section2 } from "@/app/home/Section2";
import { Section3 } from "@/app/home/Section3";
import { Section4 } from "./home/Section4";

export default function Home() {
  return (
    <>
      <Hero/>
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
