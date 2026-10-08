import { motion } from "framer-motion";
import { Code, Cpu, Database, Layers, Send } from "lucide-react";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] mb-2">
            <span className="font-tech font-bold text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
              01
            </span>
            <span>// ABOUT ME · INTRODUCTION</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/60 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-black uppercase tracking-tight text-foreground">
              ABOUT{" "}
              <span className="text-black bg-[#edea46] px-2 py-0.5 clip-corner shadow-tactical-sm">
                ME
              </span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
              FULL-STACK & AI DEVELOPER
            </span>
          </div>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Profile Card & Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative bg-card border border-border p-6 clip-corner shadow-tactical space-y-6">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-foreground/40">
                +
              </div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-foreground/40">
                +
              </div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-foreground/40">
                +
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-foreground/40">
                +
              </div>

              {/* Photo Frame */}
              <div className="relative group overflow-hidden border-2 border-border/80 clip-corner bg-black">
                {/* Accent Tag */}
                <div className="absolute top-0 right-0 w-24 h-4 bg-hazard z-10 clip-tag" />

                {/* Profile Photo */}
                <img
                  src="/hieudev.png"
                  alt="Hieu Tran"
                  className="w-full h-80 sm:h-96 object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Photo Sub-HUD */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between font-mono text-white text-xs z-10">
                  <div>
                    <div className="font-bold text-sm tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#edea46] inline-block"></span>
                      HIEU TRAN
                    </div>
                    <div className="text-[10px] opacity-80">
                      FULL-STACK DEVELOPER
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-tech text-xs tracking-wider text-[#edea46]">
                      DEV // 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2.5 font-mono text-xs border-t border-border/40 pt-4 text-left">
                <div className="flex justify-between py-1 border-b border-border/20">
                  <span className="text-muted-foreground text-[11px]">
                    ROLE:
                  </span>
                  <span className="font-semibold text-foreground">
                    Full-Stack & AI Builder
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/20">
                  <span className="text-muted-foreground text-[11px]">
                    LOCATION:
                  </span>
                  <span className="font-semibold text-foreground">
                    An Giang, Vietnam
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/20">
                  <span className="text-muted-foreground text-[11px]">
                    EXPERIENCE:
                  </span>
                  <span className="font-semibold text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
                    1+ Year Production
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/20">
                  <span className="text-muted-foreground text-[11px]">
                    CORE FOCUS:
                  </span>
                  <span className="font-semibold text-foreground">
                    Next.js · NestJS · AI
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground text-[11px]">
                    STATUS:
                  </span>
                  <span className="font-bold text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    OPEN TO WORK
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Specializations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Bio Statement */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <span className="w-2 h-0.5 bg-[#edea46]"></span>
                <span>// BIOGRAPHY & BACKGROUND</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-tech font-bold tracking-tight text-foreground">
                PASSIONATE WEB DEVELOPER & TECH CREATOR
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                With a strong foundation in modern web engineering, I build
                responsive, secure, and high-performance web applications. From
                reactive frontend dashboards to distributed backend APIs and
                autonomous AI agent workflows, I design digital solutions with
                uncompromising attention to performance, user experience, and
                clean code architecture.
              </p>
            </div>

            {/* 3 Core Specialization Cards */}
            <div className="space-y-4 pt-2">
              {/* Card 1 */}
              <div className="relative bg-card border border-border p-5 clip-corner hover:border-[#edea46] transition-colors shadow-tactical-sm group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#edea46] text-black clip-corner-sm shadow-tactical-sm">
                    <Code size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#929292]">
                        01
                      </span>
                      <h4 className="font-tech font-bold text-base text-foreground group-hover:text-foreground">
                        Full-Stack Web Development
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Building production-grade applications using Next.js 16,
                      React 19, TypeScript, and Tailwind CSS with high rendering
                      speed, SEO optimization, and responsive UIs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-card border border-border p-5 clip-corner hover:border-[#edea46] transition-colors shadow-tactical-sm group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-foreground text-background dark:bg-white dark:text-black clip-corner-sm shadow-tactical-sm">
                    <Database size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#929292]">
                        02
                      </span>
                      <h4 className="font-tech font-bold text-base text-foreground group-hover:text-foreground">
                        Scalable Backend & REST APIs
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Architecting secure NestJS services, PostgreSQL databases
                      with Prisma ORM, Redis caching, JWT refresh-token
                      rotation, and Stripe payment gateways.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-card border border-border p-5 clip-corner hover:border-[#edea46] transition-colors shadow-tactical-sm group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#edea46] text-black clip-corner-sm shadow-tactical-sm">
                    <Cpu size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#929292]">
                        03
                      </span>
                      <h4 className="font-tech font-bold text-base text-foreground group-hover:text-foreground">
                        AI Systems & Agent Automation
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Integrating LangGraph, CopilotKit, OpenAI GPT models, and
                      sandboxed code execution environments (E2B) for autonomous
                      workflows and generative features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="endfield-btn-primary">
                <span className="flex items-center gap-2">
                  <Send size={15} />
                  <span>GET IN TOUCH</span>
                </span>
              </a>

              <a href="#projects" className="endfield-btn-outline">
                <span className="flex items-center gap-2">
                  <Layers size={15} />
                  <span>VIEW PROJECTS</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
