export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

export const allProjects: Project[] = [
  {
    id: 0,
    title: "ASN Day Digital Raffle & Attendance System",
    description:
      "A web-based raffle and attendance system developed for the ASN Day event in Tasikmalaya City. The system enables participant attendance recording, real-time raffle drawing, and automated winner selection, supporting over 1,000 active users during the event.",
    image: "/website_asn.png",
    link: "https://asn-day.tasikmalayakota.go.id",
    technologies: ["Laravel", "Livewire", "Tailwind CSS"],
  },

  {
    id: 1,

    title: "BUMDes Digitalization & MSME Empowerment Program",

    description:
      "A project to boost Bagja Waluya's economy by supporting local MSMEs and developing a custom digital platform for BUMDes operations.",

    image: "/website-bumdes.png",

    link: "https://sumberjaya-bagjawaluya.com/",

    technologies: ["React Js", "Laravel", "Tailwind", "MySql"],
  },

  {
    id: 2,

    title:
      "SIMDIPAL (Sistem Informasi Manajemen Data Inventaris, Produk, dan Pelanggan)",

    description:
      "Built a custom web app, SIMDIPAL, for Kaifacraft to streamline inventory, sales, and customer management—replacing manual spreadsheets.",

    image: "/Simdipal.png",

    link: "",

    technologies: ["Boostrap", "laravel", "MySql", "JQuery"],
  },

  {
    id: 3,

    title: "Ayo Taaruf - A Syar'i Matchmaking Mobile Application",

    description:
      "Developed a mobile app to support the ta'aruf process, enabling secure, syar’i-compliant matchmaking with guided communication and strong privacy controls.",

    image: "/Aplikasi-taaruf.png",

    link: "",

    technologies: ["Flutter", "Dart", "Supabase"],
  },

  {
    id: 4,

    title: "Kaifacraft Company Profile website",

    description:
      "Developed a responsive company profile website for Kaifacraft to showcase their handcrafted products, brand story, and services. The site highlights their commitment to local artisanship with a clean design, integrated gallery, and contact features to support customer engagement and credibility.",

    image: "/Website-kaifacraft.png",

    link: "",

    technologies: ["Wordpress", "Elementor"],
  },

  {
    id: 5,

    title: "Rent Book Online",

    description:
      "Created an online book rental platform that allows users to browse, reserve, and rent books easily. The system includes user authentication, book catalog management, and real-time availability tracking to streamline the rental experience.",

    image: "/Rental-buku.png",

    link: "",

    technologies: ["Laravel", "Boostrap", "MySQL", "JQuery"],
  },
];
