import { PROFILE } from '../data/profile';
import Radar from './Radar';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-hangar';

const READOUTS = [
  { label: 'Rol', value: PROFILE.role },
  { label: 'Empresa', value: 'Indra' },
  { label: 'Base', value: PROFILE.location },
];

const CHANNELS = [
  { href: PROFILE.github.url, label: 'GitHub', external: true },
  { href: PROFILE.linkedin.url, label: 'LinkedIn', external: true },
  { href: `mailto:${PROFILE.email}`, label: 'Email', external: false },
];

const Home = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-12">
    <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 font-mono text-xs uppercase tracking-label text-ambar">
            {'// Canal abierto — transmitiendo desde Aranjuez'}
          </p>

          <h1 className="afterglow mb-6 font-display uppercase leading-[1.08] text-hielo text-[clamp(2.3rem,7vw,4.4rem)]">
            Miguel
            <br />
            Jiménez
          </h1>
          <div className="rule-ticks mb-8 max-w-md" aria-hidden="true" />

          <dl className="mb-8 grid max-w-xl border border-bisel sm:grid-cols-3 divide-y divide-bisel sm:divide-y-0 sm:divide-x">
            {READOUTS.map(({ label, value }) => (
              <div key={label} className="px-4 py-3">
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-label text-ambar">
                  {label}
                </dt>
                <dd className="text-sm text-hielo">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mb-9 max-w-xl text-pretty text-base leading-relaxed text-niebla md:text-lg">
            Llevo más de 5 años desarrollando software para el sector defensa, casi siempre en el
            frontend y bajando al backend cuando hace falta. Fuera del trabajo, videojuegos por
            pura afición.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className={`rounded-sm bg-fosforo px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-instrument text-tinta transition hover:brightness-110 ${FOCUS_RING}`}
            >
              Ver proyectos ▸
            </a>
            <a
              href="#contact"
              className={`rounded-sm border border-ambar/70 px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-instrument text-ambar transition-colors hover:bg-ambar/10 ${FOCUS_RING}`}
            >
              Abrir canal
            </a>
          </div>

          <ul className="mt-9 flex items-center gap-4" aria-label="Canales directos">
            {CHANNELS.map(({ href, label, external }, index) => (
              <li key={label} className="flex items-center gap-4">
                {index > 0 && (
                  <span aria-hidden="true" className="h-3 w-px bg-bisel" />
                )}
                <a
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`rounded-sm font-mono text-xs uppercase tracking-instrument text-niebla transition-colors hover:text-fosforo ${FOCUS_RING}`}
                >
                  {label}
                  {external && <span className="sr-only"> (se abre en pestaña nueva)</span>}
                </a>
              </li>
            ))}
          </ul>

          <blockquote className="mt-12 max-w-xl border-l-2 border-bisel pl-5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-label text-ambar">
              ▸ Transmisión interceptada
            </p>
            <p lang="en" className="text-pretty text-sm italic leading-relaxed text-niebla md:text-[15px]">
              “The most dangerous phrase in the language is ‘We’ve always done it this way’.”
            </p>
            <footer className="mt-2 font-mono text-[10px] not-italic tracking-instrument text-niebla">
              — GRACE HOPPER
            </footer>
          </blockquote>
        </div>

        <div className="lg:col-span-5">
          <Radar />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
