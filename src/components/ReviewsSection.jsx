import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: "01",
    name: "Alex Nguyen",
    role: "Engineering Lead",
    company: "Fintech Solutions APAC",
    avatar: "AN",
    rating: 5,
    tag: "Full-Stack Architecture",
    content:
      "Hieu is an exceptionally proactive developer who seamlessly bridges complex backend systems with fluid, responsive user interfaces. His delivery on our NestJS REST API and microservices was rock-solid and production-ready ahead of schedule.",
    date: "January 2026",
  },
  {
    id: "02",
    name: "Sarah Lindqvist",
    role: "Product Manager",
    company: "Nordic AI Studio",
    avatar: "SL",
    rating: 5,
    tag: "AI Agents & Next.js",
    content:
      "Working with Hieu on our autonomous agent platform was a breath of fresh air. He has a deep intuition for LLM integrations, modern UI paradigms, and clean TypeScript code that our internal team easily built upon.",
    date: "December 2025",
  },
  {
    id: "03",
    name: "Minh Duc Pham",
    role: "Senior Frontend Architect",
    company: "OpenWeb Ecosystem",
    avatar: "MP",
    rating: 5,
    tag: "Design System & Performance",
    content:
      "Hieu's attention to detail in animations, component modularity, and page speed benchmarks is top-tier. He turns complex Figma designs into pixel-perfect, accessible React applications effortlessly.",
    date: "November 2025",
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border/40 bg-surface/30 dark:bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] mb-2">
            <span className="font-tech font-bold text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
              04
            </span>
            <span>// TESTIMONIALS · CLIENT & COLLEAGUE FEEDBACK</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/60 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-black uppercase tracking-tight text-foreground">
              CLIENT <span className="text-black bg-[#edea46] px-2 py-0.5 clip-corner shadow-tactical-sm">REVIEWS</span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
              [ VERIFIED RECOMMENDATIONS & COLLABORATION FEEDBACK ]
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card border border-border p-6 clip-corner shadow-tactical hover:border-[#edea46] hover:shadow-tactical-accent transition-all group flex flex-col justify-between text-left"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground/30">+</div>

              <div>
                {/* Header: Stars & Project Tag */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-border/40">
                  <div className="flex items-center gap-1 text-[#edea46]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#edea46]" />
                    ))}
                  </div>

                  <span className="font-mono text-[9px] px-2 py-0.5 bg-surface-tint border border-border/60 text-foreground/90 clip-corner-sm uppercase">
                    {review.tag}
                  </span>
                </div>

                {/* Quote Icon & Feedback */}
                <div className="pt-4 space-y-3">
                  <Quote size={22} className="text-[#edea46]/70 rotate-180" />
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none clip-corner-sm bg-foreground text-background dark:bg-white dark:text-black font-tech font-bold text-xs flex items-center justify-center shrink-0 border border-border/60">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-tech font-bold text-sm text-foreground">
                      {review.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {review.role} · {review.company}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#929292] shrink-0 hidden sm:block">
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feedback Banner */}
        <div className="mt-12 p-4 bg-card border border-border/60 clip-corner flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#edea46]"></span>
            <span>CONSISTENT CLIENT SATISFACTION & ON-TIME DELIVERY RECORD</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-foreground font-bold bg-[#edea46] text-black px-2 py-0.5 clip-corner-sm">
              5.0 / 5.0 AVERAGE RATING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
