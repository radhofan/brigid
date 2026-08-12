"use me"
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers, ShieldCheck, Milestone, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Pondasi Adab & Literasi",
    school: "SDIT Cakrawala",
    years: "Kelas 1 - 6",
    title: "Eksplorasi & Karakter Awal",
    description:
      "Penanaman akidah yang bersih, kebiasaan sholat tepat waktu, kecintaan membaca Al-Qur'an, dan penemuan rasa ingin tahu ilmiah sejak dini.",
    outcomes: ["Tahfiz 2 Juz Mandiri", "Literasi Bahasa & Sains Dasar", "Karakter Adab & Kemandirian"],
  },
  {
    step: "02",
    phase: "Penguatan Logika & Identitas",
    school: "SMP IT Cakrawala",
    years: "Kelas 7 - 9",
    title: "Penalaran Kritis & Kemandirian",
    description:
      "Pengembangan kemampuan memecahkan masalah, kompetensi teknologi & coding, kepemimpinan siswa, dan penguatan bahasa Arab & Inggris.",
    outcomes: ["Tahfiz 5-10 Juz", "Proyek Coding & Robotics", "Kepemimpinan Organisasi Siswa"],
  },
  {
    step: "03",
    phase: "Spesialisasi & Kematangan",
    school: "SMA IT Cakrawala",
    years: "Kelas 10 - 12",
    title: "Masa Depan & Kepemimpinan Global",
    description:
      "Penajaman jurusan IPA/IPS terpadu, riset STEM ilmiah, persiapan kelulusan PTN/LN, serta pemantapan adab sebagai pemimpin berkarakter.",
    outcomes: ["Persiapan Kelulusan PTN/LN", "Karya Tulis Riset Mandiri", "Tahfiz Sanad & Bahasa Internasional"],
  },
];

export default function EducationalJourney() {
  return (
    <section id="journey" className="py-24 bg-[#fbf9f5] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#154734] mb-3">
            <Layers className="w-4 h-4 text-[#c5a059]" />
            Kontinuitas Ekosistem Cakrawala
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0a192f] leading-tight mb-4">
            Alur Pembinaan Berkelanjutan dari SD hingga SMA
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            Putra-putri Anda tidak berpindah sistem pendidikan. Di Cakrawala,
            perjalanan 12 tahun belajar dirancang dengan nilai, budaya, dan visi
            yang selaras dari masa kecil hingga dewasa.
          </p>
        </div>

        {/* Progression Horizontal (Desktop) / Vertical (Mobile) */}
        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#154734] via-[#c5a059] to-[#0a192f] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-xl border border-[#c5a059]/20 hover:border-[#c5a059] transition-all flex flex-col justify-between relative group"
              >
                {/* Step Marker Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-full bg-[#0a192f] text-[#c5a059] font-serif font-bold text-xl flex items-center justify-center border-2 border-[#c5a059]">
                    {item.step}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded bg-[#f4f0ea] text-[#154734]">
                    {item.years}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#154734] uppercase tracking-wider mb-1">
                    {item.school}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0a192f] mb-3 group-hover:text-[#154734] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Outcomes */}
                  <div className="space-y-2 pt-4 border-t border-[#f1f5f9]">
                    <span className="text-xs font-bold uppercase text-[#94a3b8] tracking-wider block mb-2">
                      Capaian Utama:
                    </span>
                    {item.outcomes.map((out, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1e293b]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#154734] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs text-[#94a3b8]">
                  <span>Fase {item.step} dari 03</span>
                  <span className="font-medium text-[#c5a059]">{item.phase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
