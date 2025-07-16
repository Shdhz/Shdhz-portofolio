"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { ReactNode } from "react";

// Data untuk setiap kartu kontak
const contactDetails = [
  {
    icon: <Mail size={28} />,
    title: "Email",
    contactInfo: "dhafaalfrz12@gmail.com",
    href: "mailto:dhafaalfrz12@gmail.com",
  },
  {
    icon: <Phone size={28} />,
    title: "Phone / WhatsApp",
    contactInfo: "+62 877-3770-9694",
    href: "https://wa.me/6287737709694",
  },
  {
    icon: <Linkedin size={28} />,
    title: "LinkedIn",
    contactInfo: "in/muhammad-dhafa-alfareza",
    href: "https://linkedin.com/in/muhammad-dhafa-alfareza",
  },
  {
    icon: <Github size={28} />,
    title: "GitHub",
    contactInfo: "github.com/Shdhz",
    href: "https://github.com/Shdhz",
  },
];

// Komponen untuk satu kartu kontak (lebih rapi dan reusable)
function ContactCard({
  icon,
  title,
  contactInfo,
  href,
}: {
  icon: ReactNode;
  title: string;
  contactInfo: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:border-yellow-400/80 hover:bg-white/10 hover:-translate-y-1"
    >
      <div className="text-yellow-400 mb-2">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 font-mono">{contactInfo}</p>
      </div>
    </a>
  );
}

// Komponen Halaman Utama
export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 py-24">
      <div className="max-w-4xl w-full mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always open for new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </div>

        {/* Grid of Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((detail) => (
            <ContactCard
              key={detail.title}
              icon={detail.icon}
              title={detail.title}
              contactInfo={detail.contactInfo}
              href={detail.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
