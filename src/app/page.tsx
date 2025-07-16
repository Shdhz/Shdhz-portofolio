"use client";

import { Typewriter } from "react-simple-typewriter";
import Skills from "./components/skills";
import ProjectsSection from "@/app/projects/application/page";
import DigitalMarketingProjectsSection from "./projects/marketing/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="space-y-4">
            <span className="text-gray-400 text-lg tracking-wide animate-fadeInUp">
              Hi there! I’m glad you’re here.
            </span>
            <h1 className="text-5xl md:text-7xl font-bold animate-fadeInUp delay-200">
              I'm Muhammad Dhafa Alfareza
            </h1>

            <p className="text-gray-300 max-w-3xl text-2xl mb-10 mx-auto leading-relaxed animate-fadeInUp delay-400">
              Every brand has a story. I turn it into a fast, responsive website
              people enjoy using. Let’s tell yours together
            </p>
            <h2 className="text-2xl md:text-3xl text-yellow-400 animate-fadeInUp delay-300 mb-10">
              <Typewriter
                words={["Web Developer", "Digital Marketing"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-500">
            <a
              href="/projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Web development & Mobile development Projects
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
          Here are a few highlighted projects that showcase my experience in Web
          development & Mobile development
        </p>

        <ProjectsSection limit={3} />

        <div className="mt-10 text-center">
          <a
            href="/projects/application"
            className="glass px-6 py-3 inline-block rounded-full text-white hover:text-yellow-300 hover:bg-white/10 transition font-medium border border-white/20 backdrop-blur-md"
          >
            View All Projects →
          </a>
        </div>
      </section>

      <section className="mb-14">
        <Skills />
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Digital Marketing Projects
        </h2>
        <p className="text-gray-400 max-w-xl">
          Here are a few highlighted projects that showcase my experience in
          Digital marketing
        </p>

        <DigitalMarketingProjectsSection limit={3} />

        <div className="">
          <a
            href="/projects/marketing"
            className="glass px-6 py-3 inline-block rounded-full text-white hover:text-yellow-300 hover:bg-white/10 transition font-medium border border-white/20 backdrop-blur-md"
          >
            View All Projects →
          </a>
        </div>
      </section>
    </div>
  );
}
