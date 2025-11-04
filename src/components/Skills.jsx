const Skills = () => {
  const technicalSkills = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "blue",
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Vite", "Next.js"]
    },
    {
      title: "Backend & Databases",
      icon: "⚙️",
      color: "green",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"]
    },
    {
      title: "Tools & Version Control",
      icon: "🛠️",
      color: "purple",
      skills: ["Git", "Webpack", "Jest", "Docker"]
    }
  ];

  const softSkills = [
    {
      name: "Trabajo en Equipo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Colaboración efectiva en equipos multidisciplinarios"
    },
    {
      name: "Proactividad",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Iniciativa para resolver problemas y proponer mejoras"
    },
    {
      name: "Adaptabilidad",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "Rápida adaptación a nuevas tecnologías y metodologías"
    },
    {
      name: "Comunicación",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: "Comunicación clara y efectiva con el equipo"
    },
    {
      name: "Resolución de Problemas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Análisis crítico y soluciones creativas"
    },
    {
      name: "Aprendizaje Continuo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Constante actualización en tecnologías y mejores prácticas"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:shadow-blue-500/50",
      green: "from-green-500 to-green-600 hover:shadow-green-500/50",
      purple: "from-purple-500 to-purple-600 hover:shadow-purple-500/50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-blue-400">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Especializado en desarrollo frontend, creando interfaces modernas,
            interactivas y eficientes.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Habilidades Técnicas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-3">{category.icon}</span>
                  <h4 className="text-xl font-bold text-white">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 bg-gradient-to-r ${getColorClasses(category.color)} text-white text-sm rounded-lg font-medium shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Habilidades Blandas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <div className="text-blue-400">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-400 mb-6">También trabajo con</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Sass/SCSS",
              "Bootstrap",
              "Material-UI",
              "Figma",
              "Axios",
              "Canvas API",
              "Vercel",
              "Netlify",
              "REST APIs",
              "Postman",
              "Agile/Scrum"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-800 text-gray-400 hover:text-gray-300 text-sm rounded-lg transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
