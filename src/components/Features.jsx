import { ShieldCheck, Car, Wallet, LocateFixed } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Wallet, title: 'Harga Transparan', desc: 'Semua biaya jelas tanpa biaya tersembunyi.' },
  { icon: ShieldCheck, title: 'Tanpa DP', desc: 'Pesan sekarang, bayar saat serah terima.' },
  { icon: Car, title: 'Driver Profesional', desc: 'Sopir berpengalaman, ramah, dan tepat waktu.' },
  { icon: LocateFixed, title: 'Bisa Antar–Jemput', desc: 'Layanan door-to-door area Jabodetabek.' },
];

export default function Features() {
  return (
    <section className="relative w-full bg-[#0B0F19] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(0,175,255,0.08),transparent),radial-gradient(50%_50%_at_80%_0%,rgba(81,242,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Keunggulan Kami</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="relative rounded-2xl border border-[#00AFFF44] bg-white/5 p-6 backdrop-blur-md shadow-[0_0_30px_rgba(0,175,255,0.12)]"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(0,175,255,0.15), 0 0 32px rgba(0,156,255,0.12)' }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#0B0F19] p-3 text-[#51F2FF] ring-1 ring-[#00AFFF55] shadow-[0_0_18px_rgba(0,175,255,0.35)]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-blue-100/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
