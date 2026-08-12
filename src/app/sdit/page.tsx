"use me"
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PpdbModal from "@/components/PpdbModal";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2, Sparkles, Compass } from "lucide-react";
import Link from "next/link";

export default function SditPage() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf9f5]">
      <Navbar onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />

      <main className="flex-grow pt-28">
        {/* Header Hero */}
        <section className="bg-[#0a192f] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#c5a059] block mb-3">
              Unit Sekolah Dasar Islam Terpadu
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4">
              SDIT Cakrawala
            </h1>
            <p className="text-xl font-serif italic text-[#c5a059] max-w-2xl mb-8">
              "Menemukan rasa ingin tahu."
            </p>
            <p className="text-base text-[#cbd5e1] font-light max-w-3xl leading-relaxed">
              SDIT Cakrawala meletakkan dasar akidah yang kokoh, pembiasaan adab Al-Qur'an, kelancaran literasi numerik-bahasa, dan kegembiraan mengeksplorasi ilmu pengetahuan alam sejak dini.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setIsPpdbModalOpen(true)}
                className="bg-[#154734] hover:bg-[#23694f] text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider border border-[#c5a059]"
              >
                Daftar SDIT (PPDB 2026/2027)
              </button>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#0a192f] mb-8">
            Program Unggulan SDIT Cakrawala
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#154734] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Tahfiz & Adab Harian
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Target hafalan Juz 30 & 29 dengan metode talaqqi yang menyenangkan, disertai pembiasaan adab makan, sholat, dan penghormatan pada guru & orang tua.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#154734] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Inquiry Science & Nature
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Anak-anak diajak mengamati alam sekitar, bercocok tanam sederhana, dan melakukan uji coba sains dasar untuk melatih logika berpikir ilmiah.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#154734] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Bilingual Foundation
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Pengenalan kosakata harian Bahasa Arab & Inggris secara alami melalui lagu edukatif, cerita bergambar, dan percakapan ringan di sekolah.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PpdbModal isOpen={isPpdbModalOpen} onClose={() => setIsPpdbModalOpen(false)} />
    </div>
  );
}
