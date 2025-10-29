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
              ¡Hola! Soy Miguel
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Soy un desarrollador Frontend apasionado por crear interfaces de usuario
              excepcionales y experiencias web innovadoras. Mi especialidad es transformar
              diseños en aplicaciones web modernas, responsivas y altamente interactivas.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Aunque mi pasión está en el frontend, también cuento con conocimientos sólidos
              en desarrollo backend, lo que me permite tener una visión completa del stack
              y colaborar efectivamente en proyectos Full Stack. Me encanta escribir código
              limpio, mantener las mejores prácticas y crear experiencias de usuario que
              marquen la diferencia.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuando no estoy programando, me gusta contribuir a proyectos de código abierto,
              aprender sobre nuevas tecnologías y compartir conocimientos con la comunidad.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contáctame
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 font-semibold rounded-lg transition-colors duration-200"
              >
                Descargar CV
              </a>
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
                Especializado en React, Angular, JavaScript moderno y frameworks CSS para crear
                interfaces web interactivas y de alto rendimiento.
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
                Creación de interfaces intuitivas y atractivas con enfoque en la
                experiencia del usuario.
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
                Optimización de rendimiento y experiencia de usuario para aplicaciones
                rápidas y eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
