import { useEffect, useState } from "react";

export const StartBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* CAD Blueprint Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-70" />

      {/* LooperGroup Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-looper-dots opacity-40" />

      {/* Parallax Tactical Elements */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {/* Top-Right HUD Coordinate Box */}
        <div className="absolute top-20 right-8 hidden lg:flex flex-col items-end opacity-25 font-mono text-[10px] tracking-widest text-foreground">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#edea46]"></span>
            <span>SYS.LOC // 105.24°E 10.51°N</span>
          </div>
          <div>ELEVATION // 1420M · TALOS-II</div>
          <div className="font-barcode text-lg tracking-normal opacity-60">
            *EF-SEC-09*
          </div>
        </div>

        {/* Bottom-Left HUD Data Marker */}
        <div className="absolute bottom-16 left-8 hidden lg:flex flex-col opacity-25 font-mono text-[10px] tracking-widest text-foreground">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-0.5 bg-[#edea46]"></span>
            <span>PROTOCOL // RECON-ARCHIVE</span>
          </div>
          <div>STATUS // 100% NOMINAL · READY</div>
        </div>

        {/* Tactical Crosshairs (+) in corners */}
        <div className="absolute top-24 left-8 text-foreground/20 font-mono text-sm">
          +
        </div>
        <div className="absolute top-24 right-8 text-foreground/20 font-mono text-sm">
          +
        </div>
        <div className="absolute bottom-24 left-8 text-foreground/20 font-mono text-sm">
          +
        </div>
        <div className="absolute bottom-24 right-8 text-foreground/20 font-mono text-sm">
          +
        </div>
      </div>

      {/* Subtle Slow Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#edea46]/5 to-transparent h-24 w-full animate-scanline pointer-events-none opacity-30" />
    </div>
  );
};

