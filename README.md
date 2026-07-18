# Portfolio Personal — Miguel Jiménez Rodríguez

Portfolio personal de una sola página con una dirección de arte propia de **sala de mando / instrumentación aeroespacial**: el mundo real en el que trabajo (sistemas de mando y control) convertido en sistema visual. Los tres proyectos personales aparecen como contactos en un radar CSS puro en el hero.

## Tecnologías

- **React 18** — biblioteca de interfaces
- **Vite 5** — build tool
- **Tailwind CSS 3** — estilos utility-first
- **@react-pdf/renderer** — CV en PDF generado en el navegador, optimizado para ATS (sin hifenación, títulos de sección estándar, texto 100% extraíble)

## Detalles

- Tipografías: Michroma (display), Bai Jamjuree (cuerpo), Martian Mono (readouts)
- Accesible: contraste AA/AAA, `prefers-reduced-motion` (el radar se congela a 45°), foco visible, HTML semántico
- El CV se descarga desde el propio sitio y su contenido vive en `src/data/cv.js`

## Licencia

MIT License

---

Hecho con React, Vite, Tailwind CSS y algún píxel suelto
