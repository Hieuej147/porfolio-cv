import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl md:text-2xl text-foreground/80 opacity-0 animate-fade-in">
              Hi, I'm Hieu 👋
            </h3>
            {/* Thẻ h1 giờ sẽ là TypeAnimation */}
            <div className="opacity-0 animate-fade-in-delay-1 w-full">
              <TypeAnimation
                sequence={[
                  "I'm a Web Developer.",
                  1500,
                  "I build things for the web.",
                  1500,
                  "I love creating beautiful UIs.",
                  1500,
                ]}
                wrapper="h1"
                speed={5}
                className="text-4xl md:text-6xl font-bold text-glow bg-clip-text tracking-tight text-primary"
                repeat={Infinity}
              />
            </div>
            <p className="max-w-xl text-foreground/70 md:text-lg opacity-0 animate-fade-in-delay-3">
              Welcome to my digital space. Here you'll find a collection of my
              projects and skills. Let's build something amazing together!
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="own-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
