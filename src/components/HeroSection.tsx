import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
        <h2 className="mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Your Gateway to Hands-On Web Development Experience
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Explore a curated collection of open-source web development projects designed for beginners. Contribute, learn, and grow with hands-on experience in real-world applications.
        </p>
        <div className="mt-4">
          <Link href={"/projects"}><Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore Projects
                    </Button></Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
