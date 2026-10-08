import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radio,
  Send,
  ShieldCheck,
  Terminal,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
        setSubmitStatus("success");
        formRef.current.reset();
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border/40 bg-surface/20 dark:bg-card/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] mb-2">
            <span className="font-tech font-bold text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
              05
            </span>
            <span>// COMMUNICATION · CONTACT DETAILS</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/60 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-black uppercase tracking-tight text-foreground">
              GET IN{" "}
              <span className="text-black bg-[#edea46] px-2 py-0.5 clip-corner shadow-tactical-sm">
                TOUCH
              </span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground hidden md:inline">
              [ AVAILABLE FOR FULL-TIME & CONTRACT OPPORTUNITIES ]
            </span>
          </div>
        </div>

        {/* Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Telemetry & Comm Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-left space-y-6"
          >
            {/* Telemetry Status Console */}
            <div className="relative bg-card border border-border p-5 clip-corner shadow-tactical space-y-4">
              {/* Caution stripe corner */}
              <div className="absolute top-0 right-0 w-20 h-2 bg-hazard opacity-60" />

              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground">
                  <Radio size={14} className="text-[#edea46] animate-pulse" />
                  <span>AVAILABILITY STATUS</span>
                </div>
                <span className="font-mono text-[10px] text-green-500 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  OPEN TO WORK
                </span>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed font-mono">
                Direct channels are open for full-time software engineering
                roles, project contracts, and architectural consultations.
                Expected turnaround time is under 24 hours.
              </p>

              <div className="font-mono text-[11px] space-y-2 pt-2 border-t border-border/40">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">TURNAROUND:</span>
                  <span className="font-semibold text-foreground">
                    &lt; 24 HOURS
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WORK MODE:</span>
                  <span className="font-semibold text-foreground">
                    REMOTE / HYBRID
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">TIMEZONE:</span>
                  <span className="font-semibold text-foreground">
                    Indochina Time (UTC+7)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 font-mono">
              {/* Email */}
              <a
                href="mailto:hihigani@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border clip-corner-sm hover:border-[#edea46] hover:shadow-tactical-sm transition-all group"
              >
                <div className="p-2.5 bg-[#edea46] text-black clip-corner-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    EMAIL
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-foreground group-hover:text-[#edea46] transition-colors">
                    hihigani@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+847837438537"
                className="flex items-center gap-4 p-4 bg-card border border-border clip-corner-sm hover:border-[#edea46] hover:shadow-tactical-sm transition-all group"
              >
                <div className="p-2.5 bg-foreground text-background dark:bg-white dark:text-black clip-corner-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    PHONE
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-foreground group-hover:text-[#edea46] transition-colors">
                    +84 7837438537
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-card border border-border clip-corner-sm">
                <div className="p-2.5 bg-black/5 dark:bg-black/60 text-foreground clip-corner-sm border border-border/40">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    LOCATION
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-foreground">
                    An Giang, Vietnam
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-muted-foreground uppercase mb-3">
                // CONNECT ON SOCIAL
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Hieuej147"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card border border-border hover:bg-[#edea46] hover:text-black clip-corner-sm transition-all shadow-tactical-sm"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card border border-border hover:bg-[#edea46] hover:text-black clip-corner-sm transition-all shadow-tactical-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card border border-border hover:bg-[#edea46] hover:text-black clip-corner-sm transition-all shadow-tactical-sm"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Message Input Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 text-left"
          >
            <div className="relative bg-card border border-border p-6 sm:p-8 clip-corner shadow-tactical space-y-6">
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

              {/* Form Title */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div>
                  <h3 className="font-tech font-bold text-lg sm:text-xl text-foreground">
                    SEND A MESSAGE
                  </h3>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    [ HAVE A QUESTION OR OPPORTUNITY? REACH OUT DIRECTLY ]
                  </span>
                </div>
              </div>

              {/* Form Element */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5 font-mono">
                  <label
                    htmlFor="user_name"
                    className="block text-xs font-semibold text-foreground uppercase"
                  >
                    // YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="e.g. John Doe / Hiring Manager"
                    className="w-full px-4 py-3 bg-background border border-border clip-corner-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#edea46] focus:ring-1 focus:ring-[#edea46] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 font-mono">
                  <label
                    htmlFor="user_email"
                    className="block text-xs font-semibold text-foreground uppercase"
                  >
                    // YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="e.g. contact@domain.com"
                    className="w-full px-4 py-3 bg-background border border-border clip-corner-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#edea46] focus:ring-1 focus:ring-[#edea46] transition-colors"
                  />
                </div>

                {/* Message Payload */}
                <div className="space-y-1.5 font-mono">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-foreground uppercase"
                  >
                    // YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project, team role, or collaboration scope..."
                    className="w-full px-4 py-3 bg-background border border-border clip-corner-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#edea46] focus:ring-1 focus:ring-[#edea46] transition-colors resize-none"
                  />
                </div>

                {/* Status Banners */}
                {submitStatus === "success" && (
                  <div className="p-3 bg-[#edea46]/20 border border-[#edea46] clip-corner-sm flex items-center gap-2 font-mono text-xs text-foreground">
                    <CheckCircle2 size={16} className="text-[#edea46]" />
                    <span>
                      MESSAGE SENT SUCCESSFULLY! I WILL GET BACK TO YOU SOON.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-500/20 border border-red-500 clip-corner-sm flex items-center gap-2 font-mono text-xs text-red-400">
                    <span>
                      TRANSMISSION FAILED. PLEASE CHECK NETWORK OR EMAIL
                      DIRECTLY AT HIHIGANI@GMAIL.COM.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "endfield-btn-primary w-full flex items-center justify-center gap-2 py-3.5",
                    isSubmitting && "opacity-75 cursor-not-allowed",
                  )}
                >
                  <Send size={15} />
                  <span>
                    {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE  >"}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
