import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-slate-200 bg-white pt-24 pb-12 z-10 overflow-hidden mt-10">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/10 to-transparent" />
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 md:grid-cols-4 lg:grid-cols-5 border-b border-slate-100 pb-20">
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="font-heading text-4xl font-black text-slate-900 mb-8">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Niresh</span>.
            </h3>
            <p className="max-w-lg text-xl text-slate-600 font-medium leading-relaxed">
              Premium freelance full-stack developer dedicated to building high-conversion, wildly performant web applications that command attention.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl font-bold text-slate-900 mb-8 tracking-wide">Navigation</h4>
            <ul className="space-y-5 font-semibold text-slate-500 text-lg">
              <li><a href="/#home" className="hover:text-brand-600 transition-colors duration-300">Home</a></li>
              <li><a href="/#about" className="hover:text-brand-600 transition-colors duration-300">About</a></li>
              <li><a href="/#projects" className="hover:text-brand-600 transition-colors duration-300">Projects</a></li>
              <li><a href="/#contact" className="hover:text-brand-600 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl font-bold text-slate-900 mb-8 tracking-wide">Legal</h4>
            <ul className="space-y-5 font-semibold text-slate-500 text-lg">
              <li><Link to="/terms" className="hover:text-brand-600 transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-600 transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-semibold text-lg">
          <p>© {year} Niresh. All rights reserved.</p>
          <p className="flex items-center gap-3">Built with <span className="text-rose-500 text-2xl animate-pulse">♥</span> and modern engineering.</p>
        </div>
      </div>
    </footer>
  );
}
