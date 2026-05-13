import { motion } from "motion/react";
import { Rocket, Zap, TreePine, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const pillars = [
    {
      id: "3d",
      title: "Digital to Physical",
      service: "3D Design & Printing",
      desc: "Using advanced polymers and high-detail resin printers, we bring complex mechanical prototypes and architectural models to life.",
      icon: <Rocket className="text-accent" />,
      image: "https://images.unsplash.com/photo-1631035174780-f65561a35759?q=80&w=1200&auto=format&fit=crop",
      path: "/3d"
    },
    {
      id: "led",
      title: "Illuminated Art",
      service: "Custom LED Decor",
      desc: "Bespoke neon-style LED signage and atmospheric wood-integrated light panels for commercial and residential spaces.",
      icon: <Zap className="text-accent" />,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
      path: "/led"
    },
    {
      id: "resin",
      title: "Nature & Resin",
      service: "Woodworking Atelier",
      desc: "Hand-selected live edge Walnut and Oak slabs combined with crystal clear or colored pigments for heirloom-quality furniture.",
      icon: <TreePine className="text-accent" />,
      image: "https://images.unsplash.com/photo-1622329227187-578f1f6cba0f?q=80&w=1200&auto=format&fit=crop",
      path: "/resin"
    }
  ];

  return (
    <main className="pt-24 min-h-screen flex flex-col">
      {/* Three Pillars Primary View */}
      <section className="flex-1 flex flex-col md:flex-row border-b border-white/10">
        {pillars.map((pillar, index) => (
          <Link
            key={pillar.id}
            to={pillar.path}
            className={`flex-1 flex flex-col group cursor-pointer hover:bg-white/5 transition-all duration-500 p-8 md:p-12 lg:p-16 ${
              index < pillars.length - 1 ? "md:border-r border-white/10" : ""
            }`}
          >
            <motion.div 
              className="flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-[10px] font-mono text-white/30 mb-8 uppercase tracking-[0.2em]">
                0{index + 1} — {pillar.id === '3d' ? 'Technical' : pillar.id === 'led' ? 'Atmosphere' : 'Organic'}
              </span>
              
              <h2 className={`text-4xl lg:text-6xl mb-8 leading-tight tracking-tighter uppercase ${
                pillar.id === 'resin' ? 'font-serif italic normal-case tracking-normal' : 'font-bold'
              }`}>
                {pillar.title.split(' to ')[0]}
                {pillar.title.includes(' to ') && <br />}
                <span className={`${pillar.id === 'led' ? 'text-accent' : ''}`}>
                  {pillar.title.split(' to ')[1] || pillar.title.split(' & ')[1]}
                </span>
                {!pillar.title.includes(' to ') && !pillar.title.includes(' & ') && pillar.title}
              </h2>

              <p className="text-sm md:text-base text-white/50 mb-12 leading-relaxed max-w-sm">
                {pillar.desc}
              </p>

              <div className="mt-auto pt-12">
                <div className="aspect-video w-full bg-charcoal border border-white/5 flex items-center justify-center overflow-hidden relative group-hover:border-white/20 transition-colors">
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-30 group-hover:opacity-60">
                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 font-mono text-[8px] md:text-[10px] tracking-[0.4em] text-white/40 uppercase group-hover:text-white transition-colors text-center px-4">
                    {pillar.id === '3d' ? 'STL / OBJ / STEP RENDERING' : pillar.id === 'led' ? 'CUSTOM RADIANCE MAPPING' : 'ARTISANAL WOODWORKING'}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Process Section - Sophisticated Version */}
      <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-md">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6 font-bold">The Maker Standard</h3>
            <p className="text-3xl md:text-5xl leading-tight tracking-tighter serif italic text-white/90">
              “We don't just sell objects; we sell the ability to turn any raw idea into a physical reality.”
            </p>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { step: "01", title: "CONCEPT", desc: "Digital verification of structural geometry." },
              { step: "02", step_title: "PROTOTYPE", desc: "Physical validation of material properties." },
              { step: "03", step_title: "FABRICATE", desc: "Artisanal execution with industrial precision." },
              { step: "04", step_title: "CALIBRATE", desc: "Final stress testing and finish curing." }
            ].map((p, i) => (
              <div key={i} className="group border-l border-white/10 pl-6">
                <span className="text-[10px] font-mono text-white/20 group-hover:text-accent transition-colors">STEP.0{i + 1}</span>
                <h4 className="text-lg font-bold mt-2 mb-2 tracking-widest uppercase">{p.step_title || p.title}</h4>
                <p className="text-xs text-white/40 max-w-[200px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Journal / Behind the Scenes */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] block mb-4 italic underline">Field Notes</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter serif italic">LABORATORY JOURNAL.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Resin Thermal Dynamics",
                category: "Technical Spec",
                desc: "Calculating the exothermic reaction of a 100mm deep walnut pour to prevent cracking.",
                image: "https://images.unsplash.com/photo-1579546673238-6f685976b92a?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Polishing to 5000 Grit",
                category: "Process Detail",
                desc: "The three-day sanding journey of a Claro Walnut conference table for a private executive suite.",
                image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "SLS Nylon Durability",
                category: "Lab Test",
                desc: "Stress testing our custom-designed mountain bike frame brackets for mechanical failure points.",
                image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"
              }
            ].map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-8 glass-morphism">
                  <img src={post.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={post.title} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent mb-3 block">{post.category}</span>
                <h3 className="text-2xl font-serif italic mb-4 group-hover:underline underline-offset-4 decoration-accent/30">{post.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{post.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white/20 group-hover:text-white transition-colors">
                  Read Journal Entry <ArrowUpRight size={12} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
