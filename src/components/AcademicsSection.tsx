"use me"
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Globe, Brain, Sparkles, Award, Compass, CheckCircle2 } from "lucide-react";

const academicPillars = [
  {
    id: "islamic",
    icon: BookOpen,
    title: "Kurikulum Islam Terpadu",
    short: "Diniyah & Qur'an",
    description:
      "Pengintegrasian pemahaman adab, tafsir Al-Qur'an, dan sirah nabawiyah ke dalam mata pelajaran umum. Setiap ilmu diajarkan dengan perspektif keimanan.",
    features: [
      "Tahfiz Al-Qur'an dengan bimbingan Asatiz berpengalaman",
      "Kajian Hadits & Fikih Ibadah Praktis",
      "Pembiasaan Adab Islami dalam kehidupan sekolah",
    ],
  },
  {
    id: "stem",
    icon: Cpu,
    title: "Sains & Teknologi Modern",
    iconName: "Cpu",
    short: "STEM & Digital",
    description:
      "Pembelajaran berbasis laboratorium praktis, coding & pemrograman, sains eksperimental, dan dasar robotika untuk menjawab tantangan era digital.",
    features: [
      "Laboratorium Komputer & Studio Digital",
      "Klub Robotika & Kompetisi STEM",
      "Proyek Rekayasa Sains Sederhana",
    ],
  },
  {
    id: "language",
    icon: Globe,
    title: "Penguasaan Bahasa Internasional",
    short: "Bilingual (AR-EN)",
    description:
      "Pengembangan kemampuan berbahasa Arab dan Inggris secara aktif melalui program immersion, public speaking, dan percakapan harian.",
    features: [
      "Arab & English Language Immersion Days",
      "Klub Debat & Public Speaking International",
      "Bimbingan Sertifikasi TOEFL & IELTS (SMA)",
    ],
  },
  {
    id: "critical",
    icon: Brain,
    title: "Berpikir Kritis & Riset Mandiri",
    short: "Critical Thinking",
    description:
      "Peserta didik dilatih untuk mengajukan pertanyaan mendalam, menganalisis data, dan menyusun sintesis pemikiran dalam bentuk karya tulis ilmiah.",
    features: [
      "Karya Tulis Ilmiah Siswa (SMA)",
      "Metode Pembelajaran Inquiry & Discussion",
      "Studi Kasus Solusi Masalah Lingkungan",
    ],
  },
];

export default function AcademicsSection() {
  const [activePillar, setActivePillar] = useState(academicPillars[0]);

  return (
    <section id="academics" className="py-24 bg-[#fbf9f5] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#154734] mb-3">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            Metodologi Pembelajaran
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0a192f] leading-tight">
            Belajar untuk Memahami,{" "}
            <span className="italic font-normal text-[#154734]">
              Bukan Sekadar Menghafal.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            Di Cakrawala, kami percaya bahwa pengetahuan yang mendalam lahir dari
            rasa ingin tahu yang dirawat, logika yang dilatih, dan niat yang
            dilandasi ibadah.
          </p>
        </div>

        {/* Editorial Layout: Interactive Tabs Left + Detailed View Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Pillar Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {academicPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`p-6 rounded-xl text-left transition-all duration-300 border flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#0a192f] text-white border-[#c5a059] shadow-xl translate-x-2"
                      : "bg-white text-[#0a192f] border-[#e2e8f0] hover:bg-[#f4f0ea]"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isSelected
                        ? "bg-[#154734] text-[#c5a059]"
                        : "bg-[#f4f0ea] text-[#154734]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider opacity-75 block">
                      {pillar.short}
                    </span>
                    <h3 className="font-serif text-lg font-bold mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#060e1c] text-white rounded-2xl p-8 sm:p-12 border border-[#c5a059]/30 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#154734]/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold block mb-2">
                Fokus Akademik Unik
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-6">
                {activePillar.title}
              </h3>

              <p className="text-base text-[#cbd5e1] font-light leading-relaxed mb-8">
                {activePillar.description}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <span className="text-xs uppercase font-bold tracking-wider text-[#c5a059] block mb-2">
                  Elemen Program Pembelajaran:
                </span>
                {activePillar.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#f8f6f0]">
                    <CheckCircle2 className="w-5 h-5 text-[#154734] shrink-0 fill-[#c5a059]/20" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Graphic Photography Preview */}
              <div className="mt-8 rounded-lg overflow-hidden border border-white/10 h-48 relative">
                <img
                  src="/images/smpit.jpg"
                  alt={activePillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
