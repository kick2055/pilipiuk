import { motion } from "motion/react";
import { Upload, Cpu, ShieldCheck, Box, CheckCircle2 } from "lucide-react";
import { useState, useRef, ChangeEvent, FormEvent } from "react";

export default function ThreeD() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadSuccess(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }, 1500);
  };

  return (
    <main className="pt-32 pb-20 px-6 technical-grid">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] block mb-4">Laboratory / 01</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">DIGITAL TO<br /> <span className="italic text-accent">PHYSICAL.</span></h1>
            <p className="max-w-xl text-white/50 text-lg leading-relaxed">
              We operate an array of high-precision SLS, FDM, and SLA printers to transform 
              industrial designs into reality.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Cpu />, title: "Precision Engineering", desc: "0.05mm layer height for ultra-smooth surfaces and tight mechanical tolerances." },
            { icon: <ShieldCheck />, title: "Tough Materials", desc: "Carbon fiber reinforced filaments and industrial resins for functional end-use parts." },
            { icon: <Box />, title: "Design Service", desc: "Don't have a model? Our engineers can draft your concept from rough sketches." }
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-10 flex flex-col gap-6 border border-white/10 rounded-2xl">
              <div className="text-accent">{feature.icon}</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Upload Portal */}
        <section className="bg-white text-black p-12 md:p-20 rounded-3xl overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 serif">UPLOAD YOUR .STL</h2>
              <p className="text-black/60 mb-8 max-w-sm">
                Already have a design? Upload your file for a material suitability audit 
                and a direct cost estimate.
              </p>
              <form className="space-y-6 max-w-md" onSubmit={handleSubmit}>
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-black/10 rounded-2xl cursor-pointer hover:bg-black/5 transition-all relative">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 text-black/40">
                    {uploadSuccess ? (
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                         <CheckCircle2 size={48} className="mb-4 text-green-600" />
                         <p className="mb-2 text-sm font-semibold tracking-tight uppercase text-green-600">Model Received Successfully</p>
                         <p className="text-xs">We will contact you shortly</p>
                      </motion.div>
                    ) : (
                      <>
                        <Upload size={32} className="mb-4" />
                        <p className="mb-2 text-sm font-semibold tracking-tight uppercase">
                          {file ? file.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs">STL, OBJ, or 3MF (MAX. 50MB)</p>
                      </>
                    )}
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".stl,.obj,.3mf"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select className="bg-black/5 border-none p-4 rounded-xl text-xs font-bold uppercase tracking-widest outline-none">
                    <option>PLA+ (Strong)</option>
                    <option>PETG (Heat Resistant)</option>
                    <option>ABS (Industrial)</option>
                    <option>Resin (Visual detail)</option>
                  </select>
                  <button 
                    type="submit" 
                    disabled={!file || isUploading}
                    className={`p-4 font-bold uppercase tracking-widest text-xs transition-colors ${
                      !file || isUploading 
                        ? 'bg-black/20 text-black/40 cursor-not-allowed' 
                        : 'bg-black text-white hover:bg-accent'
                    }`}
                  >
                    {isUploading ? "Processing..." : "Request Quote"}
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden md:block">
               <img 
                 src="https://images.unsplash.com/photo-1543069110-6fbd9d749661?q=80&w=1200&auto=format&fit=crop" 
                 alt="3D Printing Detail" 
                 className="w-full aspect-[4/5] object-cover rounded-2xl"
               />
            </div>
          </div>
          {/* Watermark */}
          <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 rotate-90 opacity-[0.03] font-bold text-[200px] pointer-events-none whitespace-nowrap">
            PIL-INDUSTRY
          </div>
        </section>
      </div>
    </main>
  );
}
