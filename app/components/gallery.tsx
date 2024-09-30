"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import images from "../static/gallery"

export function PhotoGallery() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-6 bg-[#0a192f]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          Our Academy in Action
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`pl-1 ${
                  isLargeScreen ? "md:basis-1/2 lg:basis-1/3" : ""
                }`}
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="relative w-full h-64 md:h-80 lg:h-96">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="p-4">
            <CarouselPrevious />
          </div>
          <div className="p-4">
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
