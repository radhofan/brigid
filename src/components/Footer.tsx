"use me"
"use client";

import Link from "next/link";
import { Compass, MapPin, Phone, Mail, ArrowRight, Share2, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060e1c] text-white pt-20 pb-12 border-t border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#154734] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#c5a059]">
                  YAYASAN ISLAM
                </span>
                <span className="text-2xl font-serif tracking-wider text-white font-bold">
                  CAKRAWALA
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
              Lembaga pendidikan Islam terpadu yang membimbing putra-putri Indonesia dari tingkat dasar hingga menengah atas dengan fondasi tauhid, adab Al-Qur'an, dan sains masa depan.
            </p>

            <div className="space-y-3 text-xs text-[#cbd5e1]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Jl. Cakrawala Pendidikan No. 88, Depok, Jawa Barat 16411</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>+62 812-0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>info@cakrawala.sch.id</span>
              </div>
            </div>
          </div>

          {/* Col 2: School Units */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-6">
              Unit Sekolah
            </h4>
            <ul className="space-y-4 text-sm font-serif">
              <li>
                <Link href="/sdit" className="text-[#cbd5e1] hover:text-[#c5a059] transition-colors flex items-center justify-between group">
                  <span>SDIT Cakrawala</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <span className="text-[11px] text-[#94a3b8] font-sans block">Pendidikan Dasar Terpadu</span>
              </li>
              <li>
                <Link href="/smpit" className="text-[#cbd5e1] hover:text-[#c5a059] transition-colors flex items-center justify-between group">
                  <span>SMP IT Cakrawala</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <span className="text-[11px] text-[#94a3b8] font-sans block">Pendidikan Menengah Pertama</span>
              </li>
              <li>
                <Link href="/smait" className="text-[#cbd5e1] hover:text-[#c5a059] transition-colors flex items-center justify-between group">
                  <span>SMA IT Cakrawala</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <span className="text-[11px] text-[#94a3b8] font-sans block">Pendidikan Menengah Atas</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-6">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-[#cbd5e1]">
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Tentang Yayasan
                </Link>
              </li>
              <li>
                <Link href="#academics" className="hover:text-white transition-colors">
                  Kurikulum & Akademik
                </Link>
              </li>
              <li>
                <Link href="#student-life" className="hover:text-white transition-colors">
                  Kehidupan Siswa
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-white transition-colors">
                  Fasilitas Kampus
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-white transition-colors">
                  Info PPDB 2026/2027
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-white transition-colors">
                  Warta & Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media & Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-6">
              Media Sosial & Komunitas
            </h4>
            <p className="text-xs text-[#94a3b8] mb-4">
              Ikuti dokumentasi kegiatan siswa dan informasi terkini di kanal media resmi kami.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-[#0a192f] border border-white/10 text-white flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-[#0a192f] border border-white/10 text-white flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-[#0a192f] border border-white/10 text-white flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94a3b8]">
          <div>
            © 2026 Yayasan Islam Cakrawala. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan PPDB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
