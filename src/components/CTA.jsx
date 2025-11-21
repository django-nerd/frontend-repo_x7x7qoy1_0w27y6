export default function CTA() {
  return (
    <section id="booking" className="relative w-full bg-[#0B0F19] py-20">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to Go? <span className="bg-gradient-to-r from-[#51F2FF] via-[#00AFFF] to-[#009CFF] bg-clip-text text-transparent">Hyke Car Rental</span> Hadir 24 Jam untuk Anda.
        </h2>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Hyke%20Car%20Rental,%20saya%20ingin%20booking."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-[#00AFFF] px-8 py-3 text-lg font-semibold text-slate-900 shadow-[0_0_35px_#00AFFF66] transition hover:shadow-[0_0_55px_#00AFFF99]"
          style={{ boxShadow: '0 0 32px rgba(0,175,255,0.6)' }}
        >
          Booking WhatsApp Sekarang
        </a>
      </div>
      {/* thin grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,156,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(0,156,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
    </section>
  );
}
