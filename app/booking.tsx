"use client";
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica de envío (API, EmailJS, etc.)
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-32 bg-[#050505] px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Columna de Información */}
          <div className="flex flex-col">
            <div>
              <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
                Book your session
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                Hagamos algo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200 italic font-serif">permanente.</span>
              </h2>
              <p className="text-zinc-500 text-lg mb-12 max-w-md leading-relaxed">
                Cada gran tatuaje comienza con una conversación. Cuéntame tu visión y la transformaremos en una pieza de colección.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500/50 mb-4 font-bold">El Estudio</h4>
                <p className="text-zinc-300 font-light leading-relaxed">
                  Calle de la Tinta 123, <br /> 
                  Distrito de Arte, Madrid
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500/50 mb-4 font-bold">Contacto Directo</h4>
                <p className="text-zinc-300 font-light mb-1">info@arteeterno.com</p>
                <p className="text-zinc-300 font-light">+34 600 000 000</p>
              </div>
            </div>
          </div>

          {/* Formulario con Animación de Éxito */}
            <div className="relative min-h-[600px] flex items-center">
              {!isSubmitted ? (
                <form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 bg-zinc-950 p-10 md:p-16 border border-white/10 shadow-2xl relative z-10"
                >
                  <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-amber-500 transition-colors">Nombre</label>
                    <input required type="text" className="bg-transparent border-b border-zinc-800 py-3 text-white focus:border-white outline-none transition-all font-light placeholder:text-zinc-800" placeholder="Tu nombre completo" />
                  </div>

                  <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-amber-500 transition-colors">Email</label>
                    <input required type="email" className="bg-transparent border-b border-zinc-800 py-3 text-white focus:border-white outline-none transition-all font-light placeholder:text-zinc-800" placeholder="email@estudio.com" />
                  </div>

                  <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-amber-500 transition-colors">Lugar del Tatuaje</label>
                    <select required className="bg-transparent border-b border-zinc-800 py-3 text-white focus:border-white outline-none transition-all font-light [&>option]:text-black [&>option]:bg-zinc-900">
                      <option value="" disabled defaultValue="">Selecciona una ubicación</option>
                      <option value="brazo">Brazo</option>
                      <option value="antebrazo">Antebrazo</option>
                      <option value="espalda">Espalda</option>
                      <option value="pecho">Pecho</option>
                      <option value="pierna">Pierna</option>
                      <option value="pantorrilla">Pantorrilla</option>
                      <option value="costado">Costado</option>
                      <option value="cuello">Cuello</option>
                      <option value="muñeca">Muñeca</option>
                      <option value="tobillo">Tobillo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3 group md:col-span-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-amber-500 transition-colors">Concepto de la Obra</label>
                    <textarea required rows={4} className="bg-transparent border-b border-zinc-800 py-3 text-white focus:border-white outline-none transition-all font-light resize-none placeholder:text-zinc-800" placeholder="Describe los detalles y el estilo..." />
                  </div>

                  <div className="md:col-span-2 pt-6">
                    <button type="submit" className="group relative w-full overflow-hidden bg-white py-6 text-black font-black uppercase tracking-[0.4em] text-xs transition-all active:scale-95">
                      <span className="relative z-10">Enviar Propuesta</span>
                      <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="w-full text-center p-12 border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
                  <div className="w-20 h-20 border border-amber-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Solicitud Recibida</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm mx-auto">
                    Tu visión ya está en mi bandeja de entrada. Analizaré los detalles y me pondré en contacto contigo en las próximas <span className="text-white font-bold">48 horas</span>.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] uppercase tracking-[0.4em] text-amber-500 hover:text-white transition-colors"
                  >
                    ← Enviar otra idea
                  </button>
                </div>
              )}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;