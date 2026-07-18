import { HIGHLIGHTS } from '../data/highlights';
import Corners from './ui/Corners';
import CVDownloadButton from './CVDownloadButton';
import SectionHeader from './SectionHeader';
import DownloadIcon from './icons/DownloadIcon';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-hangar';

const SERVICE_RECORD = [
  { label: 'Alta', value: 'Feb 2021' },
  { label: 'Destino actual', value: 'Frontend · Mando y control' },
  { label: 'Destino anterior', value: 'Backend · Planif. de misiones' },
];

const WAYPOINTS = [
  { period: 'FEB 2021', detail: 'BACKEND · JAVA / SPRING' },
  { period: 'ENE 2022', detail: 'FRONTEND / FULLSTACK · ANGULAR / REACT' },
];

const About = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="about" />

      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <dl className="mb-10 grid border border-bisel sm:grid-cols-3 divide-y divide-bisel sm:divide-y-0 sm:divide-x">
            {SERVICE_RECORD.map(({ label, value }) => (
              <div key={label} className="px-4 py-3">
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-label text-ambar">
                  {label}
                </dt>
                <dd className="text-sm text-hielo">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="max-w-[65ch] space-y-5 text-pretty text-[17px] leading-[1.7] text-niebla">
            <p>
              Entré en Indra en 2021 picando Java para un sistema de planificación de misiones de
              helicópteros del Ejército de Tierra. Un año después crucé al frontend y desde
              entonces trabajo en el sistema de mando y control con el que la Unión Europea
              coordina sus misiones internacionales — un proyecto grande, exigente y con equipos
              de varios países empujando el mismo código.
            </p>
            <p>
              Mi terreno es Angular, React y TypeScript, y cuando hay que bajar a Java y Spring
              para entender qué está pasando, bajo. El testing me lo tomo en serio: escribo
              pruebas porque en un sistema que usan personas de verdad, un «funciona en mi
              máquina» no vale.
            </p>
            <p>
              Cuando cierro el portátil del trabajo, cambio de escala: hago videojuegos y apps
              pequeñas por puro gusto. Un tower defense de píxeles, un Wordle de tecnologías, un
              buscador de anime por capturas. Nada de eso es crítico — y justo por eso me sirve:
              ahí pruebo lo que en un sistema de defensa no tocaría ni de broma.
            </p>
          </div>

          <ul className="mt-10 space-y-4 border-l border-bisel pl-6" aria-label="Trayectoria en Indra">
            {WAYPOINTS.map(({ period, detail }) => (
              <li key={period} className="relative font-mono text-[11px] tracking-instrument text-niebla">
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1 h-1.5 w-1.5 rotate-45 border border-fosforo/70 bg-hangar"
                />
                <span className="text-fosforo">{period}</span> — {detail}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className={`rounded-sm bg-fosforo px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-instrument text-tinta transition hover:brightness-110 ${FOCUS_RING}`}
            >
              Contactar
            </a>
            <CVDownloadButton
              className={`flex items-center gap-2 rounded-sm border border-ambar/70 px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-instrument text-ambar transition-colors hover:bg-ambar/10 ${FOCUS_RING}`}
            >
              <DownloadIcon className="h-4 w-4" />
              Descargar CV
            </CVDownloadButton>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-5">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item.code}
              className="group relative border border-bisel bg-panel p-6 transition-colors hover:border-fosforo/40"
            >
              <Corners className="text-fosforo/40 group-hover:text-fosforo" />
              <p className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-label">
                <span className="text-ambar">{item.code} — Módulo</span>
                <span className="flex items-center gap-1.5 text-fosforo">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-fosforo" />
                  Operativo
                </span>
              </p>
              <h3 className="mb-2 text-balance text-lg font-semibold text-hielo">{item.title}</h3>
              <p className="text-pretty text-[15px] leading-relaxed text-niebla">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
