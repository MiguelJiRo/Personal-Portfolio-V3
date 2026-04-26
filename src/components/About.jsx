import { HIGHLIGHTS } from '../data/highlights';
import CVDownloadButton from './CVDownloadButton';
import SectionHeader from './SectionHeader';
import DownloadIcon from './icons/DownloadIcon';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';

const About = () => (
  <section id="about" className="relative min-h-screen flex items-center bg-gray-900 py-20 overflow-hidden">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black_15%,transparent_60%)]"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <SectionHeader sectionId="about" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-gray-300 mb-4 leading-relaxed text-pretty">
            Soy desarrollador Frontend en Indra desde 2021. Trabajo en un sistema de mando y
            control europeo — un proyecto grande, exigente y con equipos de varios países
            colaborando en el mismo código.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed text-pretty">
            En el día a día me muevo con Angular y React, y también he tocado bastante backend
            con Java y Spring. Me gusta entender cómo funcionan las cosas de principio a fin,
            desde el frontend hasta la base de datos. Trabajo con metodologías ágiles y me tomo
            en serio el testing porque, seamos honestos, nadie quiere bugs en producción.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed text-pretty">
            Cuando no estoy programando, suelo estar cacharreando con proyectos personales para
            aprender cosas nuevas. Uno de mis hobbies es el desarrollo de videojuegos, aunque
            todavía me queda bastante por mejorar en ese tema.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className={`px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 ${FOCUS_RING}`}
            >
              Contáctame
            </a>
            <CVDownloadButton
              className={`px-6 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${FOCUS_RING}`}
            >
              <DownloadIcon className="w-5 h-5" />
              Descargar CV
            </CVDownloadButton>
          </div>
        </div>

        <div className="space-y-5">
          {HIGHLIGHTS.map((item, index) => (
            <article
              key={item.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/80 hover:border-blue-400/60 transition-all hover:-translate-y-0.5"
              style={{ marginLeft: index === 1 ? '1.5rem' : index === 2 ? '0.75rem' : 0 }}
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 -left-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900 border border-amber-400/40 font-mono text-amber-400 text-sm shadow-lg group-hover:border-amber-400/80 transition-colors"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2 text-balance pl-10">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-pretty">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
