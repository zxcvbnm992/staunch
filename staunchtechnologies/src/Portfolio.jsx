import CoreBeliefs from "./components/CoreBeliefs";
import ServicesCarousel from "./components/ServicesCarousel";
import { Reveal, ScrollProgress, CursorGlow, CountUp } from "./components/effects";

export default function Portfolio() {
  const skills = [
    "Technical Support",
    "Infrastructure Management",
    "Service Desk Operations",
    "Google Workspace",
    "SaaS Support",
    "Microsoft 365",
    "Power Apps",
    "Power Automate",
    "SharePoint",
    "IT Support",
    "Cloud Administration",
    "Automation"
  ];

  const projects = [
    {
      title: "IT Service Desk Optimization",
      description:
        "Improved ticket resolution workflows and streamlined support operations using automation and reporting tools.",
    },
    {
      title: "Power Platform Automation",
      description:
        "Built automated workflows and approval systems with Power Automate and Power Apps for internal operations.",
    },
    {
      title: "SharePoint Process Management",
      description:
        "Designed SharePoint solutions for document management, request tracking, and collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ScrollProgress />
      <CursorGlow />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob [animation-delay:-6s]"></div>

      <div className="relative z-10 px-6 md:px-16 py-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-20">
          <a href="#" className="flex items-center gap-3" aria-label="Staunch Technologies home">
            <img
              src="/staunch-logo.svg"
              alt="Staunch Technologies logo"
              width="44"
              height="44"
              className="h-10 w-10 md:h-12 md:w-12 rounded-xl"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              Staunch Technologies<span className="text-cyan-400">.</span>
            </h1>
          </a>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#beliefs" className="hover:text-cyan-400 transition">Beliefs</a>
            <a href="#values" className="hover:text-cyan-400 transition">Values</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            <a
              href="https://www.linkedin.com/in/opeyemi-adejoro-e-158241b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center min-h-[75vh]">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm animate-fadeUp">
              Full Stack App Development | Website Development | Support
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fadeUp [animation-delay:.15s]">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-shimmer">
                Smart IT Solutions
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8 animate-fadeUp [animation-delay:.3s]">
              Experienced in infrastructure management, service desk operations,
              Microsoft 365 administration, and workflow automation using Power
              Platform technologies.
            </p>
          </div>

          {/* Right UI Card */}
          <div className="relative animate-float">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-black/40 p-5 rounded-2xl border border-cyan-500/20">
                  <p className="text-gray-400 text-sm mb-2">Current Focus</p>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Automation & IT Support
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-5 rounded-2xl">
                    <p className="text-4xl font-black text-cyan-400"><CountUp to={5} suffix="+" /></p>
                    <span className="text-gray-400 text-sm">
                      IT Solutions Delivered
                    </span>
                  </div>

                  <div className="bg-white/5 p-5 rounded-2xl">
                    <p className="text-4xl font-black text-cyan-400">24/7</p>
                    <span className="text-gray-400 text-sm">
                      Support Mindset
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-5 rounded-2xl border border-cyan-500/20">
                  <p className="text-sm text-gray-300 mb-2">Specialized In</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">Power Apps</span>
                    <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">SharePoint</span>
                    <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">Microsoft 365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <Reveal><section id="about" className="py-24">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold mb-8">
              About <span className="text-cyan-400">Us</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              We're a team of Full Stack Developers, Solution Engineers, and Technical Support Engineers who bridge
              development, systems design, and IT operations to deliver end-to-end technology solutions.
              We build scalable applications, design efficient business solutions, and support enterprise
              infrastructure, with a strong focus on automation, performance, and user experience. Our goal
              is to simplify complex systems, reduce manual processes, and create reliable, business-driven
              technology that works seamlessly across teams and platforms.
            </p>
          </div>
        </section></Reveal>

        {/* Services */}
        <Reveal>
          <section id="services" className="py-24">
            <h3 className="text-4xl font-bold mb-4">
              What We <span className="text-cyan-400">Do</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mb-12">
              Everything we offer, from first idea to day-to-day support.
            </p>

            <ServicesCarousel />
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal><section id="skills" className="py-24">
          <h3 className="text-4xl font-bold mb-12">
            Core <span className="text-cyan-400">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_24px_rgba(34,211,238,.35)] hover:scale-105 transition-all duration-300 p-5 rounded-2xl text-center"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </section></Reveal>

        {/* Projects */}
        <Reveal><section id="projects" className="py-24">
          <h3 className="text-4xl font-bold mb-12">
            Featured <span className="text-cyan-400">Projects</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 group rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <span className="text-cyan-400 text-2xl">⚡</span>
                </div>

                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section></Reveal>

        {/* Core Beliefs & Values */}
        <CoreBeliefs />

        {/* Contact */}
        <Reveal><section id="contact" className="py-24 text-center">
          <h3 className="text-5xl font-bold mb-6">
            Let's Build Something
            <span className="block text-cyan-400">Amazing</span>
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            Open to Technical support, infrastructure, automation, and Microsoft 365
            related opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:staunchtechnologies07@gmail.com"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-2xl font-semibold transition"
            >
              Contact Us
            </a>

            <a
              href="https://www.linkedin.com/in/opeyemi-adejoro-e-158241b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 rounded-2xl transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>
          </div>
        </section></Reveal>
      </div>
    </div>
  );
}