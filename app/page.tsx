"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";

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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#112240]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Robotics Basics",
                  description:
                    "Learn the fundamentals of robotics and programming",
                },
                {
                  title: "AI for Kids",
                  description:
                    "Explore artificial intelligence in a fun, interactive way",
                },
                {
                  title: "Advanced Robotics",
                  description:
                    "Take your skills to the next level with advanced projects",
                },
              ].map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col p-6 bg-[#1e3a5f] rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-[#8892b0]">{course.description}</p>
                  <Button className="mt-4 bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]">
                    Enroll Now
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AnimatePresence>
        {isDialogOpen && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="bg-[#0a192f] text-white border border-[#1e3a5f]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Welcome to Young Bot Academy
                  </DialogTitle>
                  <DialogDescription className="text-[#8892b0]">
                    Building Tomorrow’s innovators today
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button
                    onClick={() => setIsDialogOpen(false)}
                    className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
