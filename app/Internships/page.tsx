"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const internships = [
  {
    title: "Arduino IDE",
    description:
      "Gain hands-on experience in electronics and programming with our Arduino IDE internship. Work on real-world projects using Arduino microcontrollers and develop practical skills in hardware and software integration.",
    image: "/placeholder.svg?height=200&width=300",
    formLink: "#arduino-form",
  },
  {
    title: "Web Development",
    description:
      "Our Web Development internship covers both front-end and back-end development. Build and deploy fully functional websites using HTML, CSS, JavaScript, and various web frameworks. Enhance your web development skills with real-world applications.",
    image: "/placeholder.svg?height=200&width=300",
    formLink: "#web-dev-form",
  },
  {
    title: "Python",
    description:
      "Dive deep into Python programming with our Python internship. Apply your knowledge to real-world applications and projects, focusing on problem-solving and software development. This internship will help you enhance your coding skills and prepare for a career in software development.",
    image: "/placeholder.svg?height=200&width=300",
    formLink: "#python-form",
  },
];

const benefits = [
  "Hands-On Experience: Work on real projects and gain practical skills.",
  "Expert Guidance: Learn from experienced instructors and industry professionals.",
  "Career Preparation: Build a strong foundation for your future career in technology and engineering.",
  "Collaborative Environment: Work alongside like-minded peers in a supportive and engaging setting.",
];

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-white">
      <Header />

      <main className="container mx-auto px-12 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internship Opportunities
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At <span className="text-[#64ffda]">Youngbot Academy</span>, we are committed to providing practical, hands-on
          experiences through our internship programs. Our internships are
          designed to enhance your skills and prepare you for a future in
          technology and engineering.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
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
                    <Link href={internship.formLink}>
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-[#64ffda]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Why Choose Our Internships?
        </motion.h2>

        <motion.ul
          className="grid gap-4 md:grid-cols-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CircleCheckBig className="h-6 w-6 text-[#64ffda] flex-shrink-0 mt-1" />
              <span className="leading-relaxed">{benefit}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl mb-6 leading-relaxed">
            Join <span className="text-[#64ffda]">Youngbot Academy&apos;s</span> internship program and take the next
            step in your educational journey. Prepare for a bright future with
            practical experience and expert mentorship.
          </p>
          <Button
            asChild
            className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]"
          >
            <Link href="#apply-now">
              Apply for an Internship <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}