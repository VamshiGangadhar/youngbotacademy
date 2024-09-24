import {
  Code,
  Cpu,
  Smartphone,
  Brain,
  Globe,
  Terminal,
  Bot,
} from "lucide-react";
import ardunio from "../images/courses/Arduino.jpg";
import pictoblox from "../images/courses/Pictoblox.jpg";
import quarky from "../images/courses/Quarky.jpg";
import microbit from "../images/courses/Microbit.jpg";
import appdev from "../images/courses/appdev.jpg";
import webdev from "../images/courses/webdev.jpg";
import scratch from "../images/courses/scratch.jpg";
import aiml from "../images/courses/aiml.jpg";
import python from "../images/courses/python.jpg";

const courses = [
  {
    title: "Scratch",
    description:
      "Introduces block-based coding to create interactive stories, games, and animations.",
    icon: <Code className="h-6 w-6" />,
    color: "bg-purple-500",
    image: scratch,
  },
  {
    title: "Pictoblox",
    description:
      "A visual programming platform for building AI and robotics projects, enhancing creativity and technical skills.",
    icon: <Bot className="h-6 w-6" />,
    color: "bg-blue-500",
    image: pictoblox,
  },
  {
    title: "Quarky",
    description:
      "Engages students with hands-on projects in robotics and AI using the Quarky hardware kit.",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-green-500",
    image: quarky,
  },
  {
    title: "Microbit",
    description:
      "Teaches coding and electronics through the use of the Microbit microcontroller, enabling students to create various interactive projects.",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-yellow-500",
    image: microbit,
  },
  {
    title: "Arduino",
    description:
      "Provides in-depth knowledge of electronics and programming using Arduino microcontrollers to build diverse projects. Arduino microcontrollers to build diverse projects",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-red-500",
    image: ardunio,
  },
  {
    title: "App Development with no Code",
    description:
      "Enables students to develop mobile apps without coding, using platforms like MIT App Inventor and Thunkable. Enables students to develop mobile apps without coding",
    icon: <Smartphone className="h-6 w-6" />,
    color: "bg-pink-500",
    image: appdev,
  },
  {
    title: "AI and ML projects",
    description:
      "Introduces students to artificial intelligence and machine learning concepts through practical projects with Quarky and Pictoblox. concepts through practical projects with Quarky and Pictoblox",
    icon: <Brain className="h-6 w-6" />,
    color: "bg-indigo-500",
    image: aiml,
  },
  {
    title: "Web Technologies",
    description:
      "Covers the fundamentals of web development, including HTML, CSS, and JavaScript, allowing students to create their own websites.",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-teal-500",
    image: webdev,
  },
  {
    title: "Basic Python",
    description:
      "Teaches the basics of Python programming, focusing on syntax, logic, and simple applications, providing a strong foundation in text-based coding.",
    icon: <Terminal className="h-6 w-6" />,
    color: "bg-gray-500",
    image: python,
  },
];

export default courses;
