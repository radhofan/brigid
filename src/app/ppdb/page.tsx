"use me"
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PpdbModal from "@/components/PpdbModal";
import AdmissionsSection from "@/components/AdmissionsSection";

export default function PpdbPage() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf9f5]">
      <Navbar onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />

      <main className="flex-grow pt-28">
        <AdmissionsSection onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />
      </main>

      <Footer />
      <PpdbModal isOpen={isPpdbModalOpen} onClose={() => setIsPpdbModalOpen(false)} />
    </div>
  );
}
