"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { CourseCard } from "./components/CourseCard";
import { WelcomeDialog } from "./components/WelcomeDialog";

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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0a192f] to-[#112240]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Computer vision & AI",
                  description:
                    "Learn the fundamentals of robotics and programming",
                  image: "/images/computervision.jpg",
                },
                {
                  title: "Computer vision & AI",
                  description:
                    "Explore artificial intelligence in a fun, interactive way",
                  image: "/images/ai_for_kids.jpg",
                },
                {
                  title: "Computer vision & AI",
                  description:
                    "Take your skills to the next level with advanced projects",
                  image: "/images/advanced_robotics.jpg",
                },
              ].map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WelcomeDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
}
