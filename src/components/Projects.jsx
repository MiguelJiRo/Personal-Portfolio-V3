import { PROJECTS } from '../data/projects';
import Picture from './Picture';
import SectionHeader from './SectionHeader';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800';

const Projects = () => (
  <section id="projects" className="relative min-h-screen bg-gray-800 py-20 overflow-hidden">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_60%)]"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="projects" />

      <p className="text-gray-300 text-lg max-w-4xl mb-12 text-pretty">
        Cosas que he construido fuera del trabajo. Algunas para aprender, otras por curiosidad.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className="group relative bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/80 hover:border-blue-400/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
          >
            <span className="absolute top-4 right-4 z-10 font-mono text-xs text-amber-400/80 tracking-wider">
              0{index + 1}
            </span>
            <div className="relative overflow-hidden h-48 bg-gray-950">
              <Picture
                source={project.image}
                alt={`Captura de ${project.title}`}
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                loading="lazy"
                imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2 text-balance tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed text-pretty">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-400/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.title} en GitHub`}
                  className={`flex items-center gap-2 text-gray-300 hover:text-white transition-colors rounded ${FOCUS_RING}`}
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir demo de ${project.title}`}
                  className={`flex items-center gap-2 text-gray-300 hover:text-white transition-colors rounded ${FOCUS_RING}`}
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
