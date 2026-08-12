"use me"
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PpdbModal from "@/components/PpdbModal";

export default function SmpitPage() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf9f5]">
      <Navbar onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />

      <main className="flex-grow pt-28">
        <section className="bg-[#060e1c] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#c5a059] block mb-3">
              Unit Sekolah Menengah Pertama Islam Terpadu
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4">
              SMP IT Cakrawala
            </h1>
            <p className="text-xl font-serif italic text-[#c5a059] max-w-2xl mb-8">
              "Membangun karakter dan kemandirian."
            </p>
            <p className="text-base text-[#cbd5e1] font-light max-w-3xl leading-relaxed">
              Fase krusial pembentukan kepribadian remaja. SMP IT Cakrawala memadukan penalaran berpikir kritis, penguasaan coding & robotika dasar, pendalaman hafalan Qur'an (Target 5-10 Juz), serta kepemimpinan siswa.
            </p>

            <div className="mt-8">
              <button
                onClick={() => setIsPpdbModalOpen(true)}
                className="bg-[#154734] hover:bg-[#23694f] text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider border border-[#c5a059]"
              >
                Daftar SMP IT (PPDB 2026/2027)
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#0a192f] mb-8">
            Keunggulan Pembinaan SMP IT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#154734] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Coding & Robotics Lab
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Siswa diajarkan logika pemrograman, algoritma dasar, dan perakitan sensor elektronik untuk mengasah logika pemecahan masalah.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#154734] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Tahfiz Target 5 - 10 Juz
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Bimbingan mutqin hafalan Al-Qur'an secara terstruktur tanpa mengabaikan fokus akademik nasional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded bg-[#154734] text-[#c5a059] flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">
                Kepemimpinan & Survival Camp
              </h3>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Pengembangan mental mandiri, tanggung jawab pribadi, dan empati sosial melalui organisasi OSIS & Pramuka.
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
