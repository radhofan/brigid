"use me"
"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy, BookOpen, Cpu, ShieldCheck, HeartHandshake, Palette, Users } from "lucide-react";

const activities = [
  {
    title: "Tahfiz & Halaqah Al-Qur'an",
    category: "Spiritual & Adab",
    description: "Pembimbingan hafalan Al-Qur'an intensif dengan tajwid sanad dan pemahaman makna.",
    image: "/images/hero.jpg",
    colSpan: "lg:col-span-8",
    height: "h-96",
    badge: "Keislaman",
  },
  {
    title: "Klub Robotika & Coding",
    category: "Sains & Teknologi",
    description: "Perakitan sensor, pemrograman mikro-kontroler, dan persiapan turnamen sains.",
    image: "/images/smpit.jpg",
    colSpan: "lg:col-span-4",
    height: "h-96",
    badge: "STEM",
  },
  {
    title: "Olahraga & Ketangkasan",
    category: "Pengembangan Fisik",
    description: "Futsal, Basket, Memanah, dan Berenang dalam fasilitator lapangan standar nasional.",
    image: "/images/sdit.jpg",
    colSpan: "lg:col-span-4",
    height: "h-80",
    badge: "Kebugaran",
  },
  {
    title: "Leadership Camp & OSIS",
    category: "Kepemimpinan Siswa",
    description: "Pelatihan kepemimpinan organisasi, survival camp, dan pengabdian masyarakat.",
    image: "/images/smait.jpg",
    colSpan: "lg:col-span-4",
    height: "h-80",
    badge: "Karakter",
  },
  {
    title: "Seni Kaligrafi & Jurnalistik",
    category: "Seni & Literasi",
    description: "Klub penulisan kreatif, majalah sekolah, seni khat kaligrafi, dan fotografi digital.",
    image: "/images/hero.jpg",
    colSpan: "lg:col-span-4",
    height: "h-80",
    badge: "Kreativitas",
  },
];

export default function StudentLifeSection() {
  return (
    <section id="student-life" className="py-24 bg-[#0a192f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
              <Sparkles className="w-4 h-4 text-[#c5a059]" />
              Dinamika Kehidupan Siswa
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Tumbuh Seimbang: Akal, Fisik, & Jiwa
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-[#cbd5e1] font-light">
            Ekosistem ekstrakurikuler dan kegiatan siswa dirancang agar setiap anak
            menemukan minat, bakat, dan semangat berkontribusi.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden group border border-white/10 hover:border-[#c5a059] transition-all duration-500 shadow-2xl ${item.colSpan} ${item.height}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#060e1c]/40 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#154734] border border-[#c5a059]/40 text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#cbd5e1] font-light max-w-xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
