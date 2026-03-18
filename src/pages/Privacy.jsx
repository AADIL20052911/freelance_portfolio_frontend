import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative flex flex-col selection:bg-brand-500/20">
      <Navbar />
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/2 -translate-y-1/2 z-0" />
      
      <main className="flex-grow flex flex-col mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-16 pt-40 pb-24 z-10 relative">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 tracking-tight drop-shadow-sm">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-slate-600 font-medium space-y-12 bg-white p-10 md:p-16 lg:p-20 rounded-[3rem] border border-slate-100 shadow-[0_20px_80px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">1. Information Collection</h2>
            <p className="leading-relaxed">When you submit an inquiry through the Contact Form, I collect basic information including your name, email address, and project details. This information is securely stored in my database to help me understand your project specifications and respond chronologically.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">2. Data Usage</h2>
            <p className="leading-relaxed">Your submitted data is strictly restricted to internal business use—specifically for contacting you regarding your web development inquiry, invoicing, and keeping track of our agreements. I do not share, sell, or rent your personal information to third parties.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">3. Cookies and Tracking</h2>
            <p className="leading-relaxed">The website utilizes simple, essential mechanisms to ensure smooth operation across endpoints (like saving dark/light mode preferences if applicable, or persisting session authentication for admin boundaries). No excessive or invasive third-party tracking scripts monitor your raw browsing activity within this portfolio.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">4. Data Deletion Rights</h2>
            <p className="leading-relaxed">If you wish to have your contact details, project conversations, or related data entirely removed from my database at any time, please contact me directly at the email listed on the website, and I will execute a manual cascade deletion within 48 hours.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
