import { motion } from 'framer-motion'
import { Code2, Palette, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'Landing Page Kreatif',
    desc: 'Eksperimen UI modern dengan animasi halus dan warna kontras.',
    icon: Palette,
  },
  {
    title: 'Aplikasi To-do',
    desc: 'Membuat aplikasi tugas sederhana dengan penyimpanan lokal.',
    icon: Code2,
  },
  {
    title: 'Mini Game JS',
    desc: 'Game kecil berbasis JavaScript untuk belajar logika.',
    icon: Rocket,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-950 text-zinc-200 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Karya Pilihan
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                {p.icon && <p.icon size={20} />}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-5 h-40 rounded-lg bg-gradient-to-br from-pink-500/15 via-fuchsia-500/10 to-transparent border border-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
