import animeLensImg from '../assets/anime-lens.jpg';
import pixelDefenseImg from '../assets/pixel-defense.jpg';
import techdleImg from '../assets/tech+dle.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Anime Lens",
      description: "Aplicación web moderna para buscar y identificar animes a partir de imágenes o capturas de pantalla usando trace.moe y AniList API. Incluye drag & drop, preview de video y traducciones automáticas.",
      image: animeLensImg,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Axios"],
      github: "https://github.com/MiguelJiRo/Anime-Lens",
      demo: "https://github.com/MiguelJiRo/Anime-Lens"
    },
    {
      title: "Pixel Defense",
      description: "Tower defense minimalista con estilo pixel/retro. Modo endless con paths aleatorios, 4 tipos de torres, eventos aleatorios y sistema de dificultad escalable desarrollado con Canvas.",
      image: pixelDefenseImg,
      technologies: ["React", "Canvas 2D", "Vite", "JavaScript"],
      github: "https://github.com/MiguelJiRo/Pixel-Defense",
      demo: "https://github.com/MiguelJiRo/Pixel-Defense"
    },
    {
      title: "Tech-dle",
      description: "Juego diario de adivinanzas de tecnologías inspirado en Wordle. Incluye sistema de pistas con colores, tracking de progreso, soporte bilingüe español/inglés y resultados compartibles.",
      image: techdleImg,
      technologies: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/MiguelJiRo/Tech-dle",
      demo: "https://tech-dle.vercel.app"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-blue-400">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado, desde aplicaciones web
            hasta recreaciones de videojuegos clásicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
