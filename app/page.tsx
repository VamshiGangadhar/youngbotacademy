"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { WelcomeDialog } from "./components/WelcomeDialog";
import internships from "./static/internships";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import socialLinks from "./static/socialLinks";

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
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg">
                    <CardHeader>
                      <div className="relative w-full h-60 mb-4">
                        <Image
                          src={internship.image}
                          alt={`${internship.title} internship`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#64ffda]">
                        {internship.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-white/80 mb-4">
                        {internship.description}
                      </CardDescription>
                      <Button
                        asChild
                        className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] mt-auto"
                      >
                        <Link
                          href={
                            socialLinks.find(
                              (link) => link.name === "internship"
                            )?.url || "#"
                          }
                          target="_blank"
                        >
                          Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WelcomeDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
