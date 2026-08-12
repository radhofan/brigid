"use me"
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import SchoolsSection from "@/components/SchoolsSection";
import EducationalJourney from "@/components/EducationalJourney";
import CoreValues from "@/components/CoreValues";
import AcademicsSection from "@/components/AcademicsSection";
import StudentLifeSection from "@/components/StudentLifeSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AchievementsSection from "@/components/AchievementsSection";
import NewsSection from "@/components/NewsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import PpdbModal from "@/components/PpdbModal";

export default function Home() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);

  const handleOpenPpdbModal = () => setIsPpdbModalOpen(true);
  const handleClosePpdbModal = () => setIsPpdbModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf9f5] text-[#1e293b]">
      {/* Navigation */}
      <Navbar onOpenPpdbModal={handleOpenPpdbModal} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenPpdbModal={handleOpenPpdbModal} />
        <IntroductionSection />
        <SchoolsSection />
        <EducationalJourney />
        <CoreValues />
        <AcademicsSection />
        <StudentLifeSection />
        <FacilitiesSection />
        <AchievementsSection />
        <NewsSection />
        <AdmissionsSection onOpenPpdbModal={handleOpenPpdbModal} />
        <TestimonialsSection />
        <FinalCtaSection onOpenPpdbModal={handleOpenPpdbModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive PPDB Modal */}
      <PpdbModal isOpen={isPpdbModalOpen} onClose={handleClosePpdbModal} />
    </div>
  );
}
