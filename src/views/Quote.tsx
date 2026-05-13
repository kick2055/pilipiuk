import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Quote() {
  return (
    <main className="pt-32 pb-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="glass-morphism p-10 md:p-20 rounded-3xl"
        >
          <div className="text-center mb-16">
            <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] block mb-4 underline">Project Inquiry Portal</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic font-serif">START YOUR BUILD.</h1>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors"
                id="name-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors"
                id="email-input"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Service Category</label>
              <select className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                <option>Custom 3D Fabrication</option>
                <option>LED Wall Installation</option>
                <option>Resin Furniture Commissions</option>
                <option>General Innovation Consulting</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Project Description</label>
              <textarea 
                rows={5} 
                placeholder="Describe your vision, dimensions, and material preferences..." 
                className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors resize-none"
                id="message-input"
              />
            </div>
            <div className="md:col-span-2 pt-6">
              <button 
                type="submit" 
                className="w-full bg-accent text-[#0A0A0A] py-6 font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-colors"
                id="submit-button"
              >
                Send Commission Request
              </button>
              <p className="mt-8 text-center text-[10px] text-white/20 uppercase tracking-widest italic">
                * Our engineering team typically responds within 24-48 business hours.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
