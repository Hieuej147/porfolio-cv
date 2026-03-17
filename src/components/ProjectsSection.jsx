import { span } from "framer-motion/client";
import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Planing Schedule Study",
    description: "AI Agent help user make a schedule Study about subjects",
    image: "/projects/test1.png",
    tags: ["React", "Nextjs", "Tailwindcss", "Python"],
    demoUrl: "#",
    gitHuhUrl: "#",
  },
  {
    id: 2,
    title: "Planing Schedule Study",
    description: "AI Agent help user make a schedule Study about subjects",
    image: "/projects/test2.png",
    tags: ["React", "Nextjs", "Tailwindcss", "Python"],
    demoUrl: "#",
    gitHuhUrl: "#",
  },
  {
    id: 3,
    title: "Planing Schedule Study",
    description: "AI Agent help user make a schedule Study about subjects",
    image: "/projects/test3.png",
    tags: ["React", "Nextjs", "Tailwindcss", "Python"],
    demoUrl: "#",
    gitHuhUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are several of my recent projects. Each project was carefully
          built with attention to detail, functionality, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                {" "}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((key, tag) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-primary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80  hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      target="_blank"
                      href={project.gitHuhUrl}
                      className="text-foreground/80  hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com//Hieuej147"
            className="own-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My github <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
