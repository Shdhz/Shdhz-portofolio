"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setHasMounted(true);
    setCurrentPath(window.location.pathname);
  }, []);

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

  const handleClickOutside = () => {
    setDesktopSubmenuOpen(false);
  };

  return (
    <>
      {hasMounted && desktopSubmenuOpen && (
        <div className="fixed inset-0 z-40" onClick={handleClickOutside} />
      )}

      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
            Shdhz Portofolio
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm text-gray-300">
            {links.map((link) =>
              link.submenu ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDesktopSubmenuOpen(!desktopSubmenuOpen)}
                    className="flex items-center gap-1 hover:text-white transition-colors duration-200 py-2"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        desktopSubmenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {hasMounted && (
                    <div
                      className={`absolute top-full left-0 mt-1 min-w-[220px] bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl transition-all duration-200 ease-out z-50 ${
                        desktopSubmenuOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="py-2">
                        {link.submenu.map((sub, index) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setDesktopSubmenuOpen(false)}
                            className={`block px-4 py-3 text-sm whitespace-nowrap hover:text-yellow-400 hover:bg-white/5 transition-all duration-150 ${
                              currentPath === sub.href
                                ? "text-white font-semibold bg-white/10"
                                : "text-gray-300"
                            } ${index === 0 ? "rounded-t-lg" : ""} ${
                              index === link.submenu.length - 1
                                ? "rounded-b-lg"
                                : ""
                            }`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`hover:text-white transition-colors duration-200 py-2 ${
                    currentPath === link.href ? "text-white font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none hover:text-white transition-colors duration-200 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-1 text-gray-300">
            {links.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="w-full flex justify-between items-center py-3 px-2 text-left hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        submenuOpen ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 mt-2 flex flex-col space-y-1 border-l-2 border-white/10 pl-4">
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => {
                            setIsOpen(false);
                            setSubmenuOpen(false);
                          }}
                          className={`py-2 px-3 rounded-lg hover:text-yellow-400 hover:bg-white/5 transition-all duration-200 ${
                            currentPath === sub.href
                              ? "text-white font-semibold bg-white/10"
                              : "text-gray-400"
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
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-2 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-200 ${
                    currentPath === link.href
                      ? "text-white font-semibold bg-white/10"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
