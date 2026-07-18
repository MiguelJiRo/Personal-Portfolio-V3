import { PROJECTS, PROJECT_LOG } from '../data/projects';
import Corners from './ui/Corners';
import Picture from './Picture';
import SectionHeader from './SectionHeader';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-panel';

const Projects = () => (
  <section id="projects" className="relative py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="projects" />

      <p className="mb-3 font-mono text-[11px] uppercase tracking-label text-ambar">
        Cuatro contactos en pantalla — desarrollos personales
      </p>
      <p className="mb-14 max-w-3xl text-pretty text-lg text-niebla">
        El trabajo del día a día no se puede enseñar aquí, así que esto es lo que hago por mi
        cuenta: sin tickets, sin requisitos y con total libertad para equivocarme.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {PROJECTS.map((project) => (
          <article
            key={project.designation}
            id={project.anchor}
            className="group relative flex flex-col border border-bisel bg-panel transition-colors hover:border-fosforo/50"
          >
            <Corners className="text-fosforo/40 group-hover:text-fosforo" />

            <div className="scanlines crt-inset relative h-48 overflow-hidden bg-hangar lg:h-56">
              <Picture
                source={project.image}
                alt={`Captura de ${project.title}`}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="lazy"
                imgClassName="thumb-grade w-full h-full object-cover object-top"
              />
              <span
                aria-hidden="true"
                className="card-sweep-line pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-fosforo/70"
              />
            </div>

            <p className="flex items-center justify-between gap-2 border-y border-bisel px-4 py-2 font-mono text-[10px] uppercase tracking-instrument text-niebla">
              <span>
                <span className="text-ambar">{project.designation}</span> · {project.title}
              </span>
              <span className="whitespace-nowrap text-fosforo">▸ Desplegada</span>
            </p>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-balance text-xl font-bold tracking-tight text-hielo">
                {project.title}
              </h3>
              <p className="mb-4 text-pretty text-sm leading-relaxed text-niebla">
                {project.description}
              </p>
              {project.note && (
                <p className="mb-4 font-mono text-[10px] uppercase tracking-instrument text-ambar">
                  {project.note}
                </p>
              )}

              <ul className="mb-5 flex flex-wrap gap-1.5" aria-label="Tecnologías">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-bisel px-2 py-1 font-mono text-[10px] uppercase tracking-instrument text-niebla"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.title} en GitHub (se abre en pestaña nueva)`}
                  className={`rounded-sm font-mono text-xs uppercase tracking-instrument text-fosforo transition-colors hover:text-ambar ${FOCUS_RING}`}
                >
                  ▸ Código
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir demo de ${project.title} (se abre en pestaña nueva)`}
                  className={`rounded-sm font-mono text-xs uppercase tracking-instrument text-fosforo transition-colors hover:text-ambar ${FOCUS_RING}`}
                >
                  ▸ Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-14 border border-bisel bg-panel">
        <Corners />
        <p className="border-b border-bisel px-5 py-3 font-mono text-[10px] uppercase tracking-label text-ambar">
          Registro ampliado ▸ más desarrollos y prácticas
        </p>
        <ul className="divide-y divide-bisel">
          {PROJECT_LOG.map((entry) => (
            <li
              key={entry.designation}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 px-5 py-4 transition-colors hover:bg-fosforo/5"
            >
              <span className="w-12 shrink-0 font-mono text-[10px] uppercase tracking-instrument text-ambar">
                {entry.designation}
              </span>
              <h3 className="text-[15px] font-semibold text-hielo">{entry.title}</h3>
              <span className="w-full text-pretty text-sm leading-relaxed text-niebla sm:w-auto sm:flex-1">
                {entry.description}
              </span>
              <span className="rounded-sm border border-bisel px-2 py-1 font-mono text-[10px] uppercase tracking-instrument text-niebla">
                {entry.language}
              </span>
              <span className="flex gap-4">
                <a
                  href={entry.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${entry.title} en GitHub (se abre en pestaña nueva)`}
                  className={`rounded-sm font-mono text-[11px] uppercase tracking-instrument text-fosforo transition-colors hover:text-ambar ${FOCUS_RING}`}
                >
                  ▸ Código
                </a>
                {entry.demo && (
                  <a
                    href={entry.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir demo de ${entry.title} (se abre en pestaña nueva)`}
                    className={`rounded-sm font-mono text-[11px] uppercase tracking-instrument text-fosforo transition-colors hover:text-ambar ${FOCUS_RING}`}
                  >
                    ▸ Demo
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
