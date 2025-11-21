import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  { name: 'Andi Pratama', role: 'Jakarta', rating: 5, text: 'Pelayanan cepat, mobil bersih dan nyaman. Prosesnya beneran gampang!' },
  { name: 'Siti Nurhaliza', role: 'Depok', rating: 5, text: 'Driver ramah dan on-time. Harga sesuai, tanpa biaya tersembunyi.' },
  { name: 'Rizky Hidayat', role: 'Bekasi', rating: 5, text: 'Booking malam pun dilayani. Recommended banget Hyke Car Rental!' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative w-full bg-[#0B0F19] py-20">
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">Testimoni</h2>
        <div className="relative overflow-hidden rounded-2xl border border-[#00AFFF44] bg-white/5 p-8 backdrop-blur-md shadow-[0_0_40px_rgba(0,175,255,0.12)]">
          <div className="mb-6 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-[#00AFFF]' : 'text-[#00AFFF]/80'}`} fill="#00AFFF" />
            ))}
            <span className="ml-2 text-sm text-blue-100">4.9</span>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={prev} className="rounded-lg border border-[#00AFFF55] px-3 py-1 text-[#CDEEFF] hover:bg-[#00AFFF1a]">Prev</button>
            <div className="max-w-xl text-center">
              <div className="mx-auto mb-4 h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#00AFFF]">
                <img src={`https://i.pravatar.cc/100?img=${index + 5}`} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <p className="mb-4 text-blue-100">“{t.text}”</p>
              <div className="text-sm text-blue-200">{t.name} • {t.role}</div>
            </div>
            <button onClick={next} className="rounded-lg border border-[#00AFFF55] px-3 py-1 text-[#CDEEFF] hover:bg-[#00AFFF1a]">Next</button>
          </div>

          {/* neon separators */}
          <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00AFFF66] to-transparent" />
        </div>
      </div>
    </section>
  );
}
