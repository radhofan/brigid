"use me"
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle, ArrowRight, ShieldCheck, User, Phone, Mail, GraduationCap } from "lucide-react";

interface PpdbModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PpdbModal({ isOpen, onClose }: PpdbModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    targetSchool: "SDIT Cakrawala",
    entryYear: "2026/2027",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#060e1c] text-white max-w-xl w-full rounded-3xl border border-[#c5a059]/40 overflow-hidden shadow-2xl relative my-8"
        >
          {/* Close Trigger */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#154734] text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#154734] to-[#0a192f] p-8 border-b border-[#c5a059]/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/40 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Formulir PPDB Online 2026/2027
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Yayasan Islam Cakrawala
            </h3>
            <p className="text-xs text-[#cbd5e1] font-light mt-1">
              Silakan lengkapi data calon orang tua murid untuk mengunduh brosur & penjadwalan observasi.
            </p>
          </div>

          {/* Form / Success Screen */}
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#154734] border-2 border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Formulir Berhasil Dikirim!
                </h4>
                <p className="text-xs text-[#cbd5e1] leading-relaxed max-w-sm mx-auto mb-6">
                  Terima kasih, Bapak/Ibu <strong>{formData.parentName}</strong>. Tim Admisi Cakrawala akan menghubungi WhatsApp Anda (<strong>{formData.phone}</strong>) dalam 1x24 jam kerja.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#154734] text-[#f8f6f0] border border-[#c5a059] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:bg-[#23694f]"
                >
                  Tutup Jendela
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-1">
                    Nama Lengkap Orang Tua / Wali *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bapak Ahmad Dahlan"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a192f] border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-1">
                    Nama Calon Peserta Didik *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Rayhan"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a192f] border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-1">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a192f] border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-1">
                      Pilihan Unit Sekolah *
                    </label>
                    <select
                      value={formData.targetSchool}
                      onChange={(e) => setFormData({ ...formData, targetSchool: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a192f] border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="SDIT Cakrawala">SDIT Cakrawala</option>
                      <option value="SMP IT Cakrawala">SMP IT Cakrawala</option>
                      <option value="SMA IT Cakrawala">SMA IT Cakrawala</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-1">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a192f] border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#154734] hover:bg-[#23694f] text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-[#c5a059] shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <span>Kirim Pendaftaran & Jadwalkan Visit</span>
                    <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                  </button>
                </div>

                <div className="text-center text-[10px] text-[#94a3b8] mt-2">
                  Privasi data Anda terjamin aman sesuai standar perlindungan Yayasan Islam Cakrawala.
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
