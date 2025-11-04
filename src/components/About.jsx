import CVDownloadButton from './CVDownloadButton';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-blue-400">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Más allá del código
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Soy desarrollador Frontend con experiencia en crear interfaces web modernas
              y funcionales. Me gusta transformar ideas en aplicaciones reales que funcionen bien
              y se vean geniales.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tengo experiencia trabajando con Angular y React en proyectos reales, y también
              he tocado bastante backend con Java y Spring. Me gusta tener una visión completa
              de cómo funcionan las cosas, desde el frontend hasta la base de datos. Trabajo con
              metodologías ágiles y me tomo en serio el testing porque, seamos honestos, nadie
              quiere bugs en producción.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuando no estoy programando, suelo estar cacharreando con nuevas tecnologías
              o haciendo proyectos personales para aprender cosas nuevas. Uno de mis hobbies
              es el desarrollo de videojuegos, aunque todavía me queda bastante por mejorar
              en ese tema. Me encanta ver cómo evoluciona el mundo del desarrollo web y
              explorar nuevas áreas.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contáctame
              </a>
              <CVDownloadButton className="px-6 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </CVDownloadButton>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Desarrollo Frontend</h4>
              </div>
              <p className="text-gray-300">
                Experiencia con React, Angular, TypeScript y CSS moderno para crear
                interfaces web interactivas y con buen rendimiento.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="text-xl font-semibold text-white">UI/UX Design</h4>
              </div>
              <p className="text-gray-300">
                Me preocupo por crear interfaces que sean fáciles de usar y que
                tengan buena pinta. Al final, la experiencia del usuario es lo que cuenta.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Optimización</h4>
              </div>
              <p className="text-gray-300">
                Me gusta que las aplicaciones funcionen rápido y sin problemas. Optimizar
                el rendimiento es parte importante del trabajo.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Trabajo en Equipo</h4>
              </div>
              <p className="text-gray-300">
                Me adapto rápido, trabajo bien bajo presión y me comunico de forma clara.
                La resiliencia y el aprendizaje continuo son clave en este trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
