import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/#home', isInternal: true },
  { label: 'About', href: '/#about', isInternal: true },
  { label: 'Projects', href: '/#projects', isInternal: true },
  { label: 'Contact', href: '/#contact', isInternal: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-slate-100/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm' : 'bg-slate-100/80 backdrop-blur-xl border-b border-slate-200/60'}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a href="/" className="font-heading text-2xl font-extrabold tracking-widest text-slate-900 uppercase">
          NIRESH.
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const className =
              'text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-500 after:transition-all hover:after:w-full tracking-wide';

            if (!link.isInternal) {
              return (
                <Link key={link.href} to={link.href} className={className}>
                  {link.label}
                </Link>
              );
            }

            return (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-3xl md:hidden shadow-lg"
          >
            <div className="mx-auto flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => {
              const className =
                'text-xl font-heading font-semibold text-slate-700 transition hover:text-brand-600';

              if (!link.isInternal) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={className}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {link.label}
                </a>
              );
            })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
