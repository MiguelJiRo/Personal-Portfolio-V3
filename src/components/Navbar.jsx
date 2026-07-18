import { useState } from 'react';
import { SECTIONS, SECTION_BY_ID, SECTION_IDS } from '../data/sections';
import { PROFILE, serviceYears } from '../data/profile';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const NAV_FOCUS =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-hangar rounded-sm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);
  const activeSection = useActiveSection(SECTION_IDS);
  const years = serviceYears();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Scrim del menú móvil: fuera del nav porque su backdrop-blur lo
          convertiría en containing block y el inset-0 no cubriría la página */}
      {isMenuOpen && (
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-hangar/70 backdrop-blur-sm md:hidden"
        />
      )}
      <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-bisel bg-panel/95 backdrop-blur-sm'
          : 'border-bisel/60 bg-hangar/90'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-4">
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Miguel Jiménez — ir al inicio"
            className={`flex flex-shrink-0 items-center gap-2.5 ${NAV_FOCUS}`}
          >
            <span
              aria-hidden="true"
              className="border border-fosforo/50 px-1.5 py-0.5 font-display text-[10px] leading-none text-fosforo"
            >
              MJR
            </span>
            <span className="hidden font-mono text-[11px] tracking-instrument text-niebla sm:block">
              {'// MIGUEL JIMÉNEZ'}
            </span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              const number = SECTION_BY_ID[item.id].number;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-mono text-[11px] uppercase tracking-instrument transition-colors duration-200 ${NAV_FOCUS} ${
                      isActive
                        ? 'text-fosforo'
                        : 'text-niebla hover:text-hielo'
                    }`}
                  >
                    <span aria-hidden="true" className={isActive ? 'text-fosforo' : 'text-bisel'}>
                      {isActive ? '▸' : ' '}
                    </span>{' '}
                    <span aria-hidden="true">{number}</span> {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex" aria-hidden="true">
            <span className="font-mono text-[10px] tracking-instrument text-niebla">
              T+{String(years).padStart(2, '0')}A
            </span>
            <span className="flex items-center gap-1.5">
              <span className="led-pulse h-2 w-2 bg-fosforo glow-phosphor" />
              <span className="font-mono text-[10px] uppercase tracking-instrument text-fosforo">
                {PROFILE.statusLabel}
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className={`p-2 text-niebla transition-colors hover:text-hielo md:hidden ${NAV_FOCUS}`}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!isMenuOpen}
        className="border-t border-bisel bg-panel/95 backdrop-blur-sm md:hidden"
      >
          <ul className="px-4 py-3">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              const number = SECTION_BY_ID[item.id].number;
              return (
                <li key={item.id} className="border-b border-bisel/60 last:border-b-0">
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-baseline gap-3 px-2 py-3.5 font-mono text-sm uppercase tracking-instrument transition-colors ${NAV_FOCUS} ${
                      isActive ? 'text-fosforo' : 'text-niebla hover:text-hielo'
                    }`}
                  >
                    <span aria-hidden="true" className="font-display text-[10px] text-ambar">
                      {number}
                    </span>
                    {item.label}
                    {isActive && (
                      <span aria-hidden="true" className="ml-auto text-fosforo">
                        ▮
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="flex items-center gap-2 border-t border-bisel px-6 py-3 font-mono text-[10px] uppercase tracking-instrument text-fosforo">
            <span aria-hidden="true" className="led-pulse h-2 w-2 bg-fosforo glow-phosphor" />
            {PROFILE.statusLabel} — {PROFILE.availability}
          </p>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
