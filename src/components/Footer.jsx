import { ArrowUp, ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t-2 border-border/80 bg-background overflow-hidden select-none">
      {/* Top Hazard Accent Bar */}
      <div className="w-full h-3 bg-hazard opacity-80" />

      {/* Giant "MISSION COMPLETE" Watermark from Figma Frame 2057880435 */}
      <div className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Tactical Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border clip-corner-sm text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#edea46] animate-pulse"></span>
            <span className="text-muted-foreground uppercase tracking-widest">
              PORTFOLIO // FULL-STACK & AI DEVELOPER
            </span>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-tech font-black tracking-tight text-foreground uppercase">
              LET'S BUILD TOGETHER
            </h2>
            <p className="font-tech text-base sm:text-2xl font-bold tracking-widest text-[#929292] uppercase">
              THANK YOU <span className="text-[#edea46]">/</span> FOR VISITING
            </p>
          </div>

          {/* Barcode 128 Element */}
          <div className="py-2">
            <span className="barcode-text text-3xl sm:text-5xl text-foreground opacity-90 tracking-widest">
              *HIEU-TRAN-PORTFOLIO-2026*
            </span>
          </div>

          {/* Footer Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#929292] font-mono text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <ChevronLeft size={16} className="text-[#edea46]" />
              <span>LOCATION: VIETNAM (UTC+7)</span>
            </span>
            <span>//</span>
            <span>STATUS: OPEN FOR WORK</span>
            <span>//</span>
            <span className="flex items-center gap-1">
              <span>VERSION: 2026.1</span>
              <ChevronRight size={16} className="text-[#edea46]" />
            </span>
          </div>

          {/* Return to Top Button */}
          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="endfield-btn-primary flex items-center gap-2 group"
              aria-label="Scroll to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="text-center sm:text-left">
            <p className="text-foreground font-semibold">
              &copy; {currentYear} HIEU TRAN // ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] opacity-70">
              BUILT WITH REACT 19, TAILWIND CSS & FRAMER MOTION
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Hieuej147"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 bg-card border border-border clip-corner-sm hover:bg-[#edea46] hover:text-black transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 bg-card border border-border clip-corner-sm hover:bg-[#edea46] hover:text-black transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 bg-card border border-border clip-corner-sm hover:bg-[#edea46] hover:text-black transition-colors"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};