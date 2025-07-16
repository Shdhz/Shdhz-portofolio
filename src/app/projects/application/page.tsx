// app/components/ProjectsSection.tsx
"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/app/components/projectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

export default function ProjectsSection({ limit }: { limit?: number }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        title: "BUMDes Digitalization & MSME Empowerment Program",
        description:
          "A project to boost Bagja Waluya's economy by supporting local MSMEs and developing a custom digital platform for BUMDes operations.",
        image: "/website-bumdes.png",
        link: "https://github.com/username/project1",
        technologies: ["React", "Laravel", "Tailwind", "MySql"],
      },
      {
        id: 2,
        title: "SIMDIPAL (Sistem Informasi Manajemen Data Inventaris, Produk, dan Pelanggan)",
        description:
          "Built a custom web app, SIMDIPAL, for Kaifacraft to streamline inventory, sales, and customer management—replacing manual spreadsheets.",
        image: "/Simdipal.png",
        link: "https://github.com/username/project2",
        technologies: ["Boostrap", "laravel", "MySql", "JQuery"],
      },
      {
        id: 3,
        title: "Ayo Taaruf - A Syar'i Matchmaking Mobile Application",
        description:
          "Developed a mobile app to support the ta'aruf process, enabling secure, syar’i-compliant matchmaking with guided communication and strong privacy controls.",
        image: "/Aplikasi-taaruf.png",
        link: "https://github.com/username/project3",
        technologies: ["Flutter", "Dart", "Supabase"],
      },
      {
        id: 4,
        title: "Kaifacraft Company Profile website",
        description:
          "Developed a responsive company profile website for Kaifacraft to showcase their handcrafted products, brand story, and services. The site highlights their commitment to local artisanship with a clean design, integrated gallery, and contact features to support customer engagement and credibility.",
        image: "/Website-kaifacraft.png",
        link: "https://github.com/username/project4",
        technologies: ["Wordpress", "Elementor"],
      },
      {
        id: 5,
        title: "Rent Book Online",
        description:
          "Created an online book rental platform that allows users to browse, reserve, and rent books easily. The system includes user authentication, book catalog management, and real-time availability tracking to streamline the rental experience.",
        image: "/Rental-buku.png",
        link: "https://github.com/username/project4",
        technologies: ["Laravel", "Boostrap", "MySQL", "JQuery"],
      },
    ];

    setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD372]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
