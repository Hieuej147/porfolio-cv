import { motion } from "framer-motion";
import { ChevronRight, FileText, Send, Terminal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Watermark Typography */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none overflow-hidden -z-10 opacity-[0.04] dark:opacity-[0.07]">
        <div className="text-[18vw] font-black font-tech leading-none tracking-tighter text-foreground translate-x-[-4%] translate-y-[-10%] whitespace-nowrap">
          PORTFOLIO
        </div>
        <div className="text-[14vw] font-black font-tech leading-none tracking-tighter text-right text-foreground translate-x-[4%] translate-y-[10%] whitespace-nowrap">
          DEVELOPER // DESIGN
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Top Header Dispatch */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-border/40 font-mono text-[11px] text-muted-foreground"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#edea46] clip-corner-sm shadow-tactical-sm"></span>
            <span className="font-bold text-foreground tracking-wider uppercase">
              HIEU TRAN // FULL-STACK DEVELOPER
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 bg-card border border-border/50 text-[9px] uppercase tracking-wider text-[#929292]">
              2026 EDITION
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-mono text-xs text-foreground tracking-wider opacity-80">
              SOFTWARE & AI SYSTEMS
            </span>
            <span className="font-mono text-[10px] text-foreground bg-[#edea46] px-2 py-0.5 font-bold clip-corner-sm text-black">
              OPEN TO WORK
            </span>
          </div>
        </motion.div>

        {/* Hero Central Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Main Typography */}
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border clip-corner-sm text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-[#edea46] animate-pulse"></span>
              <span className="font-tech uppercase tracking-widest text-foreground">
                FULL-STACK ENGINEER & AI AGENT ARCHITECT
              </span>
            </motion.div>

            {/* Display Headings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-xl sm:text-2xl font-tech font-bold tracking-tight text-[#929292]">
                HI, I'M
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-tech font-black tracking-tight text-foreground uppercase leading-[1.05]">
                HIEU TRAN
                <span className="inline-block ml-3 px-3 py-1 text-2xl sm:text-4xl bg-[#edea46] text-black clip-corner font-mono align-middle shadow-tactical-sm">
                  DEV
                </span>
              </h1>

              {/* TypeAnimation terminal line */}
              <div className="pt-2 min-h-[52px] sm:min-h-[64px] flex items-center">
                <span className="font-mono text-[#edea46] bg-black text-sm sm:text-base px-2 py-1 mr-2 clip-corner-sm font-bold">
                  &gt;
                </span>
                <TypeAnimation
                  sequence={[
                    "Building High-Performance Next.js Applications.",
                    2000,
                    "Architecting Scalable NestJS & PostgreSQL APIs.",
                    2000,
                    "Developing Autonomous AI Agents & Workflows.",
                    2000,
                    "Crafting Clean, Pixel-Perfect User Interfaces.",
                    2000,
                  ]}
                  wrapper="p"
                  speed={45}
                  className="font-mono text-base sm:text-xl lg:text-2xl font-semibold text-foreground tracking-tight"
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            {/* Professional Brief */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed font-sans border-l-2 border-[#edea46] pl-4 py-1"
            >
              <span className="font-mono text-xs text-foreground font-semibold uppercase block mb-1">
                // WELCOME TO MY PORTFOLIO:
              </span>
              Specialized in modern full-stack web platforms, distributed backend services,
              and AI agent workflows. Turning complex business requirements into high-efficiency,
              visually striking, and resilient digital solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href="#projects" className="endfield-btn-primary group">
                <span className="flex items-center gap-2">
                  <span>VIEW MY WORK</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="#contact" className="endfield-btn-outline group">
                <span className="flex items-center gap-2">
                  <Send size={15} />
                  <span>GET IN TOUCH</span>
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText size={14} />
                <span>[ ABOUT ME ]</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Summary Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="relative bg-card border border-border p-5 clip-corner shadow-tactical space-y-4">
              {/* Corner crosshairs and accent strip */}
              <div className="absolute top-0 right-0 w-20 h-2 bg-hazard opacity-70" />
              <div className="absolute top-2 left-2 text-[10px] font-mono text-foreground/40">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-foreground/40">+</div>

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#edea46]" />
                  <span className="font-tech font-bold text-xs uppercase tracking-wider">
                    DEVELOPER PROFILE
                  </span>
                </div>
                <span className="font-mono text-[9px] text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
                  ACTIVE
                </span>
              </div>

              {/* Profile rows */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground text-[11px]">NAME:</span>
                  <span className="font-bold text-foreground">HIEU TRAN</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground text-[11px]">ROLE:</span>
                  <span className="font-semibold text-foreground">Full-Stack & AI</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground text-[11px]">CORE STACK:</span>
                  <span className="font-semibold text-[#edea46] bg-black dark:bg-black/60 px-1.5 py-0.5 text-[11px] clip-corner-sm">
                    Next.js / NestJS / AI
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground text-[11px]">LOCATION:</span>
                  <span className="text-foreground">An Giang, Vietnam</span>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className="text-muted-foreground text-[11px]">STATUS:</span>
                  <span className="flex items-center gap-1.5 text-green-500 font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    READY FOR HIRE
                  </span>
                </div>
              </div>

              {/* Footer info */}
              <div className="pt-2 border-t border-border/50 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span className="text-foreground/80 font-bold">
                  WEB & AI SYSTEMS
                </span>
                <span>
                  PRODUCTION READY
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-16 sm:pt-20 flex flex-col items-center gap-3"
        >
          {/* Measurement marks */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60 select-none">
            <span>+</span>
            <span className="tracking-widest">····································</span>
            <span className="text-foreground font-semibold tracking-wider">
              SCROLL DOWN TO EXPLORE
            </span>
            <span className="tracking-widest">····································</span>
            <span>+</span>
          </div>

          <a
            href="#about"
            className="flex flex-col items-center group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <div className="w-8 h-10 border border-border rounded-full flex items-start justify-center p-1 group-hover:border-[#edea46] transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2.5 bg-[#edea46] rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

