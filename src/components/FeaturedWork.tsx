export default function FeaturedWork() {
  const projects = [
    {
      title: "Fintech Analytics Engine",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyQMUNPU4YPX-0uc_Lq2yIo55Kdk8BKzNYkSl-gObodF01ZjY6HUbdlzVTXAZYv0k1zP-Q2OOVIDgh-SkAAoxu5e-JE9RW6bhBelUksu7hxSqgNwz6i1dFpm2zpMPN3Gxz_1vvqETqfYCO2xS1mxr73C44K1TBJwzTx9PVGGKYqRGIItjpvoSQeklvmG0vKjavsnAo-omqR4TGFimGOI03P9mUBkzy6eft6CqRfJrtHXaL1mBcWBUc9p6DZD7qWoUQ6wB2t-56YJY",
      tags: ["React", "Next.js"],
      result: "Reduced data latency by 40% and improved dashboard load times for 10k+ concurrent users."
    },
    {
        title: "Luxury E-commerce Stack",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJU15rtDxMLLck7QHqFPsGLzlNhCcwAbZ2E4Q5mDSWd3xLFeuAt8UMpw75cCUsdoHdj9br00e_8FxwiBkHOSqUMHzKdzO_kmztdbhdBSGPaXB4gSK16A0SBU1QQVdhK6ntc-WByGUTZhOQtjZZhupiALRzZ0xZBRsUqMlALYQsCqFGPQ1ZmFebBTOPPw8QKQK4rLGGSMheTiPu_lEo_oLBtc0M8cvqHP8CZI6Snguxtb6jxmpMHrtDQwvQiizs3SO6lmFeHdIg4Y",
        tags: ["Shopify", "Headless"],
        result: "Boosted conversion rates by 25% through a custom headless integration and optimized checkout."
    },
    {
        title: "Health-Tech Data Suite",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtESiaxoUYwNf318NrIj79krD-bbETHc9-hZF2gcQvJzB33vrvabprg0yatqJq0i4b3tTguuKpoPGeMkHlRZItUvKcmY-_CSqXKvYeOGEfpBOtMHgajKjMfNJQG_-4Trl8qeelKGnh8J9w9h3vXtHrpBGcic11lMeM0LgSNDo1Kr-qqQ5ynweX1XXSBlObaLzIYMg0WAgXXmgByhMwage4kvUMWdaagadXT8OoTJ2opRKJXIvxFsv3lnqtaWCFnTiuqeVoWQ2vmzQ",
        tags: ["D3.js", "Python"],
        result: "Streamlined patient intake processes for 15+ hospitals, achieving a 99.9% uptime record."
    },
    {
        title: "DeFi Protocol Interface",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0sB_BrGOXqhozJ_L4lDmgI03iUA3FxVJtKHK1qly0KFu7RxUZCBbpssTdjVn6KVy_AwzKyTAHgBlUGQeTRLY_yle3Arn2ttrZekH1bMUdW30PCGrkWJRpaYjfi1op28ZUFTbytkgfaLsxhJeeyMw94wmlJB64kCuPhT6K-QO-pNVoCabV5L4FKUCLuQmYr5l6PEghErXonn7wjnj-LXtjMAmJ_XWso5t5azKEJVVq_QUfagXEgICK5r_83siMWgWRZAPYA1HsgE0",
        tags: ["Web3", "Solidity"],
        result: "Processed $2M+ in transaction volume within the first month with zero critical security incidents."
    },
    {
        title: "Social Networking Platform",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcmWcyKJh36WfeHPe1A3wMZVVKaq0FIQRT_BqoKzGa8a-NSzF4CKlbOx4mwfBkStqrFTF2VvuVvbyF5GwuexOXewKuIX6nS0-HhpdZuVEffp_e2IeqJfqv00MT9Pb6XJfkI8NPkPB1AmL2DWic7-c_3R_EH_hk294mWg798pZWzrzmD_05dQJnQfC2vALc2iZ9DFhrTKCTjkrANcDuV1cMmuCnNQRVN1vc1HR_ofmfSSgEbn9Fuu2-khlCpL2JRpzRly3IYiqRty8",
        tags: ["React Native", "Firebase"],
        result: "Achieved 50k active downloads with a 4.8-star rating on both iOS and Android stores."
    },
    {
        title: "Enterprise Resource Planner",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL_1QOX4MGKEgyyBD-EzWcDJpAeujucFXgW4_UoBGt4miHzmcRMlR78N3VTuSUPtMmoTHiEkl5GA33bz1sk9ZzsRPnHMOPAa6LcVy4aewZ7XCrVz2YmfogyPgLBKIR8wZdhR6uGDmPbjxcFFd42O6WWHLEzYlo-UNgJGgK_6swdLWwBaJYWbMcKksXAGY5MT-etwz65BWTFvk7h3tprDhCnstkW7cha4kXSd0sriK05guMU-5Q0WcU0-ZWC3KQ5Vh3NTcPSNBJfZA",
        tags: ["Node.js", "AWS"],
        result: "Unified legacy data silos across 4 departments, saving 200+ manual work hours per month."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32" id="work">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">Featured Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg">
            A selection of high-performance digital solutions optimized for speed
            and user engagement.
          </p>
        </div>
        <a
          className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
          href="#"
        >
          View Archive <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.title}
                src={project.image}
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex gap-2">
                {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <span className="font-bold text-primary block mb-1 uppercase tracking-tighter text-xs">
                  Result:
                </span>
                {project.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
