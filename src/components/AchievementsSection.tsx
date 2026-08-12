"use me"
"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Sparkles, Medal } from "lucide-react";

const achievements = [
  {
    title: "Juara 1 Olimpiade Sains Tingkat Kota",
    category: "Sains & Matematika",
    school: "SMA IT Cakrawala",
    year: "2025",
    description: "Meraih medali emas cabang Fisika Terapan & Kimia Eksperimental.",
  },
  {
    title: "Finalis Kompetisi Robotika Nasional",
    category: "Teknologi & STEM",
    school: "SMP IT Cakrawala",
    year: "2025",
    description: "Kategori Line Follower & Autonomous Obstacle Avoidance Robot.",
  },
  {
    title: "Juara Tahfiz Al-Qur'an Tingkat Provinsi",
    category: "Keislaman & Al-Qur'an",
    school: "SDIT Cakrawala",
    year: "2024",
    description: "Kategori Hafalan 5 Juz dengan Tajwid & Nagham Sanad.",
  },
  {
    title: "Delegasi Kompetisi Debat Bahasa Inggris",
    category: "Bahasa & Public Speaking",
    school: "SMA IT Cakrawala",
    year: "2025",
    description: "Terpilih sebagai Best Speaker dalam turnamen antarsekolah se-Jawa Barat.",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-[#060e1c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <Trophy className="w-4 h-4 text-[#c5a059]" />
            Rekam Prestasi Siswa
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Keunggulan yang Teruji & Terbukti
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1] font-light leading-relaxed">
            Ikhtiar sungguh-sungguh peserta didik dan bimbingan guru menghasilkan
            pencapaian membanggakan di tingkat kota, provinsi, hingga nasional.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0a192f] p-8 rounded-2xl border border-[#c5a059]/20 hover:border-[#c5a059] transition-all flex flex-col justify-between group hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-lg bg-[#154734] text-[#c5a059]">
                    <Medal className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-bold text-[#c5a059] uppercase tracking-wider bg-[#060e1c] px-3 py-1 rounded border border-white/10">
                    {item.year}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#154734] bg-[#154734]/30 text-[#cbd5e1] px-2.5 py-0.5 rounded uppercase tracking-wider block mb-2 w-fit">
                  {item.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#c5a059] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#94a3b8] flex items-center justify-between">
                <span>Unit:</span>
                <span className="font-semibold text-white">{item.school}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
