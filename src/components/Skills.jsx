import { SKILL_CATEGORIES } from '../data/skills';
import SectionHeader from './SectionHeader';

const Skills = () => (
  <section id="skills" className="relative min-h-screen bg-mesh-soft py-20 overflow-hidden">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_bottom_left,black_15%,transparent_60%)]"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="skills" />

      <p className="text-gray-300 text-lg max-w-4xl mb-12 text-pretty">
        Lo que uso de forma regular. Algunas cosas cada día, otras solo cuando el proyecto lo pide.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category, index) => (
          <article
            key={category.id}
            className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/80 hover:border-blue-400/60 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-amber-400 text-sm tracking-wider">
                /{String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight">{category.title}</h3>
              <span className="ml-auto text-xs text-gray-500 font-mono">
                {category.skills.length} items
              </span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 bg-gray-900/80 border border-gray-700 text-gray-300 text-sm rounded-md hover:border-blue-400/40 hover:text-white transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
