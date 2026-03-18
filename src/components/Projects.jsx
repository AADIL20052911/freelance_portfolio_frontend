import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const projects = [
  {
    id: 1,
    imageUrl: `${API_BASE}/project_photos/safebox.png`,
    description: 'Built a modern web solution focused on performance, high-end design principles, and seamless user experience.',
  },
  {
    id: 2,
    imageUrl: `${API_BASE}/project_photos/granola.png`,
    description: 'Designed a highly available, responsive platform architecture to dramatically improve user engagement and conversion rates.',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-white/40 border-t border-b border-slate-200/50">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 mb-6 block drop-shadow-sm">Selected Work</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-8">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
            A small intersection of design and engineering. Built with passion, performance, and extraordinary attention to detail.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-100 transition-all duration-500 ease-[0.16,1,0.3,1]"
            >
              {/* Image / Visual Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                <img 
                  src={project.imageUrl} 
                  alt="Project showcasing modern web solutions" 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Minimal Text Section */}
              <div className="flex flex-col p-8 sm:p-10 relative z-30 bg-white h-full justify-center">
                <p className="text-slate-700 text-[1.1rem] leading-relaxed font-semibold m-0">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
