"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
import courses from "../static/courses";


export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (title: string) => {
    setExpandedCourse(expandedCourse === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Courses
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our range of courses designed to equip children with essential
          STEM skills, fostering creativity, problem-solving, and technological
          proficiency.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#1e3a5f] border-[#64ffda] overflow-hidden">
                <CardHeader
                  className={`${course.color} text-white p-4 flex flex-row items-center justify-between`}
                >
                  <CardTitle className="text-lg flex items-center space-x-2">
                    {course.icon}
                    <span>{course.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="relative w-full h-60 mb-4">
                    <Image
                      src={course.image}
                      alt={`${course.title} course`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <CardDescription className="text-white/80 mb-4">
                    {course.description}
                  </CardDescription>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]">
                      Enroll
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
                      onClick={() => toggleCourse(course.title)}
                    >
                      {expandedCourse === course.title
                        ? "Less Info"
                        : "Learn More"}
                    </Button>
                  </div>
                  {expandedCourse === course.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-2"
                    >
                      <h4 className="font-semibold">What you&apos;ll learn:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Fundamental concepts and principles</li>
                        <li>Hands-on project development</li>
                        <li>Problem-solving techniques</li>
                        <li>Collaborative skills</li>
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
