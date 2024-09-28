import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {  Star } from "lucide-react";
import Image from "next/image";
import default_avatar from "../images/avatars/circle-user-round.svg"
import reviews from "../static/reviews";

export function Reviews() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#112240] to-[#0a192f]">
        <div className="container px-4 md:px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-[#64ffda] mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Parents Are Saying
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

function ReviewCard({
    review,
  }: {
    review: { name: string; review: string; rating: number; avatar: string };
  }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
  
    return (
      <Card className="bg-[#1e3a5f] border-[#64ffda] h-full flex flex-col shadow-lg relative">
        <CardHeader className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={review.avatar || default_avatar}
              alt={review.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-[#64ffda]">
            {review.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-white/80 mb-4">
            {isExpanded ? review.review : `${review.review.substring(0, maxLength)}...`}
          </CardDescription>
          <div className="flex items-center mt-4">
            {Array.from({ length: 5 }).map((_, i) => {
              const isHalfStar = review.rating - i === 0.5;
              return (
                <div key={i} className="relative">
                  <Star
                    className={`h-5 w-5 ${i < Math.floor(review.rating) ? "text-gold" : "text-gray-400"}`}
                    fill={i < Math.floor(review.rating) ? "#FFD700" : "none"}
                  />
                  {isHalfStar && i === Math.floor(review.rating) && (
                    <Star
                      className="h-5 w-5 text-gold absolute top-0 left-0"
                      style={{ clipPath: "inset(0 50% 0 0)" }}
                      fill="#FFD700"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
        {review.review.length > maxLength && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#64ffda] hover:underline absolute bottom-4 right-4"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </Card>
    );
  }