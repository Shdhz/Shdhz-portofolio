import { FC } from "react";

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Achievement {
  title: string;
  year: string;
  description: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "BUMDes Bagja Waluya",
    position: "Project Lead & System Designer",
    period: "2025 - Present",
    description:
      "Led digital transformation for the village enterprise with a custom Laravel + React web app. Designed dashboards, financial reporting, and booking system for business units.",
  },
  {
    company: "KaifaCraft",
    position: "Web Developer & Digital Marketing",
    period: "Aug 2024 - Apr 2025",
    description:
      "Developed SIMDIPAL (inventory/customer management) in Laravel, managed official WordPress site, and handled content strategy for Instagram and YouTube.",
  },
  {
    company: "BISA MEDIA",
    position: "Videographer & Editor",
    period: "May 2023 - Sep 2023",
    description:
      "Created and edited promotional video content for TikTok, wrote scripts, and increased brand visibility through engaging storytelling.",
  },
  {
    company: "NEOSANTARA Studio (Intern)",
    position: "Designer & Developer Intern",
    period: "Mar 2022 - Aug 2022",
    description:
      "Built websites using WordPress Elementor and Laravel, designed digital marketing content, and created UI/UX prototypes in Figma.",
  },
];

const educations: Education[] = [
  {
    institution: "Bina Sarana Informatika College",
    degree: "Information Systems, GPA: 4.00",
    year: "Ongoing (4th Semester)",
  },
  {
    institution: "SMK Daarul Abroor",
    degree: "Software Engineering, Final Score: 85.98",
    year: "2020 - 2023",
  },
];

const achievements: Achievement[] = [
  {
    title: "HAKI: SIMDIPAL System",
    year: "2024",
    description:
      "Obtained Intellectual Property Rights for SIMDIPAL, a Laravel-based inventory and CRM system for KaifaCraft.",
  },
  {
    title: "3rd Place – Website Competency Test",
    year: "2023",
    description:
      "Achieved 3rd place in web development test organized by Prilude Studio.",
  },
];

const SectionTitle: FC<{ children: React.ReactNode; icon: string }> = ({
  children,
  icon,
}) => (
  <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
    <div className="text-2xl sm:text-3xl flex-shrink-0">{icon}</div>
    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
      {children}
    </h2>
  </div>
);

const GlassCard: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`
    backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 
    shadow-2xl hover:shadow-3xl transition-all duration-300 
    hover:bg-yellow-500/10 hover:border-yellow-500/30 group
    ${className}
  `}
  >
    {children}
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] sm:min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements - Adjusted for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 sm:top-60 right-5 sm:right-20 w-60 sm:w-96 h-60 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section className="relative z-10 px-4 sm:px-6 py-10 sm:py-20 max-w-7xl mx-auto text-white">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img
              src="/foto_diri.jpg"
              alt="Profile"
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight px-2">
            Muhammad Dhafa Alfareza
          </h1>

          <div className="relative max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              I'm a web developer and digital marketing enthusiast passionate
              about building responsive, beautiful, and performant websites.
            </p>
            <div className="absolute -inset-2 sm:-inset-4 bg-white/10 rounded-xl blur-xl opacity-50"></div>
          </div>
        </div>

        {/* Content Grid - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8 sm:space-y-12">
            {/* Work Experience */}
            <div>
              <SectionTitle icon="💼">Work Experience</SectionTitle>
              <div className="space-y-4 sm:space-y-6">
                {workExperiences.map((exp, i) => (
                  <GlassCard key={i}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                          {exp.position}
                        </h3>
                        <span className="self-start text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-300">
                        {exp.company}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionTitle icon="🎓">Education</SectionTitle>
              <div className="space-y-4">
                {educations.map((edu, i) => (
                  <GlassCard key={i}>
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-sm sm:text-base text-gray-300 font-semibold">
                          {edu.institution}
                        </span>
                        <span className="text-gray-400 hidden sm:inline">
                          •
                        </span>
                        <span className="self-start text-xs sm:text-sm px-2 py-1 rounded-full bg-white/10 border border-white/10">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 sm:space-y-12">
            {/* Achievements */}
            <div>
              <SectionTitle icon="🏆">Achievements</SectionTitle>
              <div className="space-y-4 sm:space-y-6">
                {achievements.map((ach, i) => (
                  <GlassCard key={i}>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="space-y-2 sm:space-y-3 mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                            {ach.title}
                          </h3>
                          <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">
                            {ach.year}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Skills Highlight */}
            <div>
              <SectionTitle icon="⚡">Skills & Technologies</SectionTitle>
              <GlassCard>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "Laravel",
                    "React",
                    "Inertia.js",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "PHP",
                    "MySQL",
                    "SEO",
                    "Digital Marketing",
                    "UI/UX Design",
                    "Git",
                    "Wordpress",
                    "Adobe Illustrator",
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm font-medium truncate">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center mt-12 sm:mt-20">
          <GlassCard>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              Let's Work Together
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Ready to bring your ideas to life? Let's create something amazing
              together!
            </p>
            <a
              href="mailto:dhafaalfrz12@gmail.com"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
