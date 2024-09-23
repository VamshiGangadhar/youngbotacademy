import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import computervision from "../images/computervision.jpg"

interface CourseCardProps {
  title: string;
  description: string;
  image?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
//   image,
}) => {
  const placeholderImage = "https://picsum.photos/400/300";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col p-6 bg-[#1e3a5f] rounded-lg shadow-lg"
    >
      <div className="relative w-full h-40 mb-4 rounded-t-lg overflow-hidden">
        <Image
          src={computervision || placeholderImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-[#8892b0] mb-4">{description}</p>
      <Button className="mt-auto bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0]">
        Enroll Now
      </Button>
    </motion.div>
  );
};
