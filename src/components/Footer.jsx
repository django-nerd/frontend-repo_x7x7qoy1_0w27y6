import { Phone, MapPin, Car, MessageCircle, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B0F19] py-14">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div>
            <div className="mb-3 text-lg font-semibold text-white">Kontak</div>
            <div className="flex items-center gap-2 text-blue-100"><Phone className="h-4 w-4 text-[#00AFFF]"/> 0812-3456-7890</div>
            <div className="flex items-center gap-2 text-blue-100"><MessageCircle className="h-4 w-4 text-[#00AFFF]"/> WhatsApp</div>
          </div>
          <div>
            <div className="mb-3 text-lg font-semibold text-white">Lokasi</div>
            <div className="flex items-start gap-2 text-blue-100"><MapPin className="mt-1 h-4 w-4 text-[#00AFFF]"/> Jakarta, Indonesia</div>
          </div>
          <div>
            <div className="mb-3 text-lg font-semibold text-white">Armada</div>
            <ul className="space-y-1 text-blue-100">
              <li>Toyota Avanza</li>
              <li>Raize</li>
              <li>Innova</li>
              <li>Fortuner</li>
              <li>Alphard</li>
            </ul>
          </div>
          <div>
            <a href="#booking" className="inline-flex items-center gap-2 rounded-xl border border-[#00AFFF] bg-[#00AFFF1a] px-4 py-2 text-[#CDEEFF] hover:bg-[#00AFFF33]"> <MessageCircle className="h-4 w-4"/> WhatsApp </a>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="text-[#00AFFF] hover:opacity-80"><Facebook className="h-5 w-5"/></a>
              <a href="#" className="text-[#00AFFF] hover:opacity-80"><Instagram className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#00AFFF44] to-transparent" />
        <div className="mt-4 text-center text-xs text-blue-300">© {new Date().getFullYear()} Hyke Car Rental. All rights reserved.</div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,156,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(0,156,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
    </footer>
  );
}
