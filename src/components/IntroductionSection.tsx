"use me"
"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section className="py-24 bg-[#fbf9f5] relative overflow-hidden border-b border-[#e2e8f0]">
      {/* Subtle Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#154734]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Large Typography & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#154734] mb-4">
              <span className="w-8 h-[2px] bg-[#c5a059]" />
              Tentang Yayasan Islam Cakrawala
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0a192f] leading-[1.15] mb-8">
              Tempat Tumbuhnya{" "}
              <span className="italic font-normal text-[#154734] block sm:inline">
                Generasi Cakrawala
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#334155] font-light leading-relaxed">
              <p className="text-xl sm:text-2xl font-serif text-[#0a192f] leading-snug border-l-4 border-[#c5a059] pl-6 italic">
                "Pendidikan bukan sekadar transfer pengetahuan, melainkan proses
                menyiapkan jiwa manusia agar mengenal Penciptanya, menguasai
                ilmunya, dan memberi manfaat bagi kehidupannya."
              </p>

              <p>
                Didirikan dengan komitmen mendalam terhadap kualitas pendidikan
                anak bangsa, <strong>Yayasan Islam Cakrawala</strong> menghadirkan
                ekosistem pembinaan utuh dari jenjang Sekolah Dasar (SDIT),
                Sekolah Menengah Pertama (SMP IT), hingga Sekolah Menengah Atas
                (SMA IT).
              </p>

              <p>
                Kami menyelaraskan kurikulum sains bertaraf nasional dengan adab
                Al-Qur'an, wawasan teknologi modern, serta keterampilan adab &
                kepemimpinan. Hasilnya adalah lulusan yang percaya diri,
                berwawasan terbuka, dan berlandaskan akidah yang kokoh.
              </p>
            </div>

            {/* Key Pillars Checklist */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded bg-[#f4f0ea] border border-[#c5a059]/20">
                <CheckCircle2 className="w-5 h-5 text-[#154734] shrink-0" />
                <span className="text-sm font-medium text-[#0a192f]">
                  Kurikulum Sains & Adab Terpadu
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded bg-[#f4f0ea] border border-[#c5a059]/20">
                <CheckCircle2 className="w-5 h-5 text-[#154734] shrink-0" />
                <span className="text-sm font-medium text-[#0a192f]">
                  Pembinaan Tahfiz & Bahasa Arab-Inggris
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded bg-[#f4f0ea] border border-[#c5a059]/20">
                <CheckCircle2 className="w-5 h-5 text-[#154734] shrink-0" />
                <span className="text-sm font-medium text-[#0a192f]">
                  Fasilitas Laboratorium STEM & Digital
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded bg-[#f4f0ea] border border-[#c5a059]/20">
                <CheckCircle2 className="w-5 h-5 text-[#154734] shrink-0" />
                <span className="text-sm font-medium text-[#0a192f]">
                  Pengembangan Kepemimpinan & Robotika
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-3 text-[#0a192f] font-bold text-sm tracking-wide uppercase hover:text-[#154734] group"
              >
                <span>Pelajari Selengkapnya Visi & Sejarah Cakrawala</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Editorial Photography Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-[#0a192f]">
              <img
                src="/images/hero.jpg"
                alt="Kampus Yayasan Islam Cakrawala"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg bg-[#060e1c]/90 backdrop-blur-md border border-[#c5a059]/30 text-white">
                <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold mb-1">
                  Kampus Terpadu Depok
                </div>
                <div className="text-sm font-serif font-semibold text-[#f8f6f0]">
                  Lingkungan asri dan aman untuk tumbuh kembang optimal putra-putri Anda.
                </div>
              </div>
            </div>

            {/* Decorative Floating Quote Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#154734] text-white p-6 rounded-xl shadow-xl max-w-xs hidden sm:block border border-[#c5a059]/40">
              <div className="flex items-center gap-3 mb-2">
                <Quote className="w-6 h-6 text-[#c5a059]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                  Prinsip Pendidikan
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#f4f0ea]">
                "Berilmu tinggi, beradab mulia, dan siap memimpin perubahan."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
