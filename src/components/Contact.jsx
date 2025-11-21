export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Mari Terhubung</h2>
        <p className="text-blue-200/90 mb-6">Punya ide, saran, atau sekadar ingin menyapa? Kirim pesanmu.</p>
        <form className="grid gap-4">
          <input type="text" placeholder="Nama" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea placeholder="Pesan" rows="4" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <button type="button" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition">Kirim</button>
        </form>
      </div>
    </section>
  );
}
