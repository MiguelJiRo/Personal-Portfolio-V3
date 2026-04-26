import { CURRENT_YEAR, PROFILE } from '../data/profile';
import SectionHeader from './SectionHeader';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TelegramIcon from './icons/TelegramIcon';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';

const SOCIAL = [
  { href: PROFILE.github.url, label: 'GitHub', Icon: GithubIcon },
  { href: PROFILE.linkedin.url, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: PROFILE.telegram.url, label: 'Telegram', Icon: TelegramIcon },
];

const Contact = () => (
  <section id="contact" className="relative min-h-screen bg-gray-800 py-20 overflow-hidden">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-mesh-soft opacity-80"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="contact" />

      <p className="text-gray-300 text-lg max-w-2xl mb-12 text-pretty">
        Si quieres hablar de algo — un proyecto, una oferta, o solo saludar — cualquiera
        de estos canales vale.
      </p>

      <div className="max-w-4xl">
        <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/80">
          <dl className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <dt className="font-mono text-amber-400 text-xs mb-2">email</dt>
              <dd>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className={`text-white hover:text-blue-400 transition-colors break-all rounded ${FOCUS_RING}`}
                  translate="no"
                >
                  {PROFILE.email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-mono text-amber-400 text-xs mb-2">ubicación</dt>
              <dd className="text-white">{PROFILE.location}</dd>
            </div>

            <div>
              <dt className="font-mono text-amber-400 text-xs mb-2">disponibilidad</dt>
              <dd className="text-white">{PROFILE.availability}</dd>
            </div>
          </dl>

          <div className="border-t border-gray-700 pt-8">
            <p className="font-mono text-amber-400 text-xs mb-4">también por aquí</p>
            <div className="flex gap-4">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors ${FOCUS_RING}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-700">
        <p className="font-mono text-gray-500 text-xs text-center">
          {PROFILE.shortName} · {CURRENT_YEAR} · Hecho con React, Vite y Tailwind CSS
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
