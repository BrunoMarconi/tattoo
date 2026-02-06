import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // <--- 1. Importamos el Link de Next.js

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* ... (Todo tu código de Background igual) ... */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Tattoo Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover w-full h-full grayscale opacity-40 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        {/* ... (Todo tu código de Título e "Eterno" igual) ... */}
        
        {/* Badge Superior */}
        <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 border border-white/10 rounded-full bg-white/[0.03] backdrop-blur-xl group cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
          </span>
          <span className="text-[10px] text-zinc-400 uppercase tracking-[0.4em] font-semibold">
            Booking Abierto — Madrid 2026
          </span>
        </div>

        <div className="mb-2">
          <div className="flex justify-center gap-2 md:gap-6">
            {["A", "R", "T", "E"].map((char, i) => (
              <span key={i} className="text-7xl md:text-[13rem] font-black text-white leading-none tracking-tighter hover:text-amber-500 transition-colors duration-500 cursor-default">{char}</span>
            ))}
          </div>
        </div>
        <h2 className="text-3xl md:text-6xl font-serif italic text-zinc-500 mb-40 tracking-tight">Eterno</h2>

        {/* --- SECCIÓN DE BOTONES --- */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* 2. CAMBIAMOS EL <a> POR <Link> PARA IR A LA PASARELA */}
          <Link 
            href="paguito" 
            className="group relative px-24 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:text-white text-center"
          >
            <span className="relative z-10">Pagar Reserva</span>
            <div className="absolute inset-0 bg-zinc-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <a href="#portfolio" className="group flex items-center gap-3 px-6 py-4 text-white text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700 italic font-serif">
              Explorar Portfolio
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="group-hover:translate-x-2 transition-transform duration-300 text-amber-500">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      {/* ... (Resto de decoración igual) ... */}
    </section>
  );
};

export default Hero;