"use me"
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PpdbModal from "@/components/PpdbModal";
import { Compass, ShieldCheck, HeartHandshake, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function TentangPage() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf9f5]">
      <Navbar onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />

      <main className="flex-grow pt-28">
        {/* Header Hero */}
        <section className="bg-[#0a192f] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#c5a059] block mb-3">
              Profil & Sejarah Institusi
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4">
              Yayasan Islam Cakrawala
            </h1>
            <p className="text-xl font-serif italic text-[#c5a059] max-w-2xl mb-8">
              "Menyiapkan generasi masa depan dengan kecerdasan akal dan kemuliaan adab."
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="visi-misi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-[#c5a059]/30">
              <span className="text-xs uppercase font-bold tracking-widest text-[#154734] block mb-2">
                Visi Yayasan
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0a192f] mb-6">
                Visi Utama 2030
              </h2>
              <p className="text-lg font-serif italic text-[#0a192f] leading-relaxed border-l-4 border-[#c5a059] pl-6">
                "Menjadi lembaga pendidikan Islam terpadu unggulan nasional yang melahirkan generasi berilmu tinggi, beradab mulia, menguasai teknologi, dan berkontribusi nyata bagi peradaban."
              </p>
            </div>

            <div className="bg-[#060e1c] text-white p-10 rounded-2xl shadow-xl border border-white/10">
              <span className="text-xs uppercase font-bold tracking-widest text-[#c5a059] block mb-2">
                Misi Pembinaan
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-6">
                Empat Misi Strategis
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>Menyelenggarakan pendidikan Islam terpadu yang menyeimbangkan kurikulum sains nasional dan pembinaan karakter Al-Qur'an.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>Mengembangkan fasilitas pembelajaran berbasis teknologi modern, laboratorium STEM, dan lingkungan kampus yang asri.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>Membina kader pendidik berdedikasi tinggi yang mengintegrasikan keilmuan dan keteladanan adab harian.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>Jalinan kemitraan erat dengan orang tua dan masyarakat untuk menjaga kesinambungan karakter anak.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PpdbModal isOpen={isPpdbModalOpen} onClose={() => setIsPpdbModalOpen(false)} />
    </div>
  );
}
