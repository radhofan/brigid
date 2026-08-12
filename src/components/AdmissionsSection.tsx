"use me"
"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, CheckCircle2, ArrowRight, Phone, FileText, Download, ShieldCheck, UserCheck } from "lucide-react";

interface AdmissionsSectionProps {
  onOpenPpdbModal?: () => void;
}

const steps = [
  {
    step: "01",
    title: "Pendaftaran Online",
    desc: "Mengisi formulir pendaftaran akun PPDB online dan melengkapi berkas administrasi dasar.",
  },
  {
    step: "02",
    title: "Observasi & Asesmen",
    desc: "Observasi kesiapan belajar anak (SDIT) atau tes potensi akademik & baca Al-Qur'an (SMP/SMA).",
  },
  {
    step: "03",
    title: "Wawancara Orang Tua",
    desc: "Sesi dialog keselarasan visi pendidikan antara yayasan dan orang tua calon peserta didik.",
  },
  {
    step: "04",
    title: "Pengumuman & Daftar Ulang",
    desc: "Penetapan kelulusan serta penyelesaian daftar ulang administrasi masuk sekolah.",
  },
];

const timelineDates = [
  { wave: "Gelombang 1 (Early Bird)", period: "1 September - 15 November 2026", status: "Buka Segera" },
  { wave: "Gelombang 2 (Reguler)", period: "16 November 2026 - 31 Januari 2027", status: "Mendatang" },
  { wave: "Gelombang 3 (Sisa Kuota)", period: "01 Februari - 15 Maret 2027", status: "Kondisional" },
];

export default function AdmissionsSection({ onOpenPpdbModal }: AdmissionsSectionProps) {
  return (
    <section id="admissions" className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#154734]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Banner Badge */}
        <div className="bg-gradient-to-r from-[#154734] via-[#060e1c] to-[#0a192f] p-8 sm:p-12 rounded-3xl border border-[#c5a059]/40 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/40 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                Penerimaan Peserta Didik Baru (PPDB) 2026/2027
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
                Mulai Perjalanan Anda Bersama Cakrawala
              </h2>
              <p className="text-base sm:text-lg text-[#cbd5e1] font-light leading-relaxed max-w-2xl">
                Pendaftaran untuk jenjang SDIT, SMP IT, dan SMA IT Cakrawala Tahun Ajaran 2026/2027 resmi dibuka. Dapatkan kesempatan prioritas pada Gelombang 1.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={onOpenPpdbModal}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#154734] hover:bg-[#23694f] text-white border border-[#c5a059] px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl hover:scale-105"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-5 h-5 text-[#c5a059]" />
              </button>

              <a
                href="#ppdb-steps"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#060e1c] hover:bg-[#162a45] text-white border border-white/20 px-6 py-3.5 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-[#c5a059]" />
                <span>Pelajari Alur PPDB</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Steps Registration Process */}
        <div id="ppdb-steps" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
              Prosedur Sederhana & Transparan
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Empat Langkah Pendaftaran Online
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#060e1c] p-6 rounded-2xl border border-white/10 relative hover:border-[#c5a059] transition-all"
              >
                <span className="text-4xl font-serif font-bold text-[#c5a059]/40 block mb-4">
                  {s.step}
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline & Important Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Important Dates */}
          <div className="lg:col-span-7 bg-[#060e1c] p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-[#c5a059]" />
              <h3 className="font-serif text-2xl font-bold text-white">
                Jadwal Gelombang PPDB 2026/2027
              </h3>
            </div>

            <div className="space-y-4">
              {timelineDates.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0a192f] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="text-sm font-bold text-white">{t.wave}</div>
                    <div className="text-xs text-[#94a3b8]">{t.period}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#154734] text-[#c5a059] border border-[#c5a059]/30 w-fit">
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Help & Requirements */}
          <div className="lg:col-span-5 bg-[#154734]/30 p-8 rounded-2xl border border-[#c5a059]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
                <h3 className="font-serif text-xl font-bold text-white">
                  Konsultasi Pendaftaran
                </h3>
              </div>
              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-6">
                Tim Admisi Cakrawala siap mendampingi proses pendaftaran, konsultasi pemilihan jenjang, dan kunjungan fisik lokasi kampus.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs text-white">
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Hotline Admisi: +62 812-0000-0000 (WhatsApp)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white">
                  <UserCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>Layanan Informasi: Senin - Sabtu (08.00 - 16.00 WIB)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenPpdbModal}
              className="w-full py-3 bg-[#c5a059] hover:bg-[#b38e47] text-[#0a192f] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-lg"
            >
              Isi Form Konsultasi PPDB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
