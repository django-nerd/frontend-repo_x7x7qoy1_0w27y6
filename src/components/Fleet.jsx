import { motion } from 'framer-motion';

const cars = [
  { name: 'Toyota Avanza', price: 'Rp 450.000 / hari', img: 'https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Raize', price: 'Rp 500.000 / hari', img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Innova', price: 'Rp 650.000 / hari', img: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Fortuner', price: 'Rp 1.100.000 / hari', img: 'https://images.unsplash.com/photo-1549923573-7d1c5ae72860?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Alphard', price: 'Rp 2.000.000 / hari', img: 'https://images.unsplash.com/photo-1549923570-46e9b6a6e47f?q=80&w=1200&auto=format&fit=crop' },
];

export default function Fleet() {
  return (
    <section id="armada" className="relative w-full bg-[#0B0F19] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_-10%,rgba(0,175,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">Armada Mobil</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#00AFFF44] bg-white/5 backdrop-blur-md"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(0,175,255,0.12), 0 0 40px rgba(0,156,255,0.12)' }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                {/* blue neon rim light under car */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[radial-gradient(50%_70%_at_50%_100%,rgba(0,175,255,0.4),transparent)] blur-lg" />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-white">{car.name}</h3>
                <p className="mb-4 text-[#00AFFF] font-medium">{car.price}</p>
                <button className="w-full rounded-xl border border-[#00AFFF] bg-[#00AFFF1a] px-4 py-2 text-sm font-semibold text-[#CDEEFF] transition hover:bg-[#00AFFF33] hover:shadow-[0_0_22px_rgba(0,175,255,0.45)]">
                  Sewa Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
