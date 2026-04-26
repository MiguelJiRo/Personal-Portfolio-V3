import portrait from '../assets/jiroz.png?w=320;640&format=avif;webp;png&as=picture';
import { PROFILE } from '../data/profile';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import Picture from './Picture';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';

const SOCIAL_LINKS = [
  { href: PROFILE.github.url, label: 'GitHub', Icon: GithubIcon, external: true },
  { href: PROFILE.linkedin.url, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
  { href: `mailto:${PROFILE.email}`, label: 'Enviar email', Icon: MailIcon, external: false },
];

const Home = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-hero bg-noise"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-7 text-center md:text-left">
          <p className="font-mono text-amber-400 text-sm mb-5 tracking-[0.18em] uppercase">
            // hola, soy
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-5 leading-[0.98] tracking-tight text-balance">
            <span className="block">Miguel</span>
            <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
              Jiménez.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-3 font-medium">
            {PROFILE.role}
            <span className="mx-2 text-blue-500/60">·</span>
            <span className="text-gray-400 font-normal">Indra</span>
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-9 max-w-xl text-pretty leading-relaxed">
            Llevo más de 5 años construyendo interfaces para sistemas críticos del sector defensa.
            Angular, React y TypeScript en el día a día.
          </p>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <a
              href="#projects"
              className={`px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/25 ${FOCUS_RING}`}
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className={`px-7 py-3 bg-white/5 hover:bg-white/10 backdrop-blur border border-white/15 text-white font-semibold rounded-lg transition-colors duration-200 ${FOCUS_RING}`}
            >
              Hablemos
            </a>
          </div>

          <div className="flex gap-5 mt-9 justify-center md:justify-start items-center">
            <span className="hidden md:inline-block w-12 h-px bg-gray-600" aria-hidden="true" />
            {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200 rounded ${FOCUS_RING}`}
              >
                <Icon />
              </a>
            ))}
          </div>

          <blockquote className="mt-10 pl-5 border-l-2 border-amber-400/70 max-w-xl">
            <p className="text-gray-400 italic text-sm md:text-base text-pretty leading-relaxed">
              “The most dangerous phrase in the language is ‘We’ve always done it this way’.”
            </p>
            <footer className="font-mono text-amber-400/80 text-xs mt-2 not-italic tracking-wider">
              — Grace Hopper
            </footer>
          </blockquote>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
            <span
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-500/40 via-blue-400/20 to-amber-300/30 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-blue-400/30"
              style={{ transform: 'scale(1.18)' }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-dashed border-amber-300/30"
              style={{ transform: 'scale(1.32)' }}
            />
            <span
              aria-hidden="true"
              className="absolute -top-3 -right-1 font-mono text-[10px] tracking-[0.3em] text-blue-300/70 uppercase"
            >
              · ready ·
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 font-mono text-[10px] tracking-[0.3em] text-amber-300/70 uppercase"
            >
              v.2026
            </span>
            <Picture
              source={portrait}
              alt={`Retrato de ${PROFILE.name}`}
              sizes="(min-width: 768px) 320px, 256px"
              fetchPriority="high"
              decoding="async"
              imgClassName="relative w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
