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
        <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The Code Chronicles: My Developers Journey
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Welcome to "Showcasing Innovation: My Journey Through Code." This
          portfolio highlights my most significant projects, each reflecting my
          dedication to solving complex problems with innovative solutions. From
          real-time collaborative apps to educational platforms, explore how I
          leverage technology to create impactful and meaningful work. Join me
          as I journey through the world of software development.
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
