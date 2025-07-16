"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/app/components/projectCard"; // pastikan import path sesuai

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  category?: string; // optional untuk filter
};

export default function DigitalMarketingProjectsSection({
  limit,
}: {
  limit?: number;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = [
        {
          id: 101,
          title: "Design feed instagram - UMKM",
          description:
            "Instagram feed design for a local MSME to boost brand identity, engagement, and sales through visual consistency.",
          image: "/konten-ig.png",
          link: "#",
          technologies: ["Adobe Illustrator", "Canva"],
          category: "digital-marketing",
        },
        {
          id: 102,
          title: "Content Video for YouTube & TikTok",
          description:
            "Produced short and long-form video content to promote the brand on YouTube and TikTok.",
          image: "/konten-video.png",
          link: "https://www.youtube.com/@kaifacraftgroup",
          technologies: ["YouTube", "TikTok", "Video Editing"],
          category: "digital-marketing",
        },
      ];

      const filtered = allProjects.filter(
        (p) => p.category === "digital-marketing"
      );

      setTimeout(() => {
        setProjects(limit ? filtered.slice(0, limit) : filtered);
        setLoading(false);
      }, 500);
    };

    fetchProjects();
  }, [limit]);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
