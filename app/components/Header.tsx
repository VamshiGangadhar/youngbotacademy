import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import hero from "../images/hero.jpg"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center border-b border-[#1e3a5f] bg-[#0a192f] shadow-lg">
      <Link
        className="flex items-center justify-center"
        href="/"
        aria-label="Young Bot Academy Home"
      >
        <Image
          src={hero}
          alt="Young Bot Academy Logo"
          width={60}
          height={60}
          className="rounded-full transition-transform duration-300 hover:scale-110"
        />
        <span className="ml-2 text-xl font-bold text-white">
          Young Bot Academy
        </span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
          href="/CoursesPage"
        >
          Courses
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
          href="/AboutPage"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
          href="/ContactPage"
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
          href="/Internships"
        >
          Internships
        </Link>
      </nav>
      <div className="ml-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="md:hidden"
              size="icon"
              variant="outline"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0a192f] text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Navigation</SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col gap-4">
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
                    href="/CoursesPage"
                  >
                    Courses
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
                    href="/AboutPage"
                  >
                    About
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
                    href="/ContactPage"
                  >
                    Contact
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors duration-300"
                    href="/Internships"
                  >
                    Internships
                  </Link>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}