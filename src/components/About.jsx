import CVDownloadButton from './CVDownloadButton';
import SectionHeader from './SectionHeader';

const About = () => {
  const highlights = [
    {
      number: '01',
      title: 'Frontend moderno',
      description: 'Angular, React y TypeScript todos los días. Componentes reutilizables, accesibles y pensando en el rendimiento.',
    },
    {
      number: '02',
      title: 'Testing riguroso',
      description: 'Me tomo en serio las pruebas. Jest, Angular Testing Library y TDD cuando el código lo pide.',
    },
    {
      number: '03',
      title: 'Visión full stack',
      description: 'Bajo al backend en Java y Spring Boot cuando la tarea lo requiere. Me gusta entender la foto completa.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader number="01" slug="sobre-mí" title="Sobre mí" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Soy desarrollador Frontend en Indra desde 2021. Trabajo en un sistema de mando y
              control europeo — un proyecto grande, exigente y con equipos de varios países
              colaborando en el mismo código.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              En el día a día me muevo con Angular y React, y también he tocado bastante backend
              con Java y Spring. Me gusta entender cómo funcionan las cosas de principio a fin,
              desde el frontend hasta la base de datos. Trabajo con metodologías ágiles y me tomo
              en serio el testing porque, seamos honestos, nadie quiere bugs en producción.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuando no estoy programando, suelo estar cacharreando con proyectos personales para
              aprender cosas nuevas. Uno de mis hobbies es el desarrollo de videojuegos, aunque
              todavía me queda bastante por mejorar en ese tema.
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

          <div className="space-y-5">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="bg-gray-800/60 p-6 rounded-lg border border-gray-700 hover:border-blue-400/60 transition-colors"
              >
                <p className="font-mono text-amber-400 text-sm mb-2">{item.number}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
