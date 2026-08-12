"use me"
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  Compass,
  Building,
  Award,
  Calendar,
} from "lucide-react";

interface NavbarProps {
  onOpenPpdbModal?: () => void;
}

export default function Navbar({ onOpenPpdbModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Desktop) */}
      <div className="bg-[#060e1c] text-[#94a3b8] text-xs py-2 px-6 border-b border-[#1e293b]/60 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              Jl. Cakrawala Pendidikan No. 88, Depok, Jawa Barat
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              +62 812-0000-0000
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              info@cakrawala.sch.id
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#cbd5e1]">
            <Link
              href="#admissions"
              className="hover:text-[#c5a059] transition-colors"
            >
              Jadwal Visit Kampus
            </Link>
            <span>•</span>
            <Link
              href="#news"
              className="hover:text-[#c5a059] transition-colors"
            >
              Warta Sekolah
            </Link>
            <span>•</span>
            <Link
              href="/ppdb"
              className="text-[#c5a059] font-medium hover:underline flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> Info Portal PPDB
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar (Z-Index 50 to sit strictly above mobile drawer) */}
      <nav
        className={`relative z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#060e1c]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#c5a059]/20"
            : "bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/70 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 z-50">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#154734] border border-[#c5a059]/40 flex items-center justify-center text-white shadow-md group-hover:border-[#c5a059] transition-colors">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#c5a059]">
                YAYASAN ISLAM
              </span>
              <span className="text-lg sm:text-2xl font-serif tracking-wider text-white font-bold group-hover:text-[#f8f6f0] transition-colors">
                CAKRAWALA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Unit Sekolah Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("schools")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#f1f5f9] hover:text-[#c5a059] py-2 transition-colors">
                Unit Sekolah
                <ChevronDown className="w-4 h-4 text-[#c5a059]" />
              </button>
              {activeDropdown === "schools" && (
                <div className="absolute top-full left-0 w-72 bg-[#060e1c] border border-[#c5a059]/30 rounded-lg shadow-2xl p-3 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/sdit"
                    className="p-3 rounded-md hover:bg-[#162a45] transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded bg-[#154734]/40 text-[#c5a059] group-hover:bg-[#154734]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#c5a059]">
                        SDIT Cakrawala
                      </div>
                      <div className="text-xs text-[#94a3b8]">
                        Menemukan rasa ingin tahu
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/smpit"
                    className="p-3 rounded-md hover:bg-[#162a45] transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded bg-[#154734]/40 text-[#c5a059] group-hover:bg-[#154734]">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#c5a059]">
                        SMP IT Cakrawala
                      </div>
                      <div className="text-xs text-[#94a3b8]">
                        Membangun karakter & kemandirian
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/smait"
                    className="p-3 rounded-md hover:bg-[#162a45] transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded bg-[#154734]/40 text-[#c5a059] group-hover:bg-[#154734]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#c5a059]">
                        SMA IT Cakrawala
                      </div>
                      <div className="text-xs text-[#94a3b8]">
                        Menyiapkan langkah masa depan
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#f1f5f9] hover:text-[#c5a059] py-2 transition-colors">
                Tentang Kami
                <ChevronDown className="w-4 h-4 text-[#c5a059]" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-60 bg-[#060e1c] border border-[#c5a059]/30 rounded-lg shadow-2xl p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/tentang"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Sejarah & Profil
                  </Link>
                  <Link
                    href="/tentang#visi-misi"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Visi & Misi
                  </Link>
                  <Link
                    href="/tentang#pimpinan"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Kepemimpinan Yayasan
                  </Link>
                  <Link
                    href="/tentang#pengajar"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Kader Pendidik
                  </Link>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("academics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#f1f5f9] hover:text-[#c5a059] py-2 transition-colors">
                Akademik
                <ChevronDown className="w-4 h-4 text-[#c5a059]" />
              </button>
              {activeDropdown === "academics" && (
                <div className="absolute top-full left-0 w-64 bg-[#060e1c] border border-[#c5a059]/30 rounded-lg shadow-2xl p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="#academics"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Kurikulum Terpadu Islam
                  </Link>
                  <Link
                    href="#academics"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Pendekatan Pembelajaran
                  </Link>
                  <Link
                    href="#academics"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Pengembangan Karakter
                  </Link>
                </div>
              )}
            </div>

            {/* Student Life */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("studentLife")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#f1f5f9] hover:text-[#c5a059] py-2 transition-colors">
                Kehidupan Siswa
                <ChevronDown className="w-4 h-4 text-[#c5a059]" />
              </button>
              {activeDropdown === "studentLife" && (
                <div className="absolute top-full left-0 w-64 bg-[#060e1c] border border-[#c5a059]/30 rounded-lg shadow-2xl p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="#student-life"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Ekstrakurikuler & Organisasi
                  </Link>
                  <Link
                    href="#achievements"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Prestasi Siswa
                  </Link>
                  <Link
                    href="#facilities"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Fasilitas Kampus
                  </Link>
                  <Link
                    href="#student-life"
                    className="px-3 py-2 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#162a45] rounded-md transition-colors"
                  >
                    Program Tahfiz Al-Qur'an
                  </Link>
                </div>
              )}
            </div>

            {/* News */}
            <Link
              href="#news"
              className="text-sm font-medium text-[#f1f5f9] hover:text-[#c5a059] py-2 transition-colors"
            >
              Berita
            </Link>

            {/* Admissions Link */}
            <Link
              href="#admissions"
              className="text-sm font-medium text-[#f1f5f9] hover:text-[#c5a059] py-2 transition-colors"
            >
              Penerimaan
            </Link>
          </div>

          {/* Action CTA & Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3 sm:gap-4 z-50">
            <button
              onClick={onOpenPpdbModal}
              className="hidden sm:inline-flex items-center gap-2 bg-[#154734] hover:bg-[#23694f] text-[#f8f6f0] px-4 sm:px-5 py-2.5 rounded border border-[#c5a059]/40 text-xs sm:text-sm font-bold tracking-wide uppercase transition-all shadow-lg hover:border-[#c5a059]"
            >
              <span>PPDB 2026/2027</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>

            {/* Mobile menu hamburger toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#c5a059] focus:outline-none transition-colors rounded-lg bg-white/5 border border-white/10 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#c5a059]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Drawer (Z-Index 40 behind Z-50 nav bar) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#060e1c] text-white overflow-y-auto px-6 pt-24 pb-12 animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {/* Units Banner */}
            <div className="border-b border-[#1e293b] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-3">
                Unit Pendidikan Cakrawala
              </span>
              <div className="grid gap-2">
                <Link
                  href="/sdit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0a192f] border border-[#1e293b] hover:border-[#c5a059] transition-colors"
                >
                  <div>
                    <div className="font-bold text-white text-sm">SDIT Cakrawala</div>
                    <div className="text-xs text-[#94a3b8]">Menemukan rasa ingin tahu</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#154734] text-[#c5a059]">SD</span>
                </Link>

                <Link
                  href="/smpit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0a192f] border border-[#1e293b] hover:border-[#c5a059] transition-colors"
                >
                  <div>
                    <div className="font-bold text-white text-sm">SMP IT Cakrawala</div>
                    <div className="text-xs text-[#94a3b8]">Membangun karakter & kemandirian</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#154734] text-[#c5a059]">SMP</span>
                </Link>

                <Link
                  href="/smait"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0a192f] border border-[#1e293b] hover:border-[#c5a059] transition-colors"
                >
                  <div>
                    <div className="font-bold text-white text-sm">SMA IT Cakrawala</div>
                    <div className="text-xs text-[#94a3b8]">Menyiapkan langkah masa depan</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#154734] text-[#c5a059]">SMA</span>
                </Link>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-col gap-3 text-base font-serif">
              <Link
                href="/tentang"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Tentang Yayasan</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <Link
                href="#academics"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Program Akademik & STEM</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <Link
                href="#student-life"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Kehidupan Siswa & Tahfiz</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <Link
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Fasilitas Kampus</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <Link
                href="#achievements"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Prestasi Siswa</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <Link
                href="#news"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Berita & Aktivitas</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <Link
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1e293b]/60 flex items-center justify-between text-[#cbd5e1] hover:text-[#c5a059]"
              >
                <span>Informasi PPDB 2026/2027</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>
            </div>

            {/* Direct Mobile PPDB Button */}
            <div className="mt-2 pt-4 border-t border-[#1e293b] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPpdbModal?.();
                }}
                className="w-full py-3.5 bg-[#154734] border border-[#c5a059] text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                <span>Pendaftaran Online PPDB</span>
              </button>
              <div className="text-center text-xs text-[#94a3b8]">
                Jl. Cakrawala Pendidikan No. 88, Depok • +62 812-0000-0000
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
