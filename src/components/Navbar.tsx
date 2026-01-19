export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-header border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tighter uppercase">
            Dev<span className="text-primary">Gallery</span>
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a
            className="nav-link text-sm font-semibold tracking-wide uppercase transition-colors"
            href="#work"
          >
            Work
          </a>
          <a
            className="nav-link text-sm font-semibold tracking-wide uppercase transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="nav-link text-sm font-semibold tracking-wide uppercase transition-colors"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="nav-link text-sm font-semibold tracking-wide uppercase transition-colors"
            href="#contact"
          >
            Contact
          </a>
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
