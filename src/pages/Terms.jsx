import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative flex flex-col selection:bg-brand-500/20">
      <Navbar />
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/2 -translate-y-1/2 z-0" />
      
      <main className="flex-grow flex flex-col mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-16 pt-40 pb-24 z-10 relative">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 tracking-tight drop-shadow-sm">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-slate-600 font-medium space-y-12 bg-white p-10 md:p-16 lg:p-20 rounded-[3rem] border border-slate-100 shadow-[0_20px_80px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p className="leading-relaxed">Welcome to Niresh's freelance portfolio and services portal. By accessing this website, communicating regarding projects, and utilizing my web development services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">2. Services Offered</h2>
            <p className="leading-relaxed">I provide premium full-stack web development services, primarily focusing on modern Javascript frameworks (React, Node.js, etc). All project scopes, features, timelines, and final deliverables will be explicitly agreed upon in writing before the commencement of any work.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">3. Payment Terms & Invoicing</h2>
            <p className="leading-relaxed">Payment structures including milestone payments, upfront deposits, and final delivery payments will be outlined in individual project proposals. Unless otherwise specified, an upfront deposit is required before starting development execution. All invoices are to be paid within the specified timeframe outlined on the invoice.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">4. Intellectual Property & Code Ownership</h2>
            <p className="leading-relaxed">Upon receipt of full and final payment for a project, the intellectual property rights and full ownership of the developed custom code will be transferred completely to the client. I reserve the right to display the completed work, screenshots, and generic descriptions in my personal portfolio unless an NDA is signed prior to the project starting.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">5. Revisions and Maintenance</h2>
            <p className="leading-relaxed">A standard project quote includes a specified number of revisions during the development phase. Once the project is signed off and delivered, any additional feature requests, structural changes, or long-term maintenance will be quoted separately via an ongoing retainer or hourly consulting rate.</p>
          </section>

          <section className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">6. Limitation of Liability</h2>
            <p className="leading-relaxed">While I adhere strictly to engineering best practices and strive for perfection in all codebases, I cannot guarantee that cross-platform software will be entirely bug-free under all edge-case conditions or OS updates. I will not be liable for any indirect, special, or consequential damages arising from the use of the delivered software or unexpected downtimes of third-party hosting services.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
