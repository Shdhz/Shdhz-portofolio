import { Instagram, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Instagram",
      href: "https://instagram.com/Shark_dhz", // Ganti dengan username Anda
      icon: <Instagram size={22} /> 
    },
    { 
      name: "Facebook",
      href: "https://facebook.com/Sharkdhz", // Ganti dengan username Anda
      icon: <Facebook size={22} /> 
    },
    { 
      name: "LinkedIn",
      href: "https://linkedin.com/in/muhammad-dhafa-alfareza",
      icon: <Linkedin size={22} /> 
    },
    { 
      name: "GitHub",
      href: "https://github.com/Shdhz",
      icon: <Github size={22} /> 
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        
        {/* Social Media Icons */}
        <div className="flex gap-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Muhammad Dhafa Alfareza. All Rights Reserved.
        </p>
        
      </div>
    </footer>
  );
}