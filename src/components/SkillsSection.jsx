import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Import icons...
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiNestjs,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Briefcase, Code } from "lucide-react";

// Dữ liệu skills...
const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: <SiTypescript className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs /> },
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: <FaNodeJs className="text-green-500" />,
  },
  { name: "Express", level: 75, category: "backend", icon: <Code /> },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    icon: <SiMongodb className="text-green-400" />,
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
    icon: <SiPostgresql className="text-blue-600" />,
  },

  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: <FaGitAlt className="text-orange-600" />,
  },
  {
    name: "Docker",
    level: 70,
    category: "tools",
    icon: <FaDocker className="text-blue-500" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <VscCode className="text-blue-400" />,
  },
  {
    name: "Nestjs",
    category: "backend",
    icon: <SiNestjs className="text-red-500" />,
  },
];
const categories = ["all", "frontend", "backend", "tools"];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div
          layout // Dùng layout ở đây để grid tự sắp xếp mượt mà
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout="position"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3 h-10 w-10 flex items-center justify-center text-primary">
                  {skill.icon || <Briefcase />}
                </div>
                <h3 className="text-lg font-semibold mb-3"> {skill.name}</h3>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-1">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right w-full">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
