import { CV_METHODOLOGIES } from '../data/cv';
import { OFF_DUTY_SKILLS, SKILL_CATEGORIES } from '../data/skills';
import Corners from './ui/Corners';
import SectionHeader from './SectionHeader';

const SYS_LETTERS = ['A', 'B', 'C', 'D'];

const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader sectionId="skills" />

      <p className="mb-14 max-w-3xl text-pretty text-lg text-niebla">
        Esto es lo que uso: unas cosas a diario en el trabajo, otras cuando un proyecto personal
        me da la excusa de probarlas.
      </p>

      <div className="grid items-start gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <article
            key={category.id}
            className="group relative border border-bisel bg-panel p-6 transition-colors hover:border-fosforo/40"
          >
            <Corners className="text-fosforo/40 group-hover:text-fosforo" />
            <h3 className="mb-4 flex items-start justify-between gap-3 border-b border-bisel pb-3 font-mono text-[10px] font-normal uppercase tracking-label sm:text-[11px]">
              <span className="text-ambar">
                SYS-{SYS_LETTERS[index]} — {category.title}
              </span>
              <span className="shrink-0 whitespace-nowrap text-[10px] text-niebla">
                {category.skills.length} unidades
              </span>
            </h3>

            <ul className="grid grid-cols-2 gap-x-6">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 border-b border-bisel/40 py-1.5 transition-colors hover:bg-fosforo/5"
                >
                  <span aria-hidden="true" className="font-mono text-[9px] text-niebla/80">
                    {String(skillIndex + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="text-[8px] leading-none text-fosforo/50">
                    ▮
                  </span>
                  <span className="text-[15px] font-medium text-hielo">{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <p className="mr-2 font-mono text-[10px] uppercase tracking-label text-ambar">
          Doctrina ▸
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Metodologías de trabajo">
          {CV_METHODOLOGIES.map((method) => (
            <li
              key={method}
              className="rounded-sm border border-bisel px-3 py-1.5 font-mono text-[11px] uppercase tracking-instrument text-niebla"
            >
              {method}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p className="mr-2 font-mono text-[10px] uppercase tracking-label text-ambar">
          Videojuegos ▸
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías de videojuegos por afición">
          {OFF_DUTY_SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-sm border border-fosforo/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-instrument text-niebla"
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="font-mono text-[10px] uppercase tracking-instrument text-niebla">
          {'// por afición, fuera del trabajo'}
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
