"use client";
import { motion } from "framer-motion";
import { HomeButton } from "../components/HomeButton";

const projects = [
  {
    id: 1,
    title: "Akay Dijital Baskı",
    description: "E-ticaret sitesi. Sıfırdan geliştirilen projede full-stack developer olarak yer aldım.",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    type: "E-ticaret",
    link: "https://akaydijitalbaski.vercel.app"
  },
  {
    id: 2,
    title: "Meer",
    description: "E-ticaret platformu. Full-stack geliştirici olarak katkıda bulundum.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "ASP.NET Core MVC", "Bootstrap"],
    type: "E-ticaret",
    link: "https://meer-mocha.vercel.app"
  },
  {
    id: 3,
    title: "Smart Mansion",
    description: "Reklam ve tanıtım sitesi.",
    tags: ["Next.js", "Tailwind CSS"],
    type: "Kurumsal",
    link: "https://smartmansionsoftware.com"
  },
  {
    id: 4,
    title: "CRM Projesi",
    description:
      "Yaz stajı döneminde mevcut CRM projesine geliştirici olarak katkıda bulundum.",
    tags: ["C#", "ASP.NET Core MVC", "Bootstrap"],
    type: "İş Yazılımı",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "Kişisel portfolio websitesi.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    type: "Kişisel",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-retro-dark p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-retro text-retro-yellow text-center mb-12 pixel-text">
          {"< PROJECTS />"}
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
           <motion.button 
           key={project.id}
           onClick={() => project.link && window.open(project.link, '_blank')}
           className="project-card bg-retro-yellow border-4 border-retro-brown p-6
                     relative overflow-hidden group cursor-pointer
                     shadow-[8px_8px_0px_0px_rgba(184,92,56,1)]
                     hover:shadow-[12px_12px_0px_0px_rgba(184,92,56,1)]
                     transition-all duration-300 h-full
                     flex flex-col text-left" 
           variants={{
             hidden: { scale: 0.8, opacity: 0 },
             show: { scale: 1, opacity: 1 },
           }}
           whileHover={{ y: -5 }}
         >
            <div
              className="inline-block px-4 py-1 mb-4
                bg-retro-brown text-retro-yellow text-sm font-retro
                border-2 border-retro-brown
                shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
            >
              {project.type}
            </div>

            <h3 className="text-xl font-retro mb-4 text-retro-brown">
              {project.title}
            </h3>

            <p className="mb-4 text-sm text-retro-brown opacity-90">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {" "}
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-xs font-retro
                 bg-retro-brown text-retro-yellow
                 border-2 border-retro-brown
                 transform hover:scale-105 transition-transform"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Piksel Kenar Efekti */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-2 bg-retro-brown"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-retro-brown"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-retro-brown"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-retro-brown"></div>
            </div>
          
            </motion.button>
          
        ))}
      </motion.div>

      <HomeButton />
    </div>
  );
}
