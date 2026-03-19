import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendMessage } from '../services/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const updateField = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      await sendMessage(form);
      setStatus({ loading: false, error: '', success: 'Message sent successfully. I will get back to you shortly.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      const message = err?.response?.data?.message || 'Something went wrong. Please try again later.';
      setStatus({ loading: false, error: message, success: '' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative z-10 w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] border border-slate-200 bg-white p-6 sm:p-16 lg:p-24 shadow-[0_20px_80px_rgba(0,0,0,0.05)]"
        >
          {/* Background glow for contact section */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/50 via-transparent to-accent-50/50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/40 blur-[100px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-200/40 blur-[100px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/2 translate-y-1/2" />

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 relative z-10">
            {/* Left Col: Text & Info */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-bold tracking-widest uppercase text-brand-600 mb-6 sm:mb-8 block drop-shadow-sm">Ready to start?</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-slate-900 mb-6 sm:mb-10 leading-[1.1] sm:leading-[1.05]">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 drop-shadow-sm block sm:inline">Powerful.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-16 max-w-lg">
                I am currently open for new freelance opportunities. Whether you have a specific project in mind or just want to explore possibilities, let's talk.
              </p>

              <div className="space-y-10 mt-auto">
                <div className="flex flex-col gap-3 group">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">Email Me At</p>
                  <a href="mailto:nireshtoranto@gmail.com" className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 transition-all duration-300 break-all w-full sm:w-max tracking-tight">
                    nireshtoranto@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-3 group">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">Call Me At</p>
                  <a href="tel:+919345034653" className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 transition-all duration-300 w-max">
                    +91 9345034653
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold tracking-wide text-slate-600 ml-4 uppercase">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={updateField('name')}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-[1.5rem] sm:rounded-3xl border-2 border-slate-100 bg-slate-50 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold tracking-wide text-slate-600 ml-4 uppercase">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={updateField('email')}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-[1.5rem] sm:rounded-3xl border-2 border-slate-100 bg-slate-50 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold tracking-wide text-slate-600 ml-4 uppercase">Project Details</label>
                <textarea
                  value={form.message}
                  onChange={updateField('message')}
                  required
                  placeholder="Tell me about your goals, timeline, and budget..."
                  rows={5}
                  className="w-full resize-none rounded-[1.5rem] sm:rounded-3xl border-2 border-slate-100 bg-slate-50 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                />
              </div>

              {status.error && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-rose-200 bg-rose-50 px-8 py-6 shadow-sm">
                  <p className="text-base font-bold text-rose-600">{status.error}</p>
                </motion.div>
              )}
              {status.success && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-6 shadow-sm">
                  <p className="text-base font-bold text-emerald-600">{status.success}</p>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                className="mt-6 flex h-16 sm:h-20 w-full items-center justify-center rounded-[1.5rem] sm:rounded-3xl bg-gradient-to-r from-brand-600 to-accent-600 px-6 sm:px-8 text-lg sm:text-xl font-black text-white shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
