import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Terminal, Radio } from "lucide-react";

const navItems = [
  { id: "01", name: "ABOUT", href: "#about" },
  { id: "02", name: "SKILLS", href: "#skills" },
  { id: "03", name: "PROJECTS", href: "#projects" },
  { id: "04", name: "REVIEWS", href: "#reviews" },
  { id: "05", name: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 isolate border-b",
        scrolled
          ? "py-2.5 bg-background/90 backdrop-blur-md border-border/80 shadow-tactical-sm"
          : "py-4 bg-background/60 backdrop-blur-xs border-border/30"
      )}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#edea46] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a href="#hero" className="flex items-center gap-3 group">
          {/* Logo Badge */}
          <div className="relative w-8 h-8 bg-[#edea46] text-black font-tech font-black text-xs flex items-center justify-center clip-corner-sm shadow-tactical-sm group-hover:scale-105 transition-transform">
            <span>HT</span>
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-black" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 font-tech font-bold text-base tracking-wider text-foreground">
              <span>HIEU</span>
              <span className="text-[#edea46] bg-black dark:bg-white/10 px-1 text-[11px] font-mono clip-corner-sm">
                TRAN
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-muted-foreground tracking-widest uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>FULL-STACK DEVELOPER</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group relative px-3 py-1.5 text-xs lg:text-sm font-tech font-semibold tracking-wider text-foreground/80 hover:text-black transition-colors"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#929292] group-hover:text-black transition-colors">
                  {item.id}
                </span>
                <span>{item.name}</span>
              </span>

              {/* Hover Chamfer Background */}
              <span className="absolute inset-0 bg-[#edea46] clip-corner-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 -z-0" />
            </a>
          ))}
        </nav>

        {/* Right HUD: Time & Contact CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Live Clock */}
          <div className="hidden lg:flex flex-col items-end font-mono text-[10px] text-muted-foreground border-l border-border/50 pl-3">
            <div className="flex items-center gap-1">
              <Radio size={10} className="text-[#edea46] animate-pulse" />
              <span className="text-foreground font-semibold">{currentTime || "12:00:00"}</span>
            </div>
            <span className="text-[9px] opacity-60">LOCAL TIME (UTC+7)</span>
          </div>

          {/* Quick Action Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background dark:bg-white dark:text-black font-tech text-xs font-bold tracking-wider clip-corner-sm hover:bg-[#edea46] hover:text-black transition-all shadow-tactical-sm"
          >
            <Terminal size={13} />
            <span>CONTACT ME</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground bg-card border border-border clip-corner-sm"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[57px] bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 md:hidden overflow-hidden",
          isMenuOpen
            ? "max-h-[460px] opacity-100 pointer-events-auto py-6 px-6"
            : "max-h-0 opacity-0 pointer-events-none py-0 px-6"
        )}
      >
        <div className="flex flex-col space-y-3">
          <div className="text-[10px] font-mono text-muted-foreground pb-2 border-b border-border/40 flex justify-between">
            <span>// NAVIGATION MENU</span>
            <span>AVAILABLE FOR WORK</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center justify-between p-3 text-sm font-tech font-bold tracking-wider text-foreground hover:bg-[#edea46] hover:text-black clip-corner-sm transition-colors border border-border/40"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#929292]">{item.id}</span>
                <span>{item.name}</span>
              </div>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full mt-3 py-3 bg-[#edea46] text-black font-tech font-bold text-center text-xs tracking-wider clip-corner-sm shadow-tactical"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
};

