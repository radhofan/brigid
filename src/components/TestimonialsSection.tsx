"use me"
"use client";

import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "Perkembangan adab dan keberanian sholat berjamaah di rumah luar biasa sejak anak saya masuk SDIT Cakrawala. Gurunya sangat penuh kasih sayang.",
    author: "Ibu Dr. Ratna Hapsari, M.Si.",
    role: "Orang Tua Siswa SDIT Cakrawala",
    unit: "SDIT",
  },
  {
    quote:
      "Di SMP IT Cakrawala, anak saya tidak hanya diajarkan hafalan Al-Qur'an, tapi juga diajak belajar logika coding dan bahasa Inggris secara intensif.",
    author: "Bapak Ir. Hendra Kurniawan",
    role: "Orang Tua Siswa SMP IT Cakrawala",
    unit: "SMP IT",
  },
  {
    quote:
      "Suasana belajar SMA IT Cakrawala sangat kondusif untuk persiapan masuk PTN. Ustadz dan gurunya membimbing dengan sabar hingga saya lulus SNBT.",
    author: "Farhan Ammar, S.Kom.",
    role: "Alumni SMA IT Cakrawala (Mahasiswa UI)",
    unit: "SMA IT / Alumni",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#fbf9f5] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#154734] mb-3">
            <Quote className="w-4 h-4 text-[#c5a059]" />
            Suara Orang Tua & Alumni
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0a192f]">
            Kepercayaan Orang Tua, Keindahan Hasil Pembinaan
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-[#c5a059]/20 hover:border-[#c5a059] flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center gap-1 text-[#c5a059] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#334155] font-serif italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#f1f5f9]">
                <div className="font-bold text-[#0a192f] text-sm">{t.author}</div>
                <div className="text-xs text-[#94a3b8] mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
