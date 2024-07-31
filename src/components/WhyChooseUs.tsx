"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const websiteContent = [
  {
    title: "Comprehensive Project ",
    description:
      "Dive into a wide array of projects covering Frontend development. Each project is meticulously documented to provide insights into the development process, challenges faced, and solutions implemented. It is great for Beginners.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
        Comprehensive Project
      </div>
      </div>
    ),
  },
  {
    title: "Access to Source Code",
    description:
      "Gain full access to the source code of all showcased projects. Study the code, understand the structure, and learn best practices directly from real-world examples. This transparency allows you to replicate, modify, and enhance the projects, fostering a deeper understanding of software development.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Access to Source Code
      </div>
      </div>
    ),
  },
  {
    title: "Learning-Oriented Approach",
    description:
      "Our platform is designed with a focus on learning and growth. Each project includes detailed explanations, code comments, and tutorials to guide you through the implementation. This hands-on approach helps you grasp complex concepts and improve your coding skills effectively",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Learning-Oriented Approach
      </div>
      </div>
    ),
  },
  {
    title: "Regular Updates and New Projects",
    description:
      " Stay ahead of the curve with regularly updated content and new projects. We continuously add fresh, innovative projects to our showcase, ensuring you have access to the latest trends and technologies in software development.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--white-500))] flex items-center justify-center text-white">
        Regular Updates and New Projects
      </div>
      </div>
    ),
  },
];

function WhyChooseUs() {
  return <div>
    <StickyScroll  content={websiteContent}/>
  </div>;
}

export default WhyChooseUs;
