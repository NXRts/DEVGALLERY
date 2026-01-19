import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      className="bg-white dark:bg-gray-900 py-32 border-y border-gray-100 dark:border-gray-800"
      id="about"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <Reveal width="100%">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight">About Me</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              I am a senior full-stack developer specializing in building digital
              experiences that are fast, accessible, and visually compelling. With
              over 5 years of industry experience, I focus on solving complex
              problems with clean, maintainable code and modern architectural
              patterns.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs">
                Technical Approach
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My philosophy revolves around "minimalist complexity"—building
                sophisticated engines behind simple, intuitive interfaces. I
                believe performance is a feature, not an afterthought.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="space-y-4">
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs">
                Mission
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower brands by bridge the gap between human needs and
                technical capabilities through sustainable, forward-thinking
                software engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
