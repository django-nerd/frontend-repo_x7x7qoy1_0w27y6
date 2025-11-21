import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const particles = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
}));

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" style={{ backgroundColor: '#0B0F19' }}>
      {/* Flame-blue gradient streaks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,175,255,0.25),_transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(81,242,255,0.18),_transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,156,255,0.08)_0%,transparent_30%,transparent_70%,rgba(0,175,255,0.08)_100%)]" />
      </div>

      {/* Soft particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: 'linear-gradient(180deg, #51F2FF, #00AFFF)',
              filter: 'drop-shadow(0 0 6px rgba(0,175,255,0.7))',
              opacity: 0.8,
            }}
            animate={{ y: [0, -10, 0], x: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6 + p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 px-6 pt-24 lg:flex-row lg:gap-12 lg:pt-28">
        {/* Copy */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sewa Mobil Tanpa Ribet —
            <span className="block bg-gradient-to-r from-[#51F2FF] via-[#00AFFF] to-[#009CFF] bg-clip-text text-transparent"> Hyke Car Rental</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-base leading-relaxed text-blue-100 sm:text-lg"
          >
            Tanpa DP, bayar di tempat, layanan antar-jemput Jabodetabek.
          </motion.p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center rounded-xl bg-[#00AFFF] px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_0_25px_#00AFFF66] transition hover:shadow-[0_0_45px_#00AFFF99]"
              style={{ boxShadow: '0 0 28px rgba(0,175,255,0.55)' }}
            >
              Sewa Sekarang
            </a>
            <a
              href="#armada"
              className="inline-flex items-center justify-center rounded-xl border border-[#00AFFF] px-6 py-3 text-base font-semibold text-[#CDEEFF] backdrop-blur-sm transition hover:bg-[#00AFFF14]"
              style={{ boxShadow: '0 0 24px rgba(0,156,255,0.35) inset' }}
            >
              Lihat Armada
            </a>
          </div>
        </div>

        {/* 3D Car */}
        <div className="relative h-[380px] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/5 bg-black/20 shadow-[0_0_60px_rgba(0,175,255,0.15)] backdrop-blur-md sm:h-[460px] lg:h-[520px]">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* subtle bottom glow */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-20 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(0,175,255,0.45),transparent)] blur-2xl" />
        </div>
      </div>

      {/* motion streaks */}
      <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center gap-6">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="h-0.5 w-40 rounded-full bg-gradient-to-r from-transparent via-[#00AFFF] to-transparent opacity-70"
            animate={{ x: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </section>
  );
}
