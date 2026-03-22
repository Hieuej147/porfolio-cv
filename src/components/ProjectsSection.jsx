import { motion } from "framer-motion";
import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BookStudio Dashboard",
    description:
      "AI-powered admin dashboard for managing an e-book platform. Built with Next.js 16 + CopilotKit + LangGraph — AI can write book content, analyze business stats, manage todos, and interact directly with the UI.",
    image: "/projects/dashboard.png",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "CopilotKit",
      "LangGraph",
      "Arcjet",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/ebook-dashboard",
  },
  {
    id: 2,
    title: "BookStudio API",
    description:
      "Full-featured REST API for an e-book store. JWT auth with refresh token rotation, RBAC, Stripe payments, Redis caching, Cloudinary image hosting, and AI agent integration.",
    image: "/projects/api.png",
    tags: [
      "NestJS",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Stripe",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/ebook-api",
  },
  {
    id: 3,
    title: "Kikaku",
    description:
      "AI-powered app builder that generates full Next.js applications from a chat prompt. Uses Inngest Agent Kit + OpenAI GPT-4o to autonomously write files, install packages, and run commands inside an E2B sandbox — with live preview and code explorer.",
    image: "/projects/kikaku.png",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Inngest",
      "E2B",
      "Clerk",
      "PostgreSQL",
      "Prisma",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/Kikaku-ui-agent",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are several of my recent projects. Each project was carefully
          built with attention to detail, functionality, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
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
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Hieuej147"
            className="own-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
          >
            Check My Github <ArrowBigRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
