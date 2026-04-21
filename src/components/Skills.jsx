import SectionHeader from './SectionHeader';

const Skills = () => {
  const categories = [
    {
      number: '01',
      title: 'Frontend',
      skills: [
        'Angular',
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SASS',
        'Tailwind CSS',
        'Vue',
        'Next.js',
        'RxJS',
        'Responsive Design',
      ],
    },
    {
      number: '02',
      title: 'Backend y BBDD',
      skills: [
        'Java',
        'Spring Boot',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Oracle',
        'MongoDB',
        'Firebase',
      ],
    },
    {
      number: '03',
      title: 'Testing',
      skills: [
        'Jest',
        'Angular Testing Library',
        'Cypress',
        'Playwright',
        'JUnit',
        'Mockito',
        'TDD',
      ],
    },
    {
      number: '04',
      title: 'Herramientas',
      skills: [
        'Git',
        'Pull Requests',
        'Jira',
        'Docker',
        'Webpack',
        'Vite',
        'Agile / Scrum',
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="03" slug="stack" title="Stack" />

        <p className="text-gray-300 text-lg max-w-4xl mb-12">
          Lo que uso de forma regular. Algunas cosas cada día, otras solo cuando el proyecto lo pide.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.number}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-400/60 transition-colors"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-amber-400 text-sm">{category.number}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-900 border border-gray-700 text-gray-300 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
