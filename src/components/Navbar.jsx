import { useState } from 'react';
import { SECTIONS, SECTION_IDS } from '../data/sections';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const NAV_FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Ir al inicio"
            className={`flex items-center gap-2 flex-shrink-0 ${NAV_FOCUS}`}
          >
            <span className="relative w-10 h-10" aria-hidden="true">
              <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform rotate-6 opacity-75" />
              <span className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MJ</span>
              </span>
            </span>
            <span className="hidden sm:block">
              <span className="block text-lg font-bold text-white leading-none">Miguel</span>
              <span className="block text-xs text-blue-400 leading-none">Frontend Dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center space-x-8">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors duration-200 ${NAV_FOCUS} ${
                      isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className={`md:hidden p-2 text-gray-300 hover:text-white transition-colors ${NAV_FOCUS}`}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm">
          <ul className="px-4 py-3 space-y-1">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block w-full px-3 py-2 rounded-lg text-base font-medium transition-colors ${NAV_FOCUS} ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
