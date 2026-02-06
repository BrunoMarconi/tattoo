"use client";

import React, { useState } from 'react';
import { Tattoo } from './types/tatoo';
import { motion } from 'framer-motion';

interface GalleryProps {
  tattoos: Tattoo[];
}

const categories = ['All', 'Blackwork', 'Realism', 'FineLine'];

const Portfolio: React.FC<GalleryProps> = ({ tattoos }) => {
  const [filter, setFilter] = useState('All');

  const filteredTattoos = filter === 'All' 
    ? tattoos 
    : tattoos.filter(t => t.category === filter);

  return (
    <section className="py-24 px-6 bg-[#050505] text-white overflow-hidden">
      {/* Cabecera de Sección */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] mb-2 block">
            Curated Works
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Portfolio<span className="text-zinc-700">.</span>
          </h2>
        </div>

        {/* Filtros Estilizados */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                filter === cat ? 'text-black' : 'text-zinc-500 hover:text-white'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {filter === cat && (
                <div className="absolute inset-0 bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Dinámico con AnimatePresence */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        {filteredTattoos.map((tattoo, index) => (
          <div
            key={tattoo.id}
            className={`group relative overflow-hidden bg-zinc-900 border border-white/5 ${
              index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] mb-2">{tattoo.category}</p>
                <h3 className="text-2xl font-bold uppercase leading-none">{tattoo.title}</h3>
                <div className="w-0 group-hover:w-full h-[1px] bg-white/30 mt-4 transition-all duration-700" />
              </div>
            </div>

            <img 
              src={tattoo.imageUrl} 
              alt={tattoo.title}
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
            />

            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA inferior */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center"
      >
        <p className="text-zinc-500 text-sm mb-4 italic">¿Tienes una idea única?</p>
        <a href="#contact" className="inline-block border-b border-amber-500 pb-1 text-sm uppercase tracking-[0.3em] hover:text-amber-500 transition-colors">
          Cuéntanos tu proyecto
        </a>
      </motion.div>
    </section>
  );
};

export default Portfolio;