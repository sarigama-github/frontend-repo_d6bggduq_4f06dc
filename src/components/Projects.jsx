import { Github } from "lucide-react";

const projects = [
  {
    title: "Proyek Contoh 1",
    desc: "Eksperimen antarmuka dengan fokus pada kesederhanaan dan aksesibilitas.",
    link: "https://github.com/",
  },
  {
    title: "Proyek Contoh 2",
    desc: "Membuat komponen UI yang cepat dan modern menggunakan React + Tailwind.",
    link: "https://github.com/",
  },
  {
    title: "Proyek Contoh 3",
    desc: "API kecil untuk belajar struktur backend yang rapi dan terukur.",
    link: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Karya</h2>
        <a
          href="https://github.com/"
          className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition"
        >
          <Github className="w-5 h-5" />
          <span>Lihat GitHub</span>
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-400/30 hover:bg-slate-800/70 transition shadow-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200">{p.title}</h3>
            <p className="text-blue-200/90 text-sm">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
