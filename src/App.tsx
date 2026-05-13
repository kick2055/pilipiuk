/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./views/Home.tsx";
import ThreeD from "./views/Services/ThreeD.tsx";
import LED from "./views/Services/LED.tsx";
import WoodResin from "./views/Services/WoodResin.tsx";
import Quote from "./views/Quote.tsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d" element={<ThreeD />} />
          <Route path="/led" element={<LED />} />
          <Route path="/resin" element={<WoodResin />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        
        {/* Footer */}
        <footer className="p-8 md:p-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-12 bg-[#080808]">
          <div className="max-w-md">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">The Laboratory Standard</h3>
            <p className="text-xl md:text-2xl leading-tight text-white/80 font-serif italic">
              “Precision in every layer, soul in every grain. We bridge the gap between digital manifestation and physical reality.”
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <div className="flex gap-4 mb-6">
              <div className="w-8 h-[1px] bg-white/20 mt-2"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-mono">
                Services: FDM / SLS / SLA / CNC / EPOXY
              </span>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-white/5 text-[9px] uppercase tracking-tighter border border-white/10 font-bold">Warsaw Lab</div>
              <div className="px-3 py-1.5 bg-white/5 text-[9px] uppercase tracking-tighter border border-white/10 font-bold">Priority Build</div>
              <div className="px-3 py-1.5 bg-white/5 text-[9px] uppercase tracking-tighter border border-white/10 font-bold">Global Dispatch</div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
