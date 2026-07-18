import { CURRENT_YEAR, PROFILE } from '../data/profile';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-hangar';

// Las tres versiones reales del portfolio, enlazadas a sus repos.
const VERSIONS = [
  { label: 'V1', url: 'https://github.com/MiguelJiRo/PersonalPortfolio' },
  { label: 'V2', url: 'https://github.com/MiguelJiRo/PersonalPortfolioV2' },
  { label: 'V3', url: 'https://github.com/MiguelJiRo/Personal-Portfolio-V3', current: true },
];

// Hermano de <main> en App.jsx para exponerse como landmark contentinfo.
const Footer = () => (
  <footer className="pb-10 pt-4">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rule-ticks" aria-hidden="true" />
      <div className="mt-6 space-y-2 text-center font-mono text-[10px] uppercase tracking-instrument text-niebla">
        <p>
          Registro:{' '}
          {VERSIONS.map(({ label, url, current }, index) => (
            <span key={label}>
              {index > 0 && ' / '}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-sm underline decoration-bisel underline-offset-4 transition-colors hover:text-fosforo hover:decoration-fosforo ${FOCUS_RING}`}
              >
                {label}
                <span className="sr-only">
                  {' '}
                  del portfolio en GitHub (se abre en pestaña nueva)
                </span>
              </a>
              {current && ' (actual)'}
            </span>
          ))}
        </p>
        <p>
          {PROFILE.shortName} · {CURRENT_YEAR} · React + Vite + Tailwind + algún píxel suelto
          <span className="mx-2 hidden text-bisel sm:inline" aria-hidden="true">
            |
          </span>
          <span className="mt-1 block whitespace-nowrap text-alerta sm:mt-0 sm:inline">
            Fin de transmisión
          </span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
