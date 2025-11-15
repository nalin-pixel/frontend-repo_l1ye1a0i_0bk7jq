import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-[-10%] h-[60vh] bg-gradient-to-b from-pink-500/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
              Available for collaboration
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Abdullah Yusuf
              <span className="block text-zinc-400 text-xl md:text-2xl font-normal mt-3">(Yusuf)</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-zinc-300 leading-relaxed max-w-xl"
            >
              Saya pelajar kelas 10 jurusan Rekayasa Perangkat Lunak. Lulus SD Almadinah, SMPI Karangploso, dan SMK NMC. Suka membangun proyek kreatif dan belajar teknologi modern.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-pink-500 px-5 py-3 text-white font-medium shadow hover:bg-pink-400 transition-colors">Lihat Karya</a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-zinc-200 font-medium hover:bg-white/15 transition-colors">Tentang Saya</a>
            </motion.div>
          </div>

          <div className="relative h-[380px] sm:h-[480px] md:h-[560px]">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/4lyTnLJyQd-43uh0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
