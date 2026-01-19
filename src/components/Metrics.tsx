export default function Metrics() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-5xl font-extrabold">30+</span>
          <span className="text-primary-100/70 font-medium uppercase tracking-widest text-sm">
            Projects Delivered
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-5xl font-extrabold">5+</span>
          <span className="text-primary-100/70 font-medium uppercase tracking-widest text-sm">
            Years Experience
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-5xl font-extrabold">100%</span>
          <span className="text-primary-100/70 font-medium uppercase tracking-widest text-sm">
            Client Satisfaction
          </span>
        </div>
      </div>
    </section>
  );
}
