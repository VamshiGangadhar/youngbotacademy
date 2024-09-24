"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function ContactPage() {
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
          Contact Us
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We would love to hear from you! Reach out to us through any of the
          following methods.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg p-6 rounded-lg">
              <Mail className="h-6 w-6 text-[#64ffda] mb-4" />
              <h2 className="text-2xl font-bold text-[#64ffda] mb-2">Email</h2>
              <p className="text-white/80 mb-4">Srinivas32403@gmail.com</p>
              <Button
                asChild
                className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] mt-auto"
              >
                <a href="mailto:Srinivas32403@gmail.com">Send an Email</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg p-6 rounded-lg">
              <Phone className="h-6 w-6 text-[#64ffda] mb-4" />
              <h2 className="text-2xl font-bold text-[#64ffda] mb-2">Phone</h2>
              <p className="text-white/80 mb-4">8500032403</p>
              <Button
                asChild
                className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] mt-auto"
              >
                <a href="tel:+918500032403">Call Us</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg p-6 rounded-lg">
              <Instagram className="h-6 w-6 text-[#64ffda] mb-4" />
              <h2 className="text-2xl font-bold text-[#64ffda] mb-2">
                Instagram
              </h2>
              <p className="text-white/80 mb-4">@your_instagram_id</p>
              <Button
                asChild
                className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] mt-auto"
              >
                <a
                  href="https://www.instagram.com/your_instagram_id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Us
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg p-6 rounded-lg">
              <Youtube className="h-6 w-6 text-[#64ffda] mb-4" />
              <h2 className="text-2xl font-bold text-[#64ffda] mb-2">
                YouTube
              </h2>
              <p className="text-white/80 mb-4">Your YouTube Channel</p>
              <Button
                asChild
                className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] mt-auto"
              >
                <a
                  href="https://www.youtube.com/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg p-6 rounded-lg">
              <Facebook className="h-6 w-6 text-[#64ffda] mb-4" />
              <h2 className="text-2xl font-bold text-[#64ffda] mb-2">
                Facebook
              </h2>
              <p className="text-white/80 mb-4">Your Facebook Page</p>
              <Button
                asChild
                className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] mt-auto"
              >
                <a
                  href="https://www.facebook.com/your_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Like Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
