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

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center border-b border-[#1e3a5f] bg-[#0a192f]">
      <Link
        className="flex items-center justify-center"
        href="#"
        aria-label="Young Bot Academy Home"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-23%20at%2011.09.23_26fd47c9-PjIaALQWCguuwmgeDhEZcIn6fnR1iW.jpg"
          alt="Young Bot Academy Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <span className="ml-2 text-xl font-bold text-white">
          Young Bot Academy
        </span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
          href="#"
        >
          Courses
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
          href="#"
        >
          Contact
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
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
                    href="#"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
                    href="#"
                  >
                    Courses
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
                    href="#"
                  >
                    About
                  </Link>
                  <Link
                    className="text-sm font-medium text-white hover:text-[#64ffda] transition-colors"
                    href="#"
                  >
                    Contact
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