import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Layout, Settings, Sun } from "lucide-react";

export default function LED() {
  const gallery = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523296-6ca035dbfc5c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] block mb-4">Illuminated Art / 02</span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 italic italic">LUMINA.<br /> <span className="text-accent not-italic">INSTALLATIONS.</span></h1>
            <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light">
              We engineer state-of-the-art LED installations ranging from high-intensity 
              commercial signs to subtle, wood-encased ambient lighting.
            </p>
          </motion.div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-serif underline decoration-accent/30 underline-offset-8 italic">The Technology</h2>
              <p className="text-white/40 leading-relaxed max-w-lg">
                Our LED strips are custom-manufactured with 144 LEDs/meter density, ensuring 
                zero visible hotspots. We use CNC-milled acrylic channels to diffuse light 
                perfectly for that "solid neon" appearance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Settings size={20} />, title: "Smart Control", desc: "WiFi & Bluetooth integration for phone app control." },
                { icon: <Sun size={20} />, title: "Dynamic Modes", desc: "Programmable RGB-IC for addressable color waves." }
              ].map((item, i) => (
                <div key={i} className="border-l border-accent/20 pl-6 py-2">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-xs text-white/30">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video glass-morphism overflow-hidden p-2">
             <img 
               src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1200&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               alt="LED Detail"
             />
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mb-32">
           <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-center mb-20 text-accent underline">Recent Commissions</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gallery.map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-white/5 overflow-hidden group cursor-pointer"
                >
                   <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Work" />
                </motion.div>
              ))}
           </div>
        </section>

        <section className="py-20 bg-accent text-black rounded-3xl text-center px-6">
           <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 serif">READY TO GLOW?</h3>
           <p className="max-w-xl mx-auto mb-10 font-medium">
             Send us your logo or a rough sketch, and our lighting designers will create 
              a digital mockup for your space.
           </p>
           <Link to="/quote" className="inline-block px-12 py-5 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
              Request Your Mockup
           </Link>
        </section>
      </div>
    </main>
  );
}
