const Skills = () => {
  const frontendSkills = {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Angular", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Next.js", level: 80 }
    ]
  };

  const otherSkills = [
    {
      title: "Tools & Version Control",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 85 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 85 }
      ]
    }
  ];

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

        {/* Frontend Skills - Destacado */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border-2 border-blue-400 shadow-lg shadow-blue-400/20">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">{frontendSkills.icon}</span>
              <h3 className="text-3xl font-bold text-white">{frontendSkills.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {frontendSkills.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills - Secundario */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherSkills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-gray-400 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-500 to-gray-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 hover:border-gray-600 text-gray-400 text-sm rounded-lg transition-colors cursor-default"
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
