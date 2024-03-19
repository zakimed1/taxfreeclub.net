'use client'
import Image from "next/image";
import Header from "@/components/Header";
import { Footer } from "@/components/footer";
import Hero from "./home/page";
import { Section2 } from "@/app/home/Section2";
import { Section3 } from "@/app/home/Section3";
import { Section4 } from "./home/Section4";
import { Fade, Zoom } from 'react-awesome-reveal';

export default function Home() {
  return (
    <>
    <Fade cascade damping={0.1} triggerOnce>
      <Hero/>
    </Fade>
    <Fade cascade damping={0.1} triggerOnce>
      <Section2 />
    </Fade>
    <Fade cascade damping={0.1} triggerOnce>
      <Section3 />
    </Fade>
    <Fade cascade damping={0.1} triggerOnce>
      <Section4 />
    </Fade>
    </>
  );
}
