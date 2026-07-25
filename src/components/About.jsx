import { HIGHLIGHTS } from '../data/highlights';
import Corners from './ui/Corners';
import CVDownloadButton from './CVDownloadButton';
import SectionHeader from './SectionHeader';
import DownloadIcon from './icons/DownloadIcon';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-hangar';

const SERVICE_RECORD = [
  { label: 'Experiencia', value: '+5 años' },
  { label: 'Puesto', value: 'Frontend / Fullstack' },
  { label: 'Stack', value: 'Angular · TypeScript · React' },
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
              Soy desarrollador frontend en Indra, donde trabajo en proyectos del sector defensa.
              Mi día a día gira en torno a Angular y TypeScript, construyendo interfaces en las que
              la accesibilidad y el rendimiento se cuidan desde el primer momento, no cuando ya hay
              prisa. Me apoyo mucho en las pruebas —Jest y Angular Testing Library, a veces antes
              que el propio código— y, como vengo del backend, tampoco me asusta cruzar a Java y
              Spring Boot cuando la tarea lo pide. Además, en sistemas donde nuestra parte tiene
              que encajar con las de otras empresas, aprendes a escribir código claro, revisado y
              pensado para durar.
            </p>
            <p>
              Fuera del trabajo sigo programando, aunque con otro espíritu: ahí es donde me suelto
              con React y de donde salen los proyectos que tienes justo debajo, con demo y código
              abiertos por si quieres trastear. Casi todos nacen de una curiosidad concreta, como
              entender cómo se dibuja un juego sobre un canvas, y últimamente también le dedico
              ratos a Godot, que los videojuegos me tiran desde siempre. Soy ingeniero informático
              de formación, pasé por el Máster Frontend de Lemoncode y sigo cayendo en algún curso
              cuando un tema me llama.
            </p>
          </div>

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
