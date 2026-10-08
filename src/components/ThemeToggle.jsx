import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-5 right-5 z-50 px-3 py-2 transition-all duration-200 clip-corner-sm flex items-center gap-2 cursor-pointer shadow-tactical border",
        "bg-card border-border hover:border-[#edea46] text-foreground font-mono text-xs font-bold select-none"
      )}
      aria-label="Toggle tactical interface theme"
    >
      <span className="w-2 h-2 rounded-full bg-[#edea46] shadow-[0_0_6px_#edea46]" />
      {isDarkMode ? (
        <>
          <Sun size={14} className="text-[#edea46]" />
          <span className="hidden sm:inline">CAD LIGHT</span>
        </>
      ) : (
        <>
          <Moon size={14} className="text-foreground" />
          <span className="hidden sm:inline">NIGHT OPS</span>
        </>
      )}
    </button>
  );
};

