"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import defaultImage from "../images/avatars/circle-user-round.svg";
import reviews from "../static/reviews"

export function Reviews() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleReviews = isLargeScreen ? 3 : 1;
  const maxIndex = reviews.length - visibleReviews;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0a192f] to-[#1e3a5f]">
      <div className="container px-4 md:px-6 relative">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          What Our Students Say
        </h2>
        <div className="relative flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 transform -translate-y-1/2 bg-[#1e3a5f] text-white hover:bg-[#64ffda] hover:text-[#0a192f] ml-2 z-10 transition-transform duration-300 ease-in-out"
            onClick={prevSlide}
            style={{ top: "50%" }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous review</span>
          </Button>
          <div className="overflow-hidden flex-1 px-2">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                width: `${100 * (reviews.length / visibleReviews)}%`,
                transform: `translateX(-${
                  (100 / (reviews.length / visibleReviews)) * currentIndex
                }%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={`w-full ${
                    isLargeScreen ? "lg:w-7/10" : ""
                  } px-4 transition-transform duration-300 hover:scale-105`}
                >
                  <Card className="bg-[#112240] border-[#1e3a5f] h-full flex flex-col rounded-lg shadow-lg">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src={review.avatar || defaultImage}
                          alt={review.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {review.name}
                          </h3>
                          <p className="text-sm text-[#8892b0]">
                            {review.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => {
                          const isHalfFilled = review.rating - i === 0.5;
                          return (
                            <div key={i} className="relative w-5 h-5">
                              <Star
                                className={`absolute top-0 left-0 w-5 h-5 ${
                                  i < Math.floor(review.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-400"
                                }`}
                              />
                              {isHalfFilled && (
                                <Star
                                  className="absolute top-0 left-0 w-5 h-5 text-yellow-400 fill-yellow-400"
                                  style={{ clipPath: "inset(0 50% 0 0)" }}
                                />
                              )}
                            </div>
                          );
                        })}
                        <span className="ml-2 text-sm text-[#8892b0]">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-white flex-grow">
                        {expandedReview === review.id
                          ? review.review
                          : `${review.review.slice(0, 100)}...`}
                      </p>
                      <div className="mt-auto">
                        <Button
                          variant="link"
                          onClick={() =>
                            setExpandedReview(
                              expandedReview === review.id ? null : review.id
                            )
                          }
                          className="self-end mt-4 text-[#64ffda] hover:text-[#45e0c0] transition-colors duration-300"
                        >
                          {expandedReview === review.id
                            ? "Read Less"
                            : "Read More"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 transform -translate-y-1/2 bg-[#1e3a5f] text-white hover:bg-[#64ffda] hover:text-[#0a192f] mr-2 z-10 transition-transform duration-300 ease-in-out"
            onClick={nextSlide}
            style={{ top: "50%" }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next review</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
