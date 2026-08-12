"use me"
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Sparkles, Eye, X, Maximize2, CheckCircle2 } from "lucide-react";

export interface Facility {
  id: string;
  name: string;
  category: "Akademik" | "Teknologi" | "Spiritual" | "Olahraga & Ruang Terbuka";
  description: string;
  details: string[];
  image: string;
  capacity: string;
}

const facilitiesData: Facility[] = [
  {
    id: "classroom",
    name: "Ruang Kelas Multimedia Modern",
    category: "Akademik",
    description:
      "Ruang belajar ergonomis ber-AC yang dilengkapi Smart Display interaktif, tata cahaya alami yang sehat, dan akses Wi-Fi terfilter.",
    details: [
      "Smart Interactive Whiteboard & Projector 4K",
      "Meja & Kursi Ergonomis Fleksibel untuk Kerja Kelompok",
      "Sistem Sirkulasi Udara Bersih & Pencahayaan Sehat",
    ],
    capacity: "Maksimal 28 Siswa / Kelas",
    image: "/images/sdit.jpg",
  },
  {
    id: "science-lab",
    name: "Laboratorium Sains Terpadu",
    category: "Akademik",
    description:
      "Fasilitas praktikum Fisika, Kimia, dan Biologi lengkap dengan peralatan pengamatan presisi tinggi dan standar keamanan laboratorium internasional.",
    details: [
      "Mikroskop Digital & Alat Ukur Elektronik",
      "Lemari Asam & Peralatan Keselamatan Kerja",
      "Stasiun Praktikum Mandiri Peserta Didik",
    ],
    capacity: "Kapasitas 40 Praktikan",
    image: "/images/smpit.jpg",
  },
  {
    id: "computer-lab",
    name: "Computer & Robotics Lab",
    category: "Teknologi",
    description:
      "Studio komputer generasi terbaru untuk pembelajaran coding, desain grafis, animasi, dan perakitan perangkat robotika.",
    details: [
      "Komputer Spesifikasi Tinggi High-Performance",
      "Perangkat Robotika Kits & Stasiun Microcontroller",
      "Jaringan Fiber Optic Dedicated Kecepatan Tinggi",
    ],
    capacity: "36 Unit Workstation",
    image: "/images/smpit.jpg",
  },
  {
    id: "library",
    name: "Perpustakaan & Media Center",
    category: "Akademik",
    description:
      "Pusat literasi ramah baca dengan koleksi ribuan judul buku cetak, e-book, jurnal sains, literatur Islam, dan pod diskusi privat.",
    details: [
      "Koleksi 15.000+ Judul Buku & Jurnal Ilmiah",
      "Akses E-Library Digital & Pod Diskusi Senyap",
      "Area Baca Lesehan Nyaman untuk Siswa SDIT",
    ],
    capacity: "Kapasitas 120 Pembaca",
    image: "/images/smait.jpg",
  },
  {
    id: "mosque",
    name: "Masjid Utama Kampus Cakrawala",
    category: "Spiritual",
    description:
      "Pusat kegiatan ibadah dan pembinaan adab berarsitektur modern minimalis, sejuk, dan dilengkapi kolam refleksi air yang tenang.",
    details: [
      "Kapasitas Sholat Jamaah Seluruh Siswa & Guru",
      "Area Karpet Tebal Hipoalergenik & Tempat Wudhu Asri",
      "Pusat Kajian Islam & Perpustakaan Kitab",
    ],
    capacity: "Kapasitas 1.500 Jamaah",
    image: "/images/hero.jpg",
  },
  {
    id: "sports-hall",
    name: "Gedung Serbaguna & Lapangan Olahraga",
    category: "Olahraga & Ruang Terbuka",
    description:
      "Gedung indoor dan outdoor untuk futsal, basket, bulutangkis, memanah, upacara, dan pementasan seni budaya.",
    details: [
      "Lapangan Basket & Futsal Standar Kompetisi",
      "Panggung Utama Auditoriom dengan Sound System Profesional",
      "Area Tribun Penonton Beratap",
    ],
    capacity: "Kapasitas 1.000 Penonton",
    image: "/images/hero.jpg",
  },
];

export default function FacilitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);

  const categories = ["Semua", "Akademik", "Teknologi", "Spiritual", "Olahraga & Ruang Terbuka"];

  const filteredFacilities =
    selectedCategory === "Semua"
      ? facilitiesData
      : facilitiesData.filter((f) => f.category === selectedCategory);

  return (
    <section id="facilities" className="py-24 bg-[#fbf9f5] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#154734] mb-3">
              <Building className="w-4 h-4 text-[#c5a059]" />
              Infrastruktur Pendidikan
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0a192f]">
              Fasilitas Kampus Standar Tinggi
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-[#475569] font-light">
            Setiap jengkal ruang dirancang untuk mendukung keamanan, kenyamanan,
            dan efektivitas proses belajar mengajar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e2e8f0] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#0a192f] text-white border border-[#c5a059] shadow-md"
                  : "bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f4f0ea]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#c5a059]/20 hover:border-[#c5a059] transition-all group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#0a192f]/90 text-[#c5a059] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {facility.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#154734] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed mb-4">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                  <span className="text-xs text-[#94a3b8] font-medium">
                    {facility.capacity}
                  </span>
                  <button
                    onClick={() => setActiveFacility(facility)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#154734] hover:text-[#c5a059] transition-colors"
                  >
                    <span>Detail</span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Facility Detail Modal */}
      <AnimatePresence>
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#060e1c] text-white max-w-2xl w-full rounded-2xl border border-[#c5a059]/40 overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:text-[#c5a059] z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-64">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">
                    {activeFacility.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {activeFacility.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm text-[#cbd5e1] font-light leading-relaxed mb-6">
                  {activeFacility.description}
                </p>

                <div className="space-y-3 mb-6 bg-[#0a192f] p-4 rounded-xl border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059] block mb-2">
                    Spesifikasi & Keunggulan Ruang:
                  </span>
                  {activeFacility.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#f8f6f0]">
                      <CheckCircle2 className="w-4 h-4 text-[#154734] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-[#94a3b8] pt-4 border-t border-white/10">
                  <span>Kapasitas: {activeFacility.capacity}</span>
                  <span className="text-[#c5a059] font-medium">Yayasan Islam Cakrawala</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
