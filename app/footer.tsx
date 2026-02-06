"use client";
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Texto de Fondo Masivo (Watermark) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none translate-y-1/4">
        <h2 className="text-[22vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter text-center whitespace-nowrap">
          Arte Eterno Studio
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start mb-24">
          
          {/* Columna 1: Branding */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-white text-2xl font-black tracking-tighter uppercase">
              Arte<span className="text-amber-500 italic">Eterno.</span>
            </h3>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed mx-auto md:mx-0">
              Transformando visiones en marcas permanentes desde 2012. Especialistas en Blackwork y realismo.
            </p>
          </div>

          {/* Columna 2: Quick Links / Social */}
          <div className="flex flex-col items-center">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Redes Sociales</h4>
            <div className="flex gap-8">
              {['Instagram', 'TikTok', 'Behance'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-zinc-500 hover:text-white transition-all text-xs uppercase tracking-widest group flex flex-col items-center gap-2"
                >
                  <span>{social}</span>
                  <span className="h-px w-0 bg-amber-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3: Tech Stack & Credits */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-6 md:mb-8">Desarrollo</h4>
            <div className="flex items-center gap-3 text-zinc-500">
              <span className="text-[10px] uppercase tracking-widest">Stack:</span>
              <span className="text-white text-xs font-mono bg-white/5 px-3 py-1 border border-white/10 rounded-sm">
                Next.js + Framer
              </span>
            </div>
          </div>
        </div>

        {/* Línea Divisoria Final */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
              © {currentYear} • All Rights Reserved
            </p>
          </div>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4 group"
          >
            Volver Arriba
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-colors">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;