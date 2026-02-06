"use client";
import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Duele mucho tatuarse?",
    answer: "El dolor es subjetivo, pero lo describiríamos como una molestia constante. Depende de la zona y de tu tolerancia. Nuestro estudio está diseñado para que te relajes y el proceso sea lo más fluido posible."
  },
  {
    question: "¿Cómo cuido mi nuevo tatuaje?",
    answer: "Te entregaremos una guía detallada. En esencia: mantenerlo limpio, hidratado con cremas específicas y, sobre todo, evitar el sol y piscinas durante las primeras dos semanas."
  },
  {
    question: "¿Diseñas piezas personalizadas?",
    answer: "Absolutamente. No copiamos trabajos de otros. Cada tatuaje nace de una sesión de consultoría donde transformamos tu idea en un diseño que fluya con tu anatomía."
  },
  {
    question: "¿Cuál es el tiempo de espera?",
    answer: "Depende de la complejidad. Normalmente tenemos una lista de espera de 2 a 4 semanas. Recomendamos reservar con antelación para proyectos grandes."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  return (
    <div className={`border-b border-white/5 transition-colors duration-500 ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-10 flex items-start gap-6 text-left group px-4"
      >
        {/* Numeración Estilizada */}
        <span className="text-zinc-700 font-mono text-sm mt-1 group-hover:text-amber-500 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1">
          <span className={`text-2xl md:text-3xl font-light uppercase tracking-tighter transition-all duration-500 ${
            isOpen ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
          }`}>
            {question}
          </span>
          
          {isOpen && (
            <div>
              <p className="pt-6 text-zinc-400 max-w-2xl leading-relaxed font-light text-lg">
                {answer}
              </p>
            </div>
          )}
        </div>

        {/* Icono de Interacción Minimalista */}
        <div className="relative h-8 w-8 mt-1 hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-zinc-700 group-hover:bg-amber-500 transition-colors" />
            <div className="h-full w-[1px] bg-zinc-700 group-hover:bg-amber-500 transition-colors absolute" />
          </div>
        </div>
      </button>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#050505] px-6 selection:bg-amber-500 selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              FAQs<span className="text-amber-500">.</span>
            </h2>
          </div>

          <p className="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
            Todo lo que necesitas saber antes de dejar tu marca para siempre.
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA Final Estilo Card Premium */}
        <div className="mt-32 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative p-12 border border-white/5 bg-zinc-900/20 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xl mb-2">¿Tienes una idea específica?</h3>
              <p className="text-zinc-500 text-sm">Hablemos sobre tu próximo proyecto sin compromiso.</p>
            </div>

            <a 
              href="https://wa.me/tu-numero" 
              className="px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-amber-500 transition-colors flex items-center gap-3"
            >
              Consultar Ahora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </a>
          </div>
          </div>

      </div>
    </section>
  );
};

export default FAQ;