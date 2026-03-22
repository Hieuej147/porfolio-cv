import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

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
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.5 }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {/* Contact items with stagger */}
            <motion.div
              className="space-y-6 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Email */}
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="hihigani@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+7859757295"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    7837438537
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    An Giang, Go Quao
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="pt-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
            >
              <h4 className="text-primary mb-4">Contact with me</h4>
              <motion.div
                className="flex space-x-4 justify-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <Linkedin />, href: "" },
                  { icon: <Twitter />, href: "" },
                  { icon: <Instagram />, href: "" },
                  { icon: <Twitch />, href: "" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="bg-card p-8 rounded-lg shadow-xs"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={2}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </motion.div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.p
                  className="text-green-500 text-sm"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Sent success! 🎉
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  className="text-red-500 text-sm"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Something wrong. Please try again!
                </motion.p>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "own-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <motion.span
                  animate={isSubmitting ? { x: [0, 4, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  <Send size={16} />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
