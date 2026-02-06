"use client";
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      // Detectar si el usuario ha bajado lo suficiente para cambiar el estilo
      setIsScrolled(window.scrollY > 50);

      // Lógica de mostrar/ocultar
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); // Bajando
      } else {
        setIsVisible(true); // Subiendo
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Estudio', href: '#about' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Reservar', href: '#booking', primary: true },
  ];

  return (
    <>
      {isVisible && (
        <nav
          className={`fixed top-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" className="relative z-[60] group">
            <span className="text-white font-black tracking-tighter text-2xl uppercase flex items-center gap-1">
              Arte<span className="text-amber-500 italic group-hover:text-white transition-colors">Eterno</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-[10px] uppercase tracking-[0.4em] font-bold transition-colors group ${
                  link.primary ? 'bg-white text-black px-6 py-2.5 hover:bg-amber-500' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {!link.primary && (
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[60] md:hidden flex flex-col gap-1.5 p-2"
          >
            <span 
              className={`w-6 h-[1px] bg-white block transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`w-6 h-[1px] bg-white block transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`w-6 h-[1px] bg-white block transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </nav>
      )}

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[55] bg-zinc-950 flex flex-col items-center justify-center gap-8 transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-white uppercase tracking-tighter hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="absolute bottom-12 text-zinc-600 text-[10px] uppercase tracking-[0.5em]">
            Madrid • Studio
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;