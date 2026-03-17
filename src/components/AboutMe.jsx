import { motion } from "framer-motion";
import { Briefcase, Code, Shield, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        About<span className="text-primary"> Me</span>
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Cột nội dung text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-foreground">
            Passionate Web Developer & Tech Creator
          </h3>

          {/* Đã cập nhật số năm kinh nghiệm */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a year of hands-on experience in web development, I specialize
            in creating responsive, accessible, and performant web applications
            using modern technologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="own-button">
              {" "}
              Get In Touch
            </a>
            <a
              href=""
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 "
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  {" "}
                  Creating responsive websites and web applications with modern
                  frameworks
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            {" "}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX design</h4>
                <p className="text-muted-foreground">
                  {" "}
                  Designing intuitive and engaging user interfaces for a
                  seamless user experience
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            {" "}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Cyber Security</h4>
                <p className="text-muted-foreground">
                  {" "}
                  Implementing security best practices to protect data and
                  ensure application integrity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
