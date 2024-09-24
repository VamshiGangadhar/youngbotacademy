"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const benefits = [
    "Enhanced creativity",
    "Improved critical thinking",
    "Technological skills",
    "Hands-on learning",
    "Teamwork and collaboration",
    "Confidence building",
    "Adaptability",
    "Strong STEM foundation",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#64ffda]">
            Youngbot Academy
          </Link>
          <Button
            asChild
            variant="ghost"
            className="text-[#64ffda] hover:text-white hover:bg-[#64ffda]/20"
          >
            <Link href="/">Home</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Youngbot Academy
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6">
              Youngbot Academy is an educational platform dedicated to nurturing
              children`&apos;`s curiosity and creativity through engaging and
              interactive learning experiences. By combining technology and
              innovative teaching methods, Youngbot Academy aims to make
              education an exciting adventure, fostering skills in discovery,
              critical thinking, and problem-solving.
            </p>
            <p className="text-lg">
              Through its programs, children are encouraged to explore, invent,
              and grow, preparing them for a future filled with endless
              possibilities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Children learning with technology"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-[#64ffda]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Advantages and Benefits
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1e3a5f] border-[#64ffda]">
              <CardContent className="p-4 flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[#64ffda] mt-1" />
                <p className="text-lg">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to start your child`&apos;`s journey?
          </h2>
          <Button
            asChild
            className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]"
          >
            <Link href="/courses">
              Explore Our Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </main>

      <footer className="bg-[#0a192f] py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-[#8892b0]">
          <p>&copy; 2024 Youngbot Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
