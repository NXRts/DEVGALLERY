export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="size-6 bg-primary/20 rounded-md flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-sm">code</span>
          </div>
          <span className="text-sm font-bold tracking-tighter uppercase">
            DevGallery
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          © {new Date().getFullYear()} DevGallery. All rights reserved. Designed for performance.
        </p>
        <div className="flex gap-6">
          <a
            className="text-xs font-bold text-gray-400 hover:text-primary transition-colors"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-xs font-bold text-gray-400 hover:text-primary transition-colors"
            href="#"
          >
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
