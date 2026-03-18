import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919345034653"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="group fixed bottom-8 right-8 z-[100] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] focus:outline-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse overlay */}
      <div className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 pointer-events-none" />
      
      <FaWhatsapp size={36} className="relative z-10" />
      
      <span className="absolute -top-16 right-0 w-max origin-bottom-right rounded-2xl border border-slate-100 bg-white px-6 py-3.5 text-base font-bold text-slate-900 opacity-0 shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-100 pointer-events-none">
        Chat with me on WhatsApp
      </span>
    </motion.a>
  );
}
