import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { label: 'SD', value: 'Almadinah' },
    { label: 'SMP', value: 'SMPI Karangploso' },
    { label: 'SMK', value: 'NMC (kelas 10, RPL)' },
  ]

  return (
    <section id="about" className="relative bg-zinc-950 text-zinc-200 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Tentang Yusuf
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-zinc-400"
        >
          Saya Abdullah Yusuf, biasa dipanggil Yusuf. Saya siswa kelas 10 jurusan RPL yang suka belajar hal baru, membuat UI modern, dan mengeksplorasi teknologi web.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-sm text-zinc-400">{it.label}</p>
              <p className="text-lg font-semibold text-white">{it.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
