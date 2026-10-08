import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, FolderGit2, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "E-Commerce Microservices & AI Agent",
    category: "DISTRIBUTED BACKEND",
    badge: "MICROSERVICES",
    description:
      "Enterprise event-driven microservices backend built with NestJS 11 and gRPC over HTTP/2. Features PostgreSQL with Prisma ORM, Redis caching, Inngest event orchestration, Stripe payment webhooks, and an intelligent Python LangGraph AI agent runtime with automated AWS EKS CI/CD.",
    image: "/projects/api.png",
    tags: [
      "NestJS 11",
      "gRPC (HTTP/2)",
      "PostgreSQL",
      "Prisma ORM",
      "Inngest",
      "Python LangGraph",
      "Docker / AWS EKS",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/ecommerce-backend",
  },
  {
    id: "02",
    title: "E-Commerce Customer Storefront",
    category: "FULL-STACK COMMERCE",
    badge: "STOREFRONT",
    description:
      "Modern, high-performance customer-facing storefront web application. Built with Next.js 16 App Router and React 19, featuring dynamic product color variant swatches, featured hero showcase, responsive shopping cart, Stripe online checkout, and self-service order tracking.",
    image: "/projects/ecommerce-store.png",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "TanStack Query",
      "Stripe Checkout",
      "Clerk Auth",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/E-commerce",
  },
  {
    id: "03",
    title: "E-Commerce Admin Dashboard",
    category: "ADMIN & ANALYTICS",
    badge: "MANAGEMENT PORTAL",
    description:
      "Centralized administrative backoffice portal for managing products, orders, customers, and revenue analytics. Features real-time KPI metrics, streaming multipart media uploads to private S3/MinIO storage, and perimeter edge security powered by Cloudflare Zero Trust.",
    image: "/projects/dashboard.png",
    tags: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Cloudflare Zero Trust",
      "Clerk Auth",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/dashboard-admin-ecommern",
  },
  {
    id: "04",
    title: "E-Commerce Cloud DevOps & GitOps",
    category: "CLOUD INFRASTRUCTURE",
    badge: "DEVOPS & GITOPS",
    description:
      "Production cloud infrastructure as code (IaC) and automated CI/CD pipeline on AWS. Provisions multi-AZ VPC, Amazon EKS v1.30, AWS ECR, and RDS PostgreSQL via Terraform, with zero-static-key GitHub Actions OIDC authentication, Kubernetes Helm manifests, and Cloudflare Zero Trust edge protection.",
    image: "/projects/devops.svg",
    tags: [
      "Terraform",
      "Amazon EKS",
      "AWS ECR",
      "GitHub Actions OIDC",
      "Kubernetes / Helm",
      "Cloudflare Zero Trust",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/ecommerce-devops",
  },
  {
    id: "05",
    title: "Kikaku AI App Builder",
    category: "AUTONOMOUS AGENT",
    badge: "GENERATIVE AI",
    description:
      "Full-stack generative AI platform that synthesizes complete Next.js applications from natural language prompts. Powered by Inngest Agent Kit and OpenAI GPT-4o, autonomously writing files, executing shell commands, and serving live previews inside isolated E2B sandboxes.",
    image: "/projects/kikaku.png",
    tags: [
      "Next.js 16",
      "Inngest Agent Kit",
      "OpenAI GPT-4o",
      "E2B Sandboxes",
      "tRPC v11",
      "Prisma",
      "Clerk Auth",
    ],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Hieuej147/Kikaku-ui-agent",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] mb-2">
            <span className="font-tech font-bold text-[#edea46] bg-black px-1.5 py-0.5 clip-corner-sm">
              03
            </span>
            <span>// PORTFOLIO WORK · SELECTED PROJECTS</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/60 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-black uppercase tracking-tight text-foreground">
              FEATURED <span className="text-black bg-[#edea46] px-2 py-0.5 clip-corner shadow-tactical-sm">PROJECTS</span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
              [ PRODUCTION BUILDS & OPEN SOURCE ]
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card border border-border clip-corner flex flex-col justify-between shadow-tactical hover:border-[#edea46] hover:shadow-tactical-accent transition-all group text-left"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-foreground/30 z-20">+</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-foreground/30 z-20">+</div>

              <div>
                {/* Project Image Frame */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-black border-b border-border/60">
                  {/* Diagonal Hazard Tape Tab */}
                  <div className="absolute top-0 right-0 w-24 h-4 bg-hazard z-10 clip-tag" />

                  {/* Project Status Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-0.5 bg-black/80 backdrop-blur-xs text-white font-mono text-[10px] clip-corner-sm border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span>PROJECT {project.id} · {project.badge}</span>
                  </div>

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90 pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#929292] tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#edea46] text-black font-bold clip-corner-sm">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-tech font-bold text-foreground group-hover:text-foreground tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono border border-border/70 bg-surface-tint text-foreground/90 clip-corner-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-border/30 mt-4 flex items-center justify-between gap-3">
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold text-foreground hover:bg-[#edea46] hover:text-black clip-corner-sm transition-colors border border-border/60"
                >
                  <Github size={14} />
                  <span>SOURCE CODE</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#edea46] text-black text-xs font-tech font-bold tracking-wider clip-corner-sm shadow-tactical-sm hover:brightness-110 transition-all"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global GitHub Hub CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14"
        >
          <a
            href="https://github.com/Hieuej147"
            target="_blank"
            rel="noreferrer"
            className="w-full relative p-6 bg-card border border-border clip-corner shadow-tactical hover:border-[#edea46] hover:shadow-tactical-accent transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group"
          >
            {/* Diagonal Caution strip */}
            <div className="absolute top-0 left-0 w-32 h-2 bg-hazard opacity-60" />

            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-foreground text-background dark:bg-white dark:text-black clip-corner-sm">
                <FolderGit2 size={24} />
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#929292] tracking-wider uppercase">
                  GITHUB PROFILE · OPEN SOURCE
                </div>
                <h4 className="font-tech font-bold text-base sm:text-lg text-foreground">
                  EXPLORE ALL REPOSITORIES & OPEN-SOURCE EXPERIMENTS
                </h4>
              </div>
            </div>

            <div className="endfield-btn-primary self-stretch sm:self-auto flex items-center justify-center gap-2 text-xs">
              <span>VISIT GITHUB // @Hieuej147</span>
              <ChevronRight size={16} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

