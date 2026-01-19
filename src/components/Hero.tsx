export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Full-Stack Developer crafting{" "}
            <span className="text-primary italic">high-performance</span> digital
            experiences.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Building scalable, high-impact web applications with a focus on
            performance, accessibility, and user-centric architecture.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all cursor-pointer">
              View Work
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl"></div>
            <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Modern workspace with laptop and minimalist setup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3DNrRqukaMvkrPKur-ID6B5svJHgiXBsp2YhTliiY3GlhI9_1ZZTprE49xLaX7n0QpSF2K8lRZvvt_KX_bBZC066tPRhL1rAAqahsMsjhRCuNkXwyDI8O3kzCDFvRV4NdHbw4yHrn-3UuHzynpjJ7CPxcjBA-NspinDqP8DmnOm1DfLMsmiXk-aalDOKJwbKF5qvVlX6-Pz9sp6AaOAOHERuM2QPiCAaJ-6bXMVHu_PBpgWdWOhH8ragghx52p1bwcwpeCdudsgQ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
