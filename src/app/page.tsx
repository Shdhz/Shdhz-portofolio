"use client";

import { Typewriter } from "react-simple-typewriter";
import Skills from "./components/skills";
import ProjectsSection from "@/app/components/projectSection";
import DigitalMarketingProjectsSection from "@/app/components/digitalMarketingSection";
import { Layers, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

// Helper Component untuk membungkus setiap section agar konsisten
const SectionWrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={`py-20 md:py-28 px-6 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

// Helper Component untuk judul section
const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
    {children}
  </h2>
);

// Helper Component untuk subjudul section
const SectionSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
    {children}
  </p>
);

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] sm:min-h-screen flex items-center relative bg-black">
        <div className="max-w-6xl mx-auto px-6 py-10 sm:py-16 w-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:w-3/5 text-center lg:text-left space-y-6 animate-fadeInUp">
              <span className="text-gray-400 text-base md:text-xl sm:text-lg tracking-wide block">
                Hi there! I’m{" "}
                <strong className="text-white">Muhammad Dhafa Alfareza</strong>.
              </span>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                I Build Digital Experiences
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-medium">
                <Typewriter
                  words={["Web Developer", "Digital Marketing"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
              <p className="text-gray-300 max-w-xl text-lg leading-relaxed mx-auto lg:mx-0">
                Every brand has a story. I turn it into a fast, responsive
                website people enjoy using. Let’s tell yours together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="/projects/application"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-transform hover:scale-105"
                >
                  <Layers size={18} />
                  View Projects
                </a>
                <a
                  href="/projects/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-white/50 text-white rounded-full hover:bg-white hover:text-black transition-transform hover:scale-105"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
            </div>


            <div className="hidden lg:flex lg:w-2/5 justify-center flex-shrink-0">
              <div className="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-6">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <g opacity="0.5">
                    <circle fill="#facc15" cx="150" cy="40" r="30" />
                    <rect
                      fill="#334155"
                      x="20"
                      y="140"
                      width="50"
                      height="50"
                      rx="10"
                      transform="rotate(15 45 165)"
                    />
                  </g>
                  <g>
                    <rect
                      x="10"
                      y="25"
                      width="180"
                      height="150"
                      rx="15"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <circle cx="28" cy="42" r="4" fill="#475569" />
                    <circle cx="44" cy="42" r="4" fill="#475569" />
                    <circle cx="60" cy="42" r="4" fill="#475569" />
                  </g>
                  <g>
                    <text
                      x="30"
                      y="85"
                      fontFamily="monospace"
                      fontSize="24"
                      fill="#facc15"
                    >
                      &lt;/&gt;
                    </text>
                    <rect
                      x="30"
                      y="105"
                      width="60"
                      height="8"
                      rx="4"
                      fill="#334155"
                    />
                    <rect
                      x="30"
                      y="125"
                      width="40"
                      height="8"
                      rx="4"
                      fill="#334155"
                    />
                  </g>
                  <g>
                    <path
                      d="M 120 135 L 120 100 L 130 110 L 140 90 L 150 105 L 160 85"
                      stroke="#facc15"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="115"
                      y="135"
                      width="55"
                      height="8"
                      rx="4"
                      fill="#334155"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SectionWrapper>
        <SectionTitle>My Tech Stack & Tools</SectionTitle>
        <SectionSubtitle>
          A collection of technologies and tools I use to bring ideas to life,
          from stunning websites to effective digital campaigns.
        </SectionSubtitle>
        <Skills />
      </SectionWrapper>

      {/* Web & Mobile Projects Section */}
      <SectionWrapper className="bg-gray-950/30">
        <SectionTitle>Web & Mobile Development Projects</SectionTitle>
        <SectionSubtitle>
          Here are a few highlighted projects that showcase my experience in
          building modern and responsive applications.
        </SectionSubtitle>
        <ProjectsSection limit={3} />
        <div className="mt-12 text-center">
          <a
            href="/projects/application"
            className="group glass px-6 py-3 inline-flex items-center gap-2 rounded-full text-white hover:text-yellow-300 hover:bg-white/10 transition font-medium border border-white/20 backdrop-blur-md"
          >
            View All Projects{" "}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </SectionWrapper>

      {/* Digital Marketing Projects Section */}
      <SectionWrapper>
        <SectionTitle>Digital Marketing Projects</SectionTitle>
        <SectionSubtitle>
          Explore some of my work demonstrating strategic approaches in the
          world of digital marketing.
        </SectionSubtitle>
        <DigitalMarketingProjectsSection limit={3} />
        <div className="mt-12 text-center">
          <a
            href="/projects/marketing"
            className="group glass px-6 py-3 inline-flex items-center gap-2 rounded-full text-white hover:text-yellow-300 hover:bg-white/10 transition font-medium border border-white/20 backdrop-blur-md"
          >
            View All Projects{" "}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
