"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    {
      label: "Project",
      submenu: [
        { href: "/projects/application", label: "Project Apps" },
        { href: "/projects/marketing", label: "Project Digital Marketing" },
      ],
    },
    { href: "/projects/aboutme", label: "About me" },
    { href: "/projects/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Shdhz Portofolio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
          {links.map((link) =>
            link.submenu ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 hover:text-white transition">
                  {link.label}
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 ease-in-out pointer-events-none z-50">
                  <div className="py-2">
                    {link.submenu.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className={`block px-4 py-2 text-sm whitespace-nowrap hover:text-yellow-400 transition ${
                          pathname === sub.href
                            ? "text-white font-semibold"
                            : "text-gray-300"
                        }`}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-white transition ${
                  pathname === link.href ? "text-white font-semibold" : ""
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-gray-300">
            {links.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="w-full flex justify-between items-center py-2 text-left hover:text-white"
                  >
                    {link.label}
                    <ChevronDown
                      className={`transition-transform ${
                        submenuOpen ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  </button>
                  {submenuOpen && (
                    <div className="ml-4 mt-1 flex flex-col space-y-2">
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className={`hover:text-yellow-400 transition ${
                            pathname === sub.href
                              ? "text-white font-semibold"
                              : ""
                          }`}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-white transition ${
                    pathname === link.href ? "text-white font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
