// app/skills/page.js
'use client';
import { motion } from 'framer-motion';
import { HomeButton } from '../components/HomeButton';

const skills = [
  { id: 1, name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
  { id: 2, name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
  { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
  
  { id: 4, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Framework' },
  { id: 5, name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Framework' },
  { id: 6, name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', category: 'Framework' },
  
  { id: 7, name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'CSS Framework' },
  { id: 8, name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', category: 'CSS Framework' },
  
  { id: 9, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
  { id: 10, name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'Backend' },
  
  { id: 11, name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'Backend Framework' },
  
  { id: 12, name: 'Android Studio', icon: 'https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png', category: 'Mobile' },
  
  { id: 13, name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
  { id: 14, name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
  { id: 15, name: 'Firebase', icon: 'https://brandeps.com/logo-download/F/Firebase-logo-02.png', category: 'Database' },
  
  { id: 16, name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
  { id: 17, name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { id: 19, name: 'Fork', icon: 'https://git-fork.com/images/logo.png', category: 'Tools' },
  { id: 18, name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', category: 'Tools' }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-retro-dark p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-retro text-retro-yellow text-center mb-12 pixel-text">
          {'< SKILLS />'}
        </h1>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill-card bg-retro-yellow border-4 border-retro-brown p-4
                       transform hover:scale-105 transition-all duration-200
                       shadow-[4px_4px_0px_0px_rgba(184,92,56,1)]"
            whileHover={{
              y: -5,
              boxShadow: '8px 8px 0px 0px rgba(184,92,56,1)'
            }}
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
          >
            <div className="bg-retro-dark p-4 rounded-sm mb-3">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 mx-auto filter-pixel"
              />
            </div>
            <p className="text-center font-retro text-retro-brown text-sm">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <HomeButton />
     
    </div>
  );
}