"use client";

import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { WelcomeDialog } from "./components/WelcomeDialog";
import { Reviews } from "./components/Reviews";
import { PhotoGallery } from "./components/gallery";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <PhotoGallery />
        <Reviews />
      </main>
      <Footer />
      <WelcomeDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
