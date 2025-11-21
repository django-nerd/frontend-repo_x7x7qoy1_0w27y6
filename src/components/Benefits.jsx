import { Headphones, Clock, CreditCard, Sparkles } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="relative w-full bg-[#0B0F19] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-8 h-20 bg-gradient-to-b from-[#00AFFF22] to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Keuntungan Tambahan</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Headphones, title: 'Support 24/7' },
            { icon: Clock, title: 'Booking cepat' },
            { icon: CreditCard, title: 'Pembayaran fleksibel' },
            { icon: Sparkles, title: 'Mobil nyaman & wangi' },
          ].map((b) => (
            <div key={b.title} className="relative rounded-2xl border border-[#00AFFF44] bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#0B0F19] p-3 text-[#51F2FF] ring-1 ring-[#00AFFF55] shadow-[0_0_18px_rgba(0,175,255,0.35)]">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-white">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* curved divider */}
      <svg className="pointer-events-none absolute inset-x-0 -bottom-[1px] w-full" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="#0B0F19" stroke="#009CFF22" />
      </svg>
    </section>
  );
}
