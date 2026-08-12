"use me"
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const values = [
  {
    num: "01",
    title: "Iman",
    arabic: "الإيمان",
    subtitle: "Landasan Akidah & Adab",
    description:
      "Menjadikan tauhid dan kecintaan kepada Allah SWT serta Rasul-Nya sebagai kompas moral utama dalam berpikir, bersikap, dan berkarya.",
  },
  {
    num: "02",
    title: "Integritas",
    arabic: "الأمانة",
    subtitle: "Kejujuran & Tanggung Jawab",
    description:
      "Mendidik pribadi yang jujur dalam ilmu, teguh memegang janji, dan bertindak dengan standar moral yang konsisten baik di depan umum maupun saat sendiri.",
  },
  {
    num: "03",
    title: "Keunggulan",
    arabic: "الإحسان",
    subtitle: "Ikhtiar & Standar Tertinggi",
    description:
      "Mendorong setiap peserta didik untuk memberikan hasil terbaik (Ihsan) dalam akademik, riset sains, olahraga, dan karya nyata.",
  },
  {
    num: "04",
    title: "Kepedulian",
    arabic: "الخدمة",
    subtitle: "Empati & Kemanfaatan Umat",
    description:
      "Menumbuhkan jiwa empati sosial yang peka terhadap kondisi sekitar, rendah hati, dan berorientasi memberikan kontribusi konkret bagi masyarakat.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-[#060e1c] text-white relative overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none">
        NILAI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            Prinsip Utama Pembentukan Karakter
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Empat Nilai Utama Generasi Cakrawala
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#cbd5e1] font-light leading-relaxed">
            Empat pilar yang menjadi jiwa dalam seluruh aktivitas pembelajaran,
            interaksi guru-murid, dan budaya institusi di Yayasan Islam Cakrawala.
          </p>
        </div>

        {/* Editorial Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((v, index) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative p-8 sm:p-10 rounded-2xl bg-[#0a192f] border border-[#c5a059]/20 hover:border-[#c5a059] transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-950/40"
            >
              {/* Top Header Row with Oversized Number & Arabic calligraphy accent */}
              <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-white/10">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors">
                  {v.num}
                </span>
                <span className="text-xl sm:text-2xl font-serif text-[#c5a059] opacity-80">
                  {v.arabic}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#154734] bg-[#154734]/20 border border-[#154734] px-2.5 py-1 rounded text-white font-semibold inline-block mb-3">
                  {v.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#f8f6f0] transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
