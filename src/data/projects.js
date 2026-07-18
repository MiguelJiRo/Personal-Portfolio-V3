import animeLensImg from '../assets/anime-lens.jpg?w=400;800&format=avif;webp;jpg&as=picture';
import oposinatorImg from '../assets/oposinator-tai.jpg?w=400;800&format=avif;webp;jpg&as=picture';
import pixelDefenseImg from '../assets/pixel-defense.jpg?w=400;800&format=avif;webp;jpg&as=picture';
import techdleImg from '../assets/tech+dle.jpg?w=400;800&format=avif;webp;jpg&as=picture';

// Capturas reales de las demos desplegadas (no mockups).
export const PROJECTS = [
  {
    designation: 'OP-01',
    anchor: 'op-anime-lens',
    title: 'Anime Lens',
    description:
      '¿De qué anime era esa escena? Sube la captura y te lo dice: identifica el momento exacto con trace.moe y completa la ficha con la API de AniList. Con drag & drop, preview en vídeo y traducciones automáticas.',
    image: animeLensImg,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/MiguelJiRo/Anime-Lens',
    demo: 'https://anime-lens.vercel.app',
    // Posición del blip en el radar del hero (ángulo horario desde arriba, radio 0-1)
    radar: { angle: 40, radius: 0.62 },
  },
  {
    designation: 'OP-02',
    anchor: 'op-pixel-defense',
    title: 'Pixel Defense',
    description:
      'Mi laboratorio de desarrollo de videojuegos: un tower defense retro pintado sobre Canvas 2D, sin motor de por medio. Modo endless con caminos que cambian en cada partida, cuatro tipos de torre, eventos aleatorios y una dificultad que escala sin piedad.',
    note: 'DEFENSA: TAMBIÉN EN MIS RATOS LIBRES',
    image: pixelDefenseImg,
    technologies: ['React', 'Canvas 2D', 'Vite', 'JavaScript'],
    github: 'https://github.com/MiguelJiRo/Pixel-Defense',
    demo: 'https://pixel-defense.vercel.app',
    radar: { angle: 165, radius: 0.48 },
  },
  {
    designation: 'OP-03',
    anchor: 'op-tech-dle',
    title: 'Tech-dle',
    description:
      'Un Wordle por deformación profesional: cada día, una tecnología que adivinar. Pistas por colores, seguimiento de tu progreso, versión en español e inglés y resultados compartibles para picarte con quien quieras.',
    image: techdleImg,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/MiguelJiRo/Tech-dle',
    demo: 'https://tech-dle.vercel.app',
    radar: { angle: 285, radius: 0.7 },
  },
  {
    designation: 'OP-04',
    anchor: 'op-oposinator-tai',
    title: 'Oposinator TAI',
    description:
      'Plataforma para preparar la oposición TAI a base de exámenes oficiales del INAP: simulacros con temporizador, revisión de cada respuesta y estadísticas con logros para no perder el ritmo de estudio.',
    image: oposinatorImg,
    technologies: ['React', 'React Router', 'Tailwind CSS', 'PDF.js'],
    github: 'https://github.com/MiguelJiRo/Oposinator-TAI',
    demo: 'https://oposinator-tai.vercel.app',
    radar: { angle: 215, radius: 0.75 },
  },
];

// Más desarrollos del GitHub: apps, herramientas y prácticas del máster.
export const PROJECT_LOG = [
  {
    designation: 'OP-05',
    title: 'Statsframe',
    description:
      'Tarjetas SVG configurables con las estadísticas de cualquier perfil de GitHub, listas para incrustar en un README.',
    language: 'TypeScript',
    github: 'https://github.com/MiguelJiRo/statsframe',
    demo: 'https://statsframe.vercel.app',
  },
  {
    designation: 'OP-06',
    title: 'Repoframe',
    description:
      'Tarjetas SVG personalizadas para repos y gists de GitHub, con temas y opciones al detalle.',
    language: 'JavaScript',
    github: 'https://github.com/MiguelJiRo/repoframe',
    demo: 'https://repoframe.vercel.app',
  },
  {
    designation: 'OP-07',
    title: 'Crypto Live Dashboard',
    description:
      'Dashboard para seguir el precio de las criptomonedas en tiempo real y consultar su histórico.',
    language: 'JavaScript',
    github: 'https://github.com/MiguelJiRo/Crypto-live-dashboard',
    demo: 'https://crypto-live-dashboards.vercel.app',
  },
  {
    designation: 'OP-08',
    title: 'Convive',
    description:
      'Plataforma todo-en-uno para hogares compartidos: gastos, tareas, listas y presupuestos.',
    language: 'JavaScript',
    github: 'https://github.com/MiguelJiRo/Convive',
  },
  {
    designation: 'OP-09',
    title: 'Lemoncode · React Lab',
    description: 'Laboratorio de React del Máster Frontend XII de Lemoncode.',
    language: 'TypeScript',
    github: 'https://github.com/MiguelJiRo/Master-Frontend-XII-Lemoncode-Module-4.1-React-lab',
  },
  {
    designation: 'OP-10',
    title: 'Lemoncode · Angular Lab',
    description: 'Laboratorio de Angular del Máster Frontend XII de Lemoncode.',
    language: 'TypeScript',
    github: 'https://github.com/MiguelJiRo/Master-Frontend-XII-Lemoncode-Module-4.2-Angular-lab',
  },
  {
    designation: 'OP-11',
    title: 'Lemoncode · Testing',
    description: 'Prácticas del módulo de testing del Máster Frontend XII de Lemoncode.',
    language: 'TypeScript',
    github: 'https://github.com/MiguelJiRo/Master-Frontend-XII-Lemoncode-Module-5-Testing',
  },
];
