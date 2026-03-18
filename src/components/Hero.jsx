import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[95vh] z-10">
      {/* Light Mode Glow effects */}
      <div className="absolute inset-0 -z-10 flex transform-gpu items-center justify-center blur-[120px] opacity-40 mix-blend-multiply overflow-visible">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="aspect-[1] w-[600px] bg-gradient-to-tr from-brand-300 to-accent-300 rounded-full translate-x-[-15%] translate-y-[-10%]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="aspect-[1] w-[500px] bg-gradient-to-tr from-accent-200 to-blue-300 rounded-full translate-x-[15%] translate-y-[20%]" 
        />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/60 px-6 py-2.5 text-sm font-bold tracking-wide text-slate-700 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Available for Freelance Work
            </span>
          </div>
          
          <h1 className="font-heading text-6xl font-black tracking-tighter text-slate-900 lg:text-[6rem] leading-[1.05]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-500 to-accent-600 drop-shadow-sm">Digital</span><br/>Experiences That Scale.
          </h1>
          <p className="mt-10 text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto font-medium">
            I'm a premium full-stack developer helping ambitious startups and businesses build high-converting, wildly performant web applications.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-6 sm:flex-row items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-accent-600 px-12 text-lg font-bold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] transition-all hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.7)] hover:brightness-110"
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded-2xl border-2 border-slate-200 bg-white/50 backdrop-blur-xl px-12 text-lg font-bold text-slate-800 transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating UI Decorations */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-1/4 left-5 xl:left-16 h-28 w-28 border border-slate-100 rounded-3xl bg-white/40 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-400 to-blue-400 blur-md opacity-80"></div>
      </motion.div>
      <motion.div 
        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute bottom-1/4 right-5 xl:right-16 h-40 w-40 border border-slate-100 rounded-full bg-white/40 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent-400 to-pink-400 blur-lg opacity-60"></div>
      </motion.div>
    </section>
  );
}
