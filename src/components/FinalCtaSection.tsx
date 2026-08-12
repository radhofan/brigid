"use me"
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import Link from "next/link";

interface FinalCtaSectionProps {
  onOpenPpdbModal?: () => void;
}

export default function FinalCtaSection({ onOpenPpdbModal }: FinalCtaSectionProps) {
  return (
    <section className="relative py-32 bg-[#060e1c] text-white overflow-hidden">
      {/* Background Graphic Photography & Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/hero.jpg"
          alt="Kampus Cakrawala"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c] via-[#060e1c]/90 to-[#060e1c]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#154734] border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-6">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            Yayasan Islam Cakrawala Depok
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
            Temukan Potensi. Bangun Karakter.{" "}
            <span className="italic font-normal text-[#c5a059] block sm:inline">
              Tentukan Masa Depan.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#cbd5e1] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Bergabunglah bersama keluarga besar Yayasan Islam Cakrawala. Tempat di mana akidah, ilmu pengetahuan, dan kepemimpinan berpadu menciptakan generasi hebat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenPpdbModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#154734] hover:bg-[#23694f] text-white border border-[#c5a059] px-9 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-2xl hover:scale-105"
            >
              <span>Kenali Cakrawala & Daftar PPDB</span>
              <ArrowRight className="w-5 h-5 text-[#c5a059]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
