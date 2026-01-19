import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32" id="contact">
      <Reveal width="100%">
        <div className="bg-primary rounded-3xl p-12 md:p-20 text-white flex flex-col items-center text-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
            Ready to build something extraordinary?
            </h2>
            <p className="text-xl text-primary-100/80 max-w-2xl font-light">
            I'm currently open to new opportunities and collaborations. Let's
            discuss how we can work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="bg-white text-primary px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 cursor-pointer">
                Start a Project <span className="material-symbols-outlined">send</span>
            </button>
            <button className="bg-primary border border-white/20 px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-all cursor-pointer">
                Schedule a Call
            </button>
            </div>
            <div className="flex gap-8 pt-10 border-t border-white/10 w-full justify-center">
            <a className="hover:text-gray-300 transition-colors" href="#">
                GitHub
            </a>
            <a className="hover:text-gray-300 transition-colors" href="#">
                LinkedIn
            </a>
            <a className="hover:text-gray-300 transition-colors" href="#">
                Twitter
            </a>
            <a className="hover:text-gray-300 transition-colors" href="#">
                Dribbble
            </a>
            </div>
        </div>
      </Reveal>
    </section>
  );
}
