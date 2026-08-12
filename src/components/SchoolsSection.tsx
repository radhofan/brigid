"use me"
"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Compass, Award, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const schoolUnits = [
  {
    id: "sdit",
    name: "SDIT Cakrawala",
    subtitle: "Pendidikan Dasar Terpadu",
    tagline: "Menemukan rasa ingin tahu.",
    description:
      "Fase fondasi emosional, kecerdasan numerik-literasi, dan kecintaan pada Al-Qur'an. Anak-anak diajak mengeksplorasi alam dan sains dengan rasa bahagia.",
    ageRange: "Usia 6 - 12 Tahun",
    focus: ["Penerapan Adab Sehari-hari", "Bilingual Literacy (ID-EN)", "Tahfiz Juz 30 & 29", "Inquiry-Based Science"],
    link: "/sdit",
    bgClass: "from-[#0a192f] to-[#162a45]",
    badgeColor: "bg-[#154734] text-white border-[#c5a059]/40",
    image: "/images/sdit.jpg",
  },
  {
    id: "smpit",
    name: "SMP IT Cakrawala",
    subtitle: "Pendidikan Menengah Pertama",
    tagline: "Membangun karakter dan kemandirian.",
    description:
      "Fase pembentukan kepribadian, logika berpikir kritis, kepemimpinan sebaya, dan penguasaan sains-teknologi dasar.",
    ageRange: "Usia 12 - 15 Tahun",
    focus: ["Logika & Coding Dasar", "Tahfiz Target 5-10 Juz", "Kepemimpinan Pramuka & OSIS", "Olimpiade Sains & Debat"],
    link: "/smpit",
    bgClass: "from-[#060e1c] to-[#0a192f]",
    badgeColor: "bg-[#c5a059] text-[#0a192f] font-bold border-white/20",
    image: "/images/smpit.jpg",
  },
  {
    id: "smait",
    name: "SMA IT Cakrawala",
    subtitle: "Pendidikan Menengah Atas",
    tagline: "Menyiapkan langkah menuju masa depan.",
    description:
      "Fase spesialisasi akademik, riset mandiri, kelanjutan studi ke PTN favorit / Universitas Luar Negeri, dan pemantapan adab kepemimpinan.",
    ageRange: "Usia 15 - 18 Tahun",
    focus: ["Persiapan SNBT & PTN/LN", "Riset STEM & Karya Tulis", "Tahfiz Sanad & Bahasa Arab", "Internship & Portfolio"],
    link: "/smait",
    bgClass: "from-[#154734] to-[#0a192f]",
    badgeColor: "bg-white text-[#0a192f] font-bold border-[#c5a059]",
    image: "/images/smait.jpg",
  },
];

export default function SchoolsSection() {
  return (
    <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#154734]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
              <Sparkles className="w-4 h-4 text-[#c5a059]" />
              Tiga Babak Perjalanan Pembelajaran
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Tiga Unit Sekolah, Satu Visi Besar
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
            Setiap jenjang sekolah di Yayasan Islam Cakrawala dirancang berkesinambungan
            untuk mengantarkan putra-putri Anda hingga puncak potensinya.
          </p>
        </div>

        {/* 3 School Cards Grid (Chapter Style Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schoolUnits.map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-[#060e1c] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:-translate-y-2"
            >
              {/* Top Image Preview & Chapter Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#060e1c]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold border shadow-md ${school.badgeColor}`}
                  >
                    Babak 0{index + 1} • {school.ageRange}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
                    {school.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1 group-hover:text-[#c5a059] transition-colors">
                    {school.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-serif italic text-[#c5a059] mb-3">
                    "{school.tagline}"
                  </div>

                  <p className="text-sm text-[#cbd5e1] font-light leading-relaxed mb-6">
                    {school.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] block mb-3">
                      Fokus Utama:
                    </span>
                    {school.focus.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#e2e8f0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#154734] shrink-0 fill-[#c5a059]/20" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Button CTA */}
                <Link
                  href={school.link}
                  className="mt-4 w-full inline-flex items-center justify-between bg-[#162a45] hover:bg-[#154734] text-white px-5 py-3.5 rounded border border-white/10 group-hover:border-[#c5a059] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <span>Jelajahi {school.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
