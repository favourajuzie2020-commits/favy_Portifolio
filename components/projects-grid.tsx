"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


const projects = [
  {
    id: 1,
    title: "Fintech Mobile App",
    description: "A fintech mobile app designed to make financial activities simple, accessible, and intuitive.",
    category: "UI/UX",
    image: "/Fintech app.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    client: "—",
    year: "—",
    tags: ["Fintech", "Mobile App", "UI/UX"],
    Url: "https://www.behance.net/gallery/239675023/Fintech-App",
    LiveUrl: "",
  },
  {
    id: 2,
    title: "Salad Bar Restaurant Website",
    description: "A restaurant website designed to showcase food offerings and create a smooth browsing experience.",
    category: "UI/UX",
    image: "/Salad website.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    client: "—",
    year: "—",
    tags: ["Restaurant", "Website", "UI/UX"],
    Url: "https://www.behance.net/gallery/240902507/Salad-Bar-Restaurant-website",
    LiveUrl: "https://resturaantwebsite.lovable.app/",
  },
  {
    id: 3,
    title: "AI Therapy App",
    description: "A mental wellness app focused on making emotional support and wellbeing tools approachable.",
    category: "UI/UX",
    image: "/AI%20therapy%20App.png",
    color: "from-blue-500/20 to-cyan-500/20",
    client: "—",
    year: "—",
    tags: ["AI", "Healthcare", "Mobile App"],
    Url: "https://www.behance.net/gallery/253690837/Ai-Therapy-App",
    LiveUrl: "",
  },
  {
    id: 4,
    title: "BRANDA Fashion Landing Page",
    description: "A fashion landing page designed to present a brand through a clean and engaging digital experience.",
    category: "UI/UX",
    image: "/Frame%202095586091.jpg",
    color: "from-pink-500/20 to-red-500/20",
    client: "—",
    year: "—",
    tags: ["Fashion", "Landing Page", "Web Design"],
    Url: "https://www.behance.net/gallery/251834569/Fashion-Landing-Page",
    LiveUrl: "",
  },
  {
    id: 5,
    title: "Alyra AI Assistant",
    description: "An AI assistant app designed to make everyday digital tasks more accessible and intuitive.",
    category: "UI/UX",
    image: "/personal-assistant-ai.png",
    color: "from-purple-500/20 to-pink-500/20",
    client: "—",
    year: "—",
    tags: ["AI", "Mobile App", "UI/UX"],
    Url: "https://www.behance.net/gallery/243483083/AI-ASSISTANT-MOBILE-APP-DESIGN",
    LiveUrl: "",
  },
  {
    id: 6,
    title: "SecuraBox",
    description: "A security-focused experience designed to help users store and manage sensitive information.",
    category: "UI/UX",
    image: "/securabox.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    client: "Securabox",
    year: "2025",
    tags: ["Security", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/211438871/Security-App-ui-design",
    LiveUrl: "https://securabox.vercel.app/",
  },
  {
    id: 7,
    title: "Car Landing Page",
    description: "A user-centered automotive landing page designed to present vehicle details through a clear interface.",
    category: "UI/UX",
    image: "/car_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "Car",
    year: "2024",
    tags: ["Automotive", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/214397639/car-landing-page",
    LiveUrl: "",
  },
  {
    id: 8,
    title: "Internal Logistics App",
    description: "A logistics app designed to support trip planning, delivery coordination, and internal operations.",
    category: "UI/UX",
    image: "/logistics-app.png",
    color: "from-teal-500/20 to-green-500/20",
    client: "—",
    year: "—",
    tags: ["Logistics", "Mobile App", "UI/UX"],
    Url: "https://www.behance.net/gallery/240903405/Internal-Trip-Delivery-Coordination-App",
    LiveUrl: "",
  },
    {
    id: 9,
    title: "Drink Mobile App",
    description: "A drink mobile app designed to present products and provide users with a smooth, engaging browsing experience.",
    category: "UI/UX",
    image: "/drink%20app.jpg",
    color: "from-orange-500/20 to-amber-500/20",
    client: "—",
    year: "—",
    tags: ["Drink", "Mobile App", "UI/UX"],
    Url: "https://www.behance.net/gallery/257599829/Drink-Mobile-App-Sample",
    LiveUrl: "",
  },
  {
    id: 10,
    title: "Furniture Mobile App",
    description: "A furniture shopping app designed to make product discovery and browsing easier for customers.",
    category: "UI/UX",
    image: "/funiture_img.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    client: "Furniture App",
    year: "2024",
    tags: ["Furniture", "E-commerce", "Mobile App"],
    Url: "https://www.behance.net/gallery/212160691/Furniture-Mobile-App-ui-design",
    LiveUrl: "",
  },
  {
    id: 11,
    title: "Healthcare Management App",
    description: "A healthcare interface designed to make healthcare information and management easier to navigate.",
    category: "UI/UX",
    image: "/healthcare_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "Health",
    year: "2024",
    tags: ["Healthcare", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/215202239/Healthcare-Management-Landing-page",
    LiveUrl: "",
  },
    {
    id: 12,
    title: "Luxury Perfume Website",
    description: "A luxury perfume website designed to showcase fragrance products through an elegant and refined digital experience.",
    category: "UI/UX",
    image: "/perfume%20website%20.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "—",
    year: "—",
    tags: ["Perfume", "Luxury", "Website Design"],
    Url: "https://www.behance.net/gallery/243658293/LUXARY-PERFUM-WEBSITE",
    LiveUrl: "",
  },
    {
    id: 13,
    title: "Online Course Landing Page",
    description: "An online course landing page designed to present educational content and make course information easy to explore.",
    category: "UI/UX",
   image: "/course%20landing%20page%20.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    client: "—",
    year: "—",
    tags: ["Education", "Landing Page", "Web Design"],
    Url: "https://www.behance.net/gallery/213336395/online-course-landing-page-ui-design",
    LiveUrl: "",
  },
]

const categories = ["All", "UI/UX"]
export function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="relative py-16 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "border-white/20 bg-[#151515]/80 hover:bg-[#151515] text-white",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    project.color,
                  )}
                />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] backdrop-blur-sm enhanced-card h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    <AnimatePresence>
                      {activeProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <a
                            href={project.Url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white"
                          >
                            <ExternalLink className="h-6 w-6" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center rounded-full border border-white/20 bg-[#151515]/80 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm text-white">
                        {project.category}
                      </span>
                      <a
                        href={project.Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515]/80 text-white backdrop-blur-sm"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                   <p className="text-white mb-4">{project.description}</p>
                 {project.LiveUrl && (
  <a
    href={project.LiveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors mt-4"
  >
    Live Preview
    <ExternalLink className="h-4 w-4" />
  </a>
)}

                   {/* Add safety check for tags */}
                       {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                           {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-full">
                                {tag}
                                </span>
                                ))}
                                </div>
                             )}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                      <div className="text-sm text-white">
                        <span className="text-white/60">Client:</span> {project.client}
                      </div>
                      <div className="text-sm text-white">
                        <span className="text-white/60">Year:</span> {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
