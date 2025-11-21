import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Portofolio Pribadi</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Halo, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Wildan Abiarsa</span>
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-blue-200/90 max-w-2xl mx-auto">
          Setiap hari, semua orang memanggilku <span className="font-semibold text-blue-200">Wildan Abiarsa</span> —
          karena itu memang namaku. Ini adalah ruang kecil di internet untuk berbagi tentang diriku, minat, dan karya.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#about" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition">Kenal aku lebih dekat</a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">Kontak</a>
        </div>
      </div>
    </section>
  );
}
