import animeLensImg from '../assets/anime-lens.jpg?w=400;800&format=avif;webp;jpg&as=picture';
import pixelDefenseImg from '../assets/pixel-defense.jpg?w=400;800&format=avif;webp;jpg&as=picture';
import techdleImg from '../assets/tech+dle.jpg?w=400;800&format=avif;webp;jpg&as=picture';

export const PROJECTS = [
  {
    title: 'Anime Lens',
    description:
      'Aplicación web moderna para buscar y identificar animes a partir de imágenes o capturas de pantalla usando trace.moe y AniList API. Incluye drag & drop, preview de video y traducciones automáticas.',
    image: animeLensImg,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/MiguelJiRo/Anime-Lens',
    demo: 'https://anime-lens.vercel.app',
  },
  {
    title: 'Pixel Defense',
    description:
      'Tower defense minimalista con estilo pixel/retro. Modo endless con paths aleatorios, 4 tipos de torres, eventos aleatorios y sistema de dificultad escalable desarrollado con Canvas.',
    image: pixelDefenseImg,
    technologies: ['React', 'Canvas 2D', 'Vite', 'JavaScript'],
    github: 'https://github.com/MiguelJiRo/Pixel-Defense',
    demo: 'https://pixel-defense.vercel.app',
  },
  {
    title: 'Tech-dle',
    description:
      'Juego diario de adivinanzas de tecnologías inspirado en Wordle. Incluye sistema de pistas con colores, tracking de progreso, soporte bilingüe español/inglés y resultados compartibles.',
    image: techdleImg,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/MiguelJiRo/Tech-dle',
    demo: 'https://tech-dle.vercel.app',
  },
];
