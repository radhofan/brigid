"use me"
"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, BookOpen } from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    id: "1",
    title: "Peserta Didik Cakrawala Raih Prestasi Olimpiade Sains",
    category: "Prestasi Akademik",
    date: "10 Agustus 2026",
    readTime: "4 Menit Baca",
    summary:
      "Tim sains SMA IT Cakrawala berhasil memboyong medali emas dalam Olimpiade Sains Tingkat Kota Depok cabang Fisika dan Kimia.",
    image: "/images/smait.jpg",
  },
  {
    id: "2",
    title: "Open House & Field Day Yayasan Cakrawala 2026",
    category: "Kegiatan Sekolah",
    date: "04 Agustus 2026",
    readTime: "3 Menit Baca",
    summary:
      "Menyambut calon orang tua murid untuk melihat langsung fasilitas kampus, berdialog dengan jajaran pendidik, dan menyaksikan pameran karya siswa.",
    image: "/images/hero.jpg",
  },
  {
    id: "3",
    title: "Program Leadership Camp & Kemandirian Siswa SMA",
    category: "Pengembangan Karakter",
    date: "28 Juli 2026",
    readTime: "5 Menit Baca",
    summary:
      "Kegiatan tahunan pembentukan karakter kepemimpinan, ketangkasan fisik, dan kerja sama tim bagi peserta didik kelas 10 SMA IT Cakrawala.",
    image: "/images/smpit.jpg",
  },
  {
    id: "4",
    title: "Semangat Berbagi dalam Program Cakrawala Peduli Sesama",
    category: "Bakti Masyarakat",
    date: "18 Juli 2026",
    readTime: "3 Menit Baca",
    summary:
      "Siswa SDIT, SMP IT, dan SMA IT Cakrawala mengumpulkan donasi paket sembako dan buku bacaan bagi lingkungan sekitar kampus.",
    image: "/images/sdit.jpg",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-[#fbf9f5] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#e2e8f0] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#154734] mb-3">
              <BookOpen className="w-4 h-4 text-[#c5a059]" />
              Warta & Aktivitas Sekolah
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0a192f]">
              Kabar Terbaru dari Kampus Cakrawala
            </h2>
          </div>
          <Link
            href="#news"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a192f] hover:text-[#154734] group"
          >
            <span>Lihat Seluruh Arsip Berita</span>
            <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#c5a059]/20 hover:border-[#c5a059] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded bg-[#0a192f]/90 text-[#c5a059] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#94a3b8] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0a192f] leading-snug mb-3 group-hover:text-[#154734] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#475569] font-light leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#154734] group-hover:text-[#c5a059] transition-colors">
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
