import Reveal from "./Reveal";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: "data_object",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        category: "Backend",
        icon: "terminal",
        items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Python"]
    },
    {
        category: "Cloud / DevOps",
        icon: "cloud",
        items: ["AWS", "Docker", "CI/CD", "Vercel", "Terraform"]
    },
    {
        category: "Tools",
        icon: "construction",
        items: ["Git", "Figma", "Jest", "Postman", "Agile"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32" id="skills">
      <Reveal width="100%">
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Skill Matrix
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
            The arsenal of technologies I use to build world-class products.
            </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skills.map((skillGroup, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">{skillGroup.icon}</span>
                <h3 className="font-bold text-lg">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
                </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
