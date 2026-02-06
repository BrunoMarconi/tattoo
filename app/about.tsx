"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="py-32 bg-[#050505] px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* 1. Composición de Imágenes Dinámica */}
          <div className="relative group">
            {/* Imagen Principal */}
            <div className="relative z-10 w-4/5 aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
              <img
                src="/about.webp"
                alt="Artista trabajando"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Imagen Secundaria (Superpuesta) */}
            <div className="absolute -bottom-16 -right-4 w-3/5 aspect-square overflow-hidden border-[12px] border-[#050505] z-20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1000" 
                alt="Detalle del estudio" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto de Fondo (EST. 2012) con Outline */}
            <div className="absolute -left-20 top-0 hidden xl:block pointer-events-none">
              <span className="text-transparent font-black text-[12rem] leading-none uppercase select-none"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                EST.<br/>2012
              </span>
            </div>
          </div>

          {/* 2. Columna de Texto Editorial */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
                The Mastermind
              </span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Más que tinta, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700 italic font-serif py-2">
                  identidad.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                Con más de una década trazando historias, mi enfoque fusiona la agresividad del 
                <span className="text-white font-bold px-2">Blackwork</span> 
                con la delicadeza de la anatomía. No solo tatúo; diseño piezas que envejecen con carácter.
              </p>
            </div>

            {/* Grid de Características con Iconos Minimalistas */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-y border-white/10 py-10">
              <div className="group">
                <div className="h-8 w-8 mb-4 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-500">
                  <div className="w-1 h-1 bg-white" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">El Manifiesto</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Cada diseño es irrepetible. La piel merece originalidad, no copias de internet.
                </p>
              </div>
              <div className="group">
                <div className="h-8 w-8 mb-4 border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                  <div className="w-4 h-[1px] bg-zinc-700 group-hover:bg-white" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Estándar Quirúrgico</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Higiene de grado médico en un ambiente privado diseñado para tu comodidad.
                </p>
              </div>
            </motion.div>

            
            {/* Botón de Acción Refinado */}
            <motion.button className="flex items-center gap-6 group w-fit">
              <div className="relative">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-amber-500 transition-colors">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-zinc-400 group-hover:text-white transition-colors">
                Ver filosofía de trabajo
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;