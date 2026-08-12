"use me"
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PpdbModal from "@/components/PpdbModal";

export default function SmaitPage() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf9f5]">
      <Navbar onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />

      <main className="flex-grow pt-28">
        <section className="bg-[#154734] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#c5a059] block mb-3">
              Unit Sekolah Menengah Atas Islam Terpadu
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4">
              SMA IT Cakrawala
            </h1>
            <p className="text-xl font-serif italic text-[#c5a059] max-w-2xl mb-8">
              "Menyiapkan langkah menuju masa depan."
            </p>
            <p className="text-base text-[#cbd5e1] font-light max-w-3xl leading-relaxed">
              Persiapan puncak menuju Perguruan Tinggi Negeri (PTN) favorit dan kampus internasional. SMA IT Cakrawala mengintegrasikan riset ilmiah STEM, karya tulis mandiri, bahasa internasional (Arab & Inggris), serta kematangan adab kepemimpinan.
            </p>

            <div className="mt-8">
              <button
                onClick={() => setIsPpdbModalOpen(true)}
                className="bg-[#0a192f] hover:bg-[#060e1c] text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider border border-[#c5a059]"
              >
                Daftar SMA IT (PPDB 2026/2027)
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#0a192f] mb-8">
            Program Strategis SMA IT Cakrawala
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#0a192f] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Program Intensif SNBT & PTN
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Bimbingan belajar khusus, try-out berkala, dan konsultasi portofolio kelulusan ke perguruan tinggi unggulan nasional & internasional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#0a192f] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Karya Tulis Ilmiah & Riset STEM
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Setiap siswa menyusun tugas akhir riset berbasis laboratorium yang diuji oleh panel praktisi dan akademisi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#0a192f] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Tahfiz Sanad & Bahasa Arab Active
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Program pemantapan hafalan Al-Qur'an dan sertifikasi kemampuan berbahasa Arab & Inggris untuk menunjang studi lanjut.
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
