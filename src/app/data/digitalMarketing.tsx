export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  category?: string;
};

export const allProjects: Project[] = [
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
