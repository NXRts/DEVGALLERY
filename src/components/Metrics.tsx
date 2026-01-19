import Reveal from "./Reveal";

export default function Metrics() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        <Reveal delay={0.2} width="100%" className="flex flex-col items-center md:items-start gap-2">
          <span className="text-5xl font-extrabold">30+</span>
          <span className="text-primary-100/70 font-medium uppercase tracking-widest text-sm">
            Projects Delivered
          </span>
        </Reveal>
        <Reveal delay={0.4} width="100%" className="flex flex-col items-center md:items-start gap-2">
          <span className="text-5xl font-extrabold">5+</span>
          <span className="text-primary-100/70 font-medium uppercase tracking-widest text-sm">
            Years Experience
          </span>
        </Reveal>
        <Reveal delay={0.6} width="100%" className="flex flex-col items-center md:items-start gap-2">
          <span className="text-5xl font-extrabold">100%</span>
          <span className="text-primary-100/70 font-medium uppercase tracking-widest text-sm">
            Client Satisfaction
          </span>
        </Reveal>
      </div>
    </section>
  );
}
