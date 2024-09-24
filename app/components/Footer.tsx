import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#112240] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/CoursesPage"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutPage"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactPage"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#64ffda]" />
                <a
                  href="mailto:youngbotacademy@gmail.com"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  youngbotacademy@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#64ffda]" />
                <a
                  href="tel:+91 8500032403"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  +91 8500032403
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#64ffda]" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://wa.me/8500032403"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.552 4.105 1.514 5.84L0 24l6.293-1.514A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.29 17.29c-.26.73-1.52 1.34-2.1 1.42-.56.08-1.28.11-2.07-.13-.48-.15-1.1-.36-1.88-.7-3.3-1.42-5.45-4.95-5.62-5.18-.16-.22-1.34-1.78-1.34-3.4 0-1.62.82-2.42 1.12-2.74.3-.32.66-.4.88-.4.22 0 .44.01.63.01.2 0 .47-.07.74.56.28.63.95 2.18 1.03 2.34.08.16.13.35.03.56-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.16.3.72 1.18 1.54 1.92 1.06.95 1.95 1.25 2.25 1.4.3.15.47.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.66-.15.26.1 1.64.78 1.92.92.28.14.47.22.54.34.08.12.08.7-.18 1.42z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest news and offers!
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1e3a5f] border-[#64ffda] text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1e3a5f]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#8892b0]">
              © 2024 Young Bot Academy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <iframe
                title="Young Bot Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.780292274073!2d78.486671314876!3d17.38504408807286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a3b1b1b1b1%3A0x2b1b1b1b1b1b1b1b!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1631840605669!5m2!1sen!2sus"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
