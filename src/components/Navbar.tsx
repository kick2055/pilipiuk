import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket, Zap, TreePine } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "3D Fabrication", path: "/3d", icon: <Rocket size={18} /> },
    { name: "LED Art", path: "/led", icon: <Zap size={18} /> },
    { name: "Resin Atelier", path: "/resin", icon: <TreePine size={18} /> },
    { name: "Portal", path: "/quote", icon: null },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase leading-none group-hover:text-accent transition-colors">Pilipiuk Industry</h1>
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-mono mt-1">Design & Fabrication</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.filter(l => l.path !== '/quote').map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.path ? "text-accent" : "text-white/50 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/quote"
            className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all"
          >
            Request Quote
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 glass-morphism rounded-2xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif flex items-center gap-4"
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
