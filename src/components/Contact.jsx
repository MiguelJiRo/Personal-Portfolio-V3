import { PROFILE } from '../data/profile';
import Corners from './ui/Corners';
import SectionHeader from './SectionHeader';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-panel';

const CHANNELS = [
  {
    id: '01',
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    external: false,
    primary: true,
  },
  {
    id: '02',
    label: 'GitHub',
    value: PROFILE.github.display,
    href: PROFILE.github.url,
    external: true,
  },
  {
    id: '03',
    label: 'LinkedIn',
    value: PROFILE.linkedin.display,
    href: PROFILE.linkedin.url,
    external: true,
  },
  {
    id: '04',
    label: 'Telegram',
    value: PROFILE.telegram.display,
    href: PROFILE.telegram.url,
    external: true,
  },
];

const Contact = () => (
  <section id="contact" className="relative pb-16 pt-24 md:pt-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="contact" />

      <p className="mb-12 max-w-2xl text-pretty text-lg text-niebla">
        Una oferta, un proyecto, algo que comentar sobre el tower defense o simplemente saludar:
        cualquiera de estos canales vale, y respondo.
      </p>

      <div className="max-w-4xl">
        <dl className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-bisel px-5 py-4">
            <dt className="mb-1 font-mono text-[10px] uppercase tracking-label text-ambar">
              Base
            </dt>
            <dd className="text-sm text-hielo">
              {PROFILE.location}
              <span className="ml-2 font-mono text-[10px] text-niebla">
                ≈ {PROFILE.coordinates}
              </span>
            </dd>
          </div>
          <div className="border border-bisel px-5 py-4">
            <dt className="mb-1 font-mono text-[10px] uppercase tracking-label text-ambar">
              Estado
            </dt>
            <dd className="flex items-center gap-2 text-sm text-hielo">
              <span aria-hidden="true" className="led-pulse h-2 w-2 bg-fosforo glow-phosphor" />
              {PROFILE.availability}
            </dd>
          </div>
        </dl>

        <div className="relative border border-bisel bg-panel">
          <Corners />
          <p className="border-b border-bisel px-5 py-3 font-mono text-[10px] uppercase tracking-label text-ambar">
            Canales abiertos ▸ se responde a todo
          </p>
          <ul className="divide-y divide-bisel">
            {CHANNELS.map(({ id, label, value, href, external, primary }) => (
              <li key={id}>
                <a
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`group flex min-h-16 flex-wrap items-center gap-x-4 gap-y-1 px-5 py-4 transition-colors hover:bg-fosforo/5 ${FOCUS_RING}`}
                >
                  <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-instrument text-ambar">
                    Canal {id}
                  </span>
                  <span className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-instrument text-niebla">
                    {label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mx-1 hidden min-w-8 flex-1 border-b border-dotted border-bisel sm:block"
                  />
                  <span
                    className={`w-full break-all transition-colors group-hover:text-fosforo sm:w-auto ${
                      primary
                        ? 'text-lg font-medium text-fosforo md:text-xl [.group:hover_&]:[text-shadow:0_0_18px_rgba(75,240,167,0.45)]'
                        : 'text-[15px] text-hielo'
                    }`}
                    translate="no"
                  >
                    {value}
                    {external && <span className="sr-only"> (se abre en pestaña nueva)</span>}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-fosforo opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    ▸
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </section>
);

export default Contact;
