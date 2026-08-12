"use me"
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ChevronRight, Compass, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenPpdbModal?: () => void;
}

export default function Hero({ onOpenPpdbModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060e1c] text-white pt-24 pb-16">
      {/* Background Photography Overlay & Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Main background image asset or fallback high res photographic background */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-10000 ease-out"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
            backgroundPosition: 'center 30%',
          }}
        />
        {/* Editorial overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c] via-[#060e1c]/80 to-[#060e1c]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-transparent to-[#0a192f]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#060e1c]/40 to-[#060e1c]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-20">
        <div className="max-w-3xl">
          {/* Institution Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#154734]/80 border border-[#c5a059]/40 text-[#c5a059] text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-xl"
          >
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Yayasan Islam Cakrawala • Depok, Jawa Barat</span>
          </motion.div>

          {/* Enormous Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Menumbuhkan Generasi{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4f0ea] to-[#c5a059]">
              Berilmu, Berkarakter,
            </span>
            <span className="italic font-normal text-[#c5a059]">dan Berdaya.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#cbd5e1] font-light leading-relaxed mb-10 max-w-2xl"
          >
            Ekosistem pendidikan Islam terpadu berkelanjutan dari jenjang{" "}
            <span className="text-white font-medium">SDIT</span>,{" "}
            <span className="text-white font-medium">SMP IT</span>, hingga{" "}
            <span className="text-white font-medium">SMA IT</span>. Menyatukan
            keunggulan sains, adab Qur'ani, kepemimpinan, dan wawasan global.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#journey"
              className="inline-flex items-center justify-center gap-3 bg-[#f8f6f0] hover:bg-white text-[#0a192f] px-8 py-4 rounded font-bold text-sm sm:text-base tracking-wide uppercase shadow-2xl transition-all hover:translate-y-[-2px] group"
            >
              <span>Jelajahi Cakrawala</span>
              <ChevronRight className="w-5 h-5 text-[#154734] group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenPpdbModal}
              className="inline-flex items-center justify-center gap-3 bg-[#154734] hover:bg-[#23694f] text-white border border-[#c5a059]/60 px-8 py-4 rounded font-bold text-sm sm:text-base tracking-wide uppercase transition-all shadow-xl hover:translate-y-[-2px] hover:border-[#c5a059]"
            >
              <Sparkles className="w-5 h-5 text-[#c5a059]" />
              <span>PPDB 2026/2027</span>
            </button>
          </motion.div>
        </div>

        {/* Quick Institutional Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="border-l-2 border-[#c5a059] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              3 Jenjang
            </div>
            <div className="text-xs sm:text-sm text-[#94a3b8]">
              SDIT • SMP IT • SMA IT
            </div>
          </div>
          <div className="border-l-2 border-[#154734] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              100%
            </div>
            <div className="text-xs sm:text-sm text-[#94a3b8]">
              Kurikulum Nasional & Diniyah
            </div>
          </div>
          <div className="border-l-2 border-[#c5a059] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              30+
            </div>
            <div className="text-xs sm:text-sm text-[#94a3b8]">
              Program Ekstrakurikuler & STEM
            </div>
          </div>
          <div className="border-l-2 border-[#154734] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Depok
            </div>
            <div className="text-xs sm:text-sm text-[#94a3b8]">
              Kampus Hijau & Modern
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[#94a3b8] text-xs tracking-widest uppercase animate-bounce">
        <span>Gulir Ke Bawah</span>
        <ArrowDown className="w-4 h-4 text-[#c5a059]" />
      </div>
    </section>
  );
}
