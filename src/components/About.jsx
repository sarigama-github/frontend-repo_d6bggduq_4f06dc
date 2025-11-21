export default function About() {
  const infos = [
    { label: "Asal", value: "Indonesia" },
    { label: "Panggilan", value: "Wildan" },
    { label: "Kesukaan", value: "Teknologi, desain, dan belajar hal baru" },
    { label: "Moto", value: "Belajar setiap hari, berkembang setiap saat" },
  ];

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tentang Saya</h2>
      <p className="text-blue-200/90 leading-relaxed mb-8">
        Hai! Namaku Wildan Abiarsa. Sehari-hari, ya memang itulah namaku—jadi kalau kamu
        mendengar orang menyebut Wildan Abiarsa, kemungkinan besar mereka sedang memanggilku.
        Aku suka membangun hal-hal sederhana yang bermanfaat dan terus belajar hal baru.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {infos.map((item) => (
          <div key={item.label} className="p-4 rounded-xl bg-slate-800/50 border border-white/10 text-blue-100">
            <p className="text-sm text-blue-300/80">{item.label}</p>
            <p className="text-lg font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
