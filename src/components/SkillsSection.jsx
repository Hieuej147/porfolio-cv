import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  SiNestjs,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    id: "01",
    name: "Next.js",
    level: 85,
    category: "frontend",
    status: "ADVANCED",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    id: "02",
    name: "React",
    level: 92,
    category: "frontend",
    status: "EXPERT",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    id: "03",
    name: "TypeScript",
    level: 88,
    category: "frontend",
    status: "ADVANCED",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    id: "04",
    name: "NestJS",
    level: 82,
    category: "backend",
    status: "ADVANCED",
    icon: <SiNestjs className="text-[#E0234E]" />,
  },
  {
    id: "05",
    name: "Node.js",
    level: 85,
    category: "backend",
    status: "ADVANCED",
    icon: <FaNodeJs className="text-[#5FA04E]" />,
  },
  {
    id: "06",
    name: "PostgreSQL",
    level: 78,
    category: "backend",
    status: "PROFICIENT",
    icon: <SiPostgresql className="text-[#4169E1]" />,
  },
  {
    id: "07",
    name: "Tailwind CSS",
    level: 95,
    category: "frontend",
    status: "EXPERT",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    id: "08",
    name: "JavaScript",
    level: 90,
    category: "frontend",
    status: "EXPERT",
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
  },
  {
    id: "09",
    name: "MongoDB",
    level: 75,
    category: "backend",
    status: "PROFICIENT",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    id: "10",
    name: "Express.js",
    level: 80,
    category: "backend",
    status: "ADVANCED",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  {
    id: "11",
    name: "HTML5 / CSS3",
    level: 95,
    category: "frontend",
    status: "EXPERT",
    icon: (
      <div className="flex items-center -space-x-1">
        <FaHtml5 className="text-[#E34F26]" />
        <FaCss3Alt className="text-[#1572B6]" />
      </div>
    ),
  },
  {
    id: "12",
    name: "Git / GitHub",
    level: 90,
    category: "tools",
    status: "EXPERT",
    icon: <FaGitAlt className="text-[#F05032]" />,
  },
  {
    id: "13",
    name: "Docker",
    level: 72,
    category: "tools",
    status: "PROFICIENT",
    icon: <FaDocker className="text-[#2496ED]" />,
  },
  {
    id: "14",
    name: "VS Code",
    level: 95,
    category: "tools",
    status: "EXPERT",
    icon: <VscVscode className="text-[#007ACC]" />,
  },
];

const categories = [
  { id: "all", label: "ALL SKILLS", count: 14 },
  { id: "frontend", label: "FRONTEND", count: 6 },
  { id: "backend", label: "BACKEND", count: 5 },
  { id: "tools", label: "DEV TOOLS", count: 3 },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border/40 bg-surface/30 dark:bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] mb-2">
            <span className="font-tech font-bold text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
              02
            </span>
            <span>// TECHNICAL STACK · SKILLS OVERVIEW</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/60 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-black uppercase tracking-tight text-foreground">
              SKILLS & <span className="text-black bg-[#edea46] px-2 py-0.5 clip-corner shadow-tactical-sm">TECHNOLOGIES</span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground hidden md:inline">
              [ MODERN FULL-STACK & AI ARCHITECTURE ]
            </span>
          </div>
        </div>

        {/* Industrial Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative px-4 py-2 text-xs font-tech font-bold tracking-wider clip-corner-sm transition-all cursor-pointer border",
                activeCategory === cat.id
                  ? "bg-[#edea46] text-black border-[#edea46] shadow-tactical-sm font-black"
                  : "bg-card text-muted-foreground hover:text-foreground border-border hover:border-foreground/40"
              )}
            >
              <span className="flex items-center gap-2">
                <span>// {cat.label}</span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-1 py-0.2 rounded-xs",
                    activeCategory === cat.id
                      ? "bg-black text-[#edea46]"
                      : "bg-surface-tint text-muted-foreground"
                  )}
                >
                  {cat.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Skills Tactical Cards Grid */}
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill) => {
            // Calculate 10-segment tactical gauge
            const totalSegments = 10;
            const filledSegments = Math.round((skill.level / 100) * totalSegments);

            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative bg-card border border-border p-5 clip-corner shadow-tactical-sm hover:border-[#edea46] hover:shadow-tactical-accent transition-all group text-left"
              >
                {/* Corner Crosshair */}
                <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground/30">+</div>

                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-black/60 text-2xl clip-corner-sm border border-border/50 group-hover:border-[#edea46] group-hover:bg-[#edea46]/10 transition-all shrink-0 shadow-inner group-hover:scale-105">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-[#929292] tracking-wider uppercase">
                        SKILL {skill.id} · {skill.category}
                      </div>
                      <h3 className="font-tech font-bold text-base text-foreground tracking-tight">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#edea46]/20 text-[#edea46] dark:text-[#edea46] border border-[#edea46]/40 clip-corner-sm">
                    {skill.status}
                  </span>
                </div>

                {/* 10-Segment Tactical Gauge (Endfield UI signature element) */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-muted-foreground text-[10px]">PROFICIENCY:</span>
                    <span className="font-bold text-foreground">{skill.level}%</span>
                  </div>

                  {/* Discrete Tactical Segments */}
                  <div className="grid grid-cols-10 gap-1 h-2 bg-black/10 dark:bg-white/5 p-0.5 rounded-none border border-border/40">
                    {Array.from({ length: totalSegments }).map((_, index) => (
                      <div
                        key={index}
                        className={cn(
                          "h-full transition-colors duration-300",
                          index < filledSegments
                            ? "bg-[#edea46] shadow-[0_0_6px_rgba(237,234,70,0.6)]"
                            : "bg-transparent"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Capability Summary Strip */}
        <div className="mt-12 p-4 bg-card border border-border/60 clip-corner flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#edea46]"></span>
            <span>14 CORE TECHNOLOGIES & TOOLS IN ACTIVE USE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
              CONTINUOUS LEARNING & REFINEMENT
            </span>
            <span className="text-[10px] text-foreground font-bold bg-[#edea46] text-black px-2 py-0.5 clip-corner-sm">
              PRODUCTION READY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

