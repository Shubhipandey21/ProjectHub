"use client";
import Link from "next/link";
import projectData from "../data/featured_projects.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Project {
  id: number;
  title: string;
  slug: string;
  link: string;
  description: string;
  price: number;
  contributor: string;
  isFeatured: boolean;
  image: string;
  instructor?: string;
}

const projects: Project[] = projectData.projects as Project[];

function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project: Project) => project.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn from scratch
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((project: Project) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
              >
                <div className="p-6 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                  <Link
                    href={`${project.link}`}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProjects;