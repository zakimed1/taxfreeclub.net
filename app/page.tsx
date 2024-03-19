import Image from "next/image";
import Header from "@/components/Header";
import { Footer } from "@/components/footer";
import Hero from "./home/page";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";

export default function Home() {
  return (
    <>
      <Hero/>
      <Section2 />
      <Section3 />
    </>
  );
}
