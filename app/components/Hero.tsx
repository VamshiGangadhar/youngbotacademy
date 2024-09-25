"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, ChevronRight, Cpu, Zap } from "lucide-react";
import hero from "../images/hero.jpg";
import Link from "next/link";
import socialLinks from "../static/socialLinks";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20 bg-[#0a192f]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-[#64ffda]">
                Empowering Young Minds in Robotics
              </h1>
              <p className="max-w-[600px] text-[#a8b2d1] md:text-xl">
                Join Young Bot Academy and unlock the future of technology
                through hands-on learning and innovation.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              variants={itemVariants}
            >
              <Link
                href={
                  socialLinks.find((link) => link.name === "internship")?.url ||
                  "#"
                }
                target="_blank"
              >
                <Button className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] transition-transform transform hover:scale-105">
                  Register for a Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/CoursesPage">
                <Button
                  variant="outline"
                  className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-transform transform hover:scale-105"
                >
                  Explore Courses
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 text-[#a8b2d1]"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-[#64ffda]" />
                <span>Hands-on Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-[#64ffda]" />
                <span>AI Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-[#64ffda]" />
                <span>Expert Mentors</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] shadow-lg">
              <Image
                src={hero}
                alt="Young students working with robots"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#64ffda] to-[#0a192f] mix-blend-overlay rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div
                className="absolute -top-4 -left-4 bg-[#0a192f] p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
              >
                <Bot className="h-5 w-5 text-[#64ffda]" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#0a192f] p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1,
                }}
              >
                <Cpu className="h-8 w-8 text-[#64ffda]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
