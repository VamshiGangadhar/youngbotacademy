"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    setIsDialogOpen(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-white">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-[#1e3a5f]">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-23%20at%2011.09.23_26fd47c9-PjIaALQWCguuwmgeDhEZcIn6fnR1iW.jpg"
            alt="Young Bot Academy Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-bold">Young Bot Academy</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0a192f] text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Navigation</SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col gap-4">
                  <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
                    Home
                  </Link>
                  <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
                    Courses
                  </Link>
                  <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
                    About
                  </Link>
                  <Link className="text-sm font-medium hover:text-[#64ffda] transition-colors" href="#">
                    Contact
                  </Link>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Young Bot Academy
                </h1>
                <p className="mx-auto max-w-[700px] text-[#8892b0] md:text-xl">
                  Empowering young minds with cutting-edge robotics education
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]">Get Started</Button>
                <Button variant="outline" className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#112240]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { title: "Robotics Basics", description: "Learn the fundamentals of robotics and programming" },
                { title: "AI for Kids", description: "Explore artificial intelligence in a fun, interactive way" },
                { title: "Advanced Robotics", description: "Take your skills to the next level with advanced projects" },
              ].map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col p-6 bg-[#1e3a5f] rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-[#8892b0]">{course.description}</p>
                  <Button className="mt-4 bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]">Enroll Now</Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#1e3a5f]">
        <p className="text-xs text-[#8892b0]">© 2024 Young Bot Academy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-[#64ffda] transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-[#64ffda] transition-colors" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
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
                  <DialogTitle className="text-2xl font-bold">Welcome to Young Bot Academy</DialogTitle>
                  <DialogDescription className="text-[#8892b0]">
                    Empowering young minds with innovative robotics education
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
  )
}