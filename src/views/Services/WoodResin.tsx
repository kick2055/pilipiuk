import { motion, AnimatePresence } from "motion/react";
import { TreePine, Droplets, Ruler, Timer, MousePointer2 } from "lucide-react";
import { useState } from "react";

export default function WoodResin() {
  const [selectedColor, setSelectedColor] = useState("#065F46");
  const [customColor, setCustomColor] = useState("#FF4E00");
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const colors = [
    { name: "Forest", hex: "#065F46" },
    { name: "Deep Ocean", hex: "#1E3A8A" },
    { name: "Void Black", hex: "#000000" },
    { name: "Amber", hex: "#7C2D12" }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] block mb-4 italic uppercase">Artisan / 03</span>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 serif italic text-white">NATURE.<br /> <span className="text-accent not-italic">RESIN.</span></h1>
              <p className="max-w-xl text-white/50 text-lg font-light leading-relaxed">
                From live-edge walnut slabs to crystal clear deep-pour epoxy. Our atelier 
                specializes in "River Tables" and custom wooden art pieces that celebrate 
                the imperfections of nature.
              </p>
            </motion.div>
            <div className="hidden md:block">
              <div className="bg-white/5 backdrop-blur-md p-10 space-y-8 rounded-2xl border border-white/10">
                 <h4 className="text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4">Wood Selection</h4>
                 <div className="flex flex-wrap gap-3">
                    {["European Oak", "Black Walnut", "Aromatic Cedar", "African Mahogany"].map(wood => (
                      <span key={wood} className="px-4 py-2 border border-white/10 text-[10px] uppercase font-bold text-white/60 tracking-widest hover:border-accent hover:text-accent cursor-default transition-colors">
                        {wood}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </header>

        {/* The Customizer Preview Section */}
        <section className="bg-white text-black p-10 md:p-20 rounded-[3rem] mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 serif underline decoration-accent decoration-8 italic">THE EPOXY<br />CUSTOMIZER.</h2>
              <p className="text-black/60 mb-12 max-w-sm">
                Select your preferred pigment profile. We use high-quality mica powders 
                and translucent dyes for mesmerizing depth.
              </p>
              
              <div className="space-y-12">
                 <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-black/40">1. Select Pigment Tone</h4>
                    <div className="flex flex-wrap gap-6 items-center">
                       {colors.map(color => (
                         <div key={color.hex} className="flex flex-col items-center gap-3">
                            <button 
                              onClick={() => {
                                setSelectedColor(color.hex);
                                setShowCustomPicker(false);
                              }}
                              className={`w-14 h-14 rounded-full border-4 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
                                selectedColor === color.hex && !showCustomPicker ? 'border-accent scale-110' : 'border-black/5'
                              }`} 
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-[8px] uppercase font-bold tracking-tighter opacity-40">{color.name}</span>
                         </div>
                       ))}
                       
                       <div className="flex flex-col items-center gap-3">
                          <button 
                            onClick={() => setShowCustomPicker(!showCustomPicker)}
                            className={`w-14 h-14 rounded-full border-4 border-dashed transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden ${
                              showCustomPicker ? 'border-accent scale-110' : 'border-black/20'
                            }`}
                            style={showCustomPicker ? { backgroundColor: customColor } : {}}
                          >
                            <span className={`text-[10px] font-bold text-center leading-tight p-2 ${showCustomPicker ? 'text-white' : 'text-black/40'}`}>
                              {showCustomPicker ? '' : 'CUSTOM'}
                            </span>
                            {showCustomPicker && (
                              <input 
                                type="color" 
                                value={customColor} 
                                onChange={(e) => {
                                  setCustomColor(e.target.value);
                                  setSelectedColor(e.target.value);
                                }}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                              />
                            )}
                          </button>
                          <span className="text-[8px] uppercase font-bold tracking-tighter opacity-40">Bespoke</span>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
                    <div className="space-y-4">
                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40">Pour Depth</h4>
                       <div className="font-mono text-2xl font-bold flex items-baseline gap-2">
                         85<span className="text-xs">MM</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40">Finish Level</h4>
                       <div className="font-mono text-2xl font-bold italic">PIANO GLOSS</div>
                    </div>
                 </div>

                 <button className="w-full md:w-auto px-12 py-5 bg-black text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent transition-colors flex items-center justify-center gap-4">
                    Lock Design <MousePointer2 size={14} />
                 </button>
              </div>
           </div>
           
           <div className="relative aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-30 mix-blend-overlay pointer-events-none z-10"
                    style={{ backgroundColor: showCustomPicker ? customColor : selectedColor }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1622329227187-578f1f6cba0f?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover rounded-3xl"
                    alt="Resin Preview"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-10 right-10 flex flex-col gap-4 z-20">
                 {[<Droplets size={20} />, <Ruler size={20} />, <Timer size={20} />].map((icon, i) => (
                    <div key={i} className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-2xl border border-black/5">
                       {icon}
                    </div>
                 ))}
              </div>
              
              {/* Floating label */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
              >
                <div className="text-[10px] uppercase font-bold tracking-widest mb-1 opacity-60">Status</div>
                <div className="text-xl font-bold tracking-tighter">PREVIEW ACTIVE</div>
              </motion.div>
           </div>
        </section>

        {/* Process Detail */}
        <section className="py-20 relative border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { title: "Material Aging", desc: "All slabs are kiln-dried to 8% moisture for absolute stability." },
                { title: "Precision Pour", desc: "Vacuum degassed resin ensures zero bubbles in the final piece." },
                { title: "Sanding Cycle", desc: "A 12-stage sanding process from 80 to 5000 grit for mirror clarity." },
                { title: "Hand Finishing", desc: "Rubio Monocoat or Ceramic Pro coatings for food-safe protection." }
              ].map((step, i) => (
                <div key={i} className="space-y-4">
                   <h4 className="text-accent font-serif italic text-xl">{step.title}</h4>
                   <p className="text-white/30 text-sm">{step.desc}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </main>
  );
}
