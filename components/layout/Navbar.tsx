import React, { useRef, useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  };

  const isHashLinkActive = (href: string) => location.pathname === '/' && location.hash === href.slice(href.indexOf('#'));

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[#C6A75E] focus:text-[#0F1E2E] focus:font-bold focus:rounded-sm focus:outline-none"
      >
        Saltar al contenido
      </a>

      <nav
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-700 ${
          scrolled
            ? 'bg-[#0F1E2E]/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center space-x-3 group shrink-0"
              aria-label="Inicio - Diana Marcela Bermúdez Cuevas"
            >
              <Logo className="w-8 h-8 md:w-9 md:h-9" light={true} />
              <div className="flex flex-col justify-center">
                <span className="text-sm md:text-base font-bold tracking-[0.2em] text-[#F7F5F0] serif leading-none uppercase">
                  DIANA MARCELA
                </span>
                <span className="text-[7px] md:text-[8px] tracking-[0.4em] text-[#C6A75E] font-bold uppercase mt-1 opacity-90">
                  BERMÚDEZ CUEVAS
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {NAV_LINKS.map((link) => {
                const isHash = link.href.includes('#');
                const className = ({ isActive }: { isActive: boolean }) =>
                  `text-[9px] font-bold uppercase tracking-[0.3em] transition-colors relative group py-2 ${
                    isActive || (isHash && isHashLinkActive(link.href))
                      ? 'text-[#C6A75E]'
                      : 'text-[#F7F5F0]/60 hover:text-[#C6A75E]'
                  }`;
                return isHash ? (
                  <Link key={link.name} to={link.href} className={className({ isActive: false })}>
                    {link.name}
                    <div className="absolute -bottom-[2px] left-0 w-full h-px bg-[#C6A75E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Link>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={className}
                  >
                    {link.name}
                    <div className="absolute -bottom-[2px] left-0 w-full h-px bg-[#C6A75E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </NavLink>
                );
              })}

              <Link
                to="/#contacto"
                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-[9px] shadow-xl group"
                aria-label="Ir a la sección de contacto"
              >
                Contacto
                <ArrowUpRight
                  size={13}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0F1E2E]"
                />
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpen(true)}
                className="text-[#F7F5F0] p-2 hover:text-[#C6A75E] transition-colors"
                aria-label="Abrir menú"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {isOpen ? (
          <>
            <div
              id="mobile-menu"
              className="fixed top-4 right-4 h-auto w-64 bg-[#0F1E2E]/90 backdrop-blur-xl z-60 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[-10px_10px_40px_rgba(0,0,0,0.5)] flex flex-col rounded-2xl border border-white/10 translate-x-0 opacity-100 scale-100"
            >
              <div className="flex flex-col h-full p-6 pt-16 relative">
                <button
                  onClick={closeMenu}
                  className="absolute top-5 right-5 text-[#F7F5F0]/60 hover:text-[#C6A75E] transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex flex-col space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={closeMenu}
                      className={`text-[9px] font-bold uppercase tracking-[0.2em] py-4 px-4 transition-all rounded-lg border-l-2 ${
                        isHashLinkActive(link.href)
                          ? 'text-[#C6A75E] border-[#C6A75E] bg-white/5'
                          : 'text-[#F7F5F0]/70 border-transparent hover:text-[#C6A75E] hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="/#contacto"
                    onClick={closeMenu}
                    className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-[9px] shadow-xl"
                    aria-label="Ir a la sección de contacto"
                  >
                    Contacto
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-55 transition-opacity duration-500 opacity-100 pointer-events-auto"
              onClick={closeMenu}
            ></div>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;