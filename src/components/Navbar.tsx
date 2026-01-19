import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("work");

  const navItems = [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tighter uppercase">
            NXRts<span className="text-primary">.dev</span>
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                activeSection === item.id ? "text-primary" : "text-gray-500 hover:text-primary"
              }`}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-opacity cursor-pointer">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}
