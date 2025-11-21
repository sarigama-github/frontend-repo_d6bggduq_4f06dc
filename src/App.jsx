import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Wildan Abiarsa</a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-blue-200">
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#projects" className="hover:text-white transition">Karya</a>
            <a href="#contact" className="hover:text-white transition">Kontak</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-blue-300/70 text-sm">
          © {new Date().getFullYear()} Wildan Abiarsa. Dibuat dengan cinta dan sedikit kopi.
        </div>
      </footer>
    </div>
  );
}

export default App;