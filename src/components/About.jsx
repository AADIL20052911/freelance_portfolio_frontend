import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const skills = [
  {
    title: 'Frontend Engineering',
    description: 'React, Next.js, Framer Motion, Tailwind CSS. Building fluid UI/UX.',
    icon: FaReact,
  },
  {
    title: 'Backend Architecture',
    description: 'Node.js, Express, REST/GraphQL APIs. Scalable server logic.',
    icon: FaNodeJs,
  },
  {
    title: 'Database Design',
    description: 'MongoDB, PostgreSQL, Redis. Performant data modeling & caching.',
    icon: FaDatabase,
  },
  {
    title: 'DevOps & Tooling',
    description: 'Git, Docker, CI/CD pipelines, AWS/Vercel deployment operations.',
    icon: FaTools,
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 mb-6 block drop-shadow-sm">About Me</span>
             <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-10 leading-[1.05]">
               Bridging the gap between <span className="text-slate-400 font-medium italic">design</span> and <span className="text-brand-600">development</span>.
             </h2>
             <div className="space-y-8 text-xl text-slate-600 font-medium leading-relaxed">
               <p>
                 I am a premium full-stack developer with a deep passion for creating beautiful, high-performance web applications. I believe that exceptional software is born from obsessive attention to detail, both in the codebase and the user interface.
               </p>
               <p>
                 When I work with clients, my goal is to deliver more than just code. I deliver robust, scalable, and visually stunning digital products that elevate their brand and convert their visitors into loyal customers.
               </p>
             </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={skill.title} 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:border-brand-200"
                >
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-50 border border-slate-100 text-brand-600 shadow-sm group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-accent-500 group-hover:border-transparent transition-all duration-500 group-hover:shadow-md">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                      <p className="text-base text-slate-600 leading-relaxed font-medium transition-colors duration-300">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
