import { PROFILE, serviceYears } from '../data/profile';
import { PROJECTS } from '../data/projects';

const SWEEP_SECONDS = 8;
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fosforo focus-visible:ring-offset-2 focus-visible:ring-offset-hangar';

/** Posición del blip: ángulo horario desde arriba + radio relativo (0-1). */
const blipPosition = ({ angle, radius }) => {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + radius * 50 * Math.sin(rad)}%`,
    top: `${50 - radius * 50 * Math.cos(rad)}%`,
  };
};

/**
 * La Pantalla de Plot: un radarscope PPI de CSS/SVG puro donde los tres
 * proyectos personales aparecen como contactos clicables. El barrido rota
 * cada 8s y cada blip "se enciende" cuando el barrido cruza su ángulo
 * (retardo calculado por ángulo). Con prefers-reduced-motion el barrido
 * queda congelado a 45° y los blips fijos al 100% (ver index.css).
 */
const Radar = () => {
  const years = serviceYears();

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-square w-[280px] sm:w-[340px] xl:w-[440px]">
        {/* Instrumento: anillos de alcance, cruz filar y graduaciones */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="100" cy="100" r="98" fill="none" stroke="#1d3038" strokeWidth="1" />
          {[78, 58, 39, 19].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#122024" strokeWidth="1" />
          ))}
          <line x1="100" y1="2" x2="100" y2="198" stroke="#122024" strokeWidth="1" />
          <line x1="2" y1="100" x2="198" y2="100" stroke="#122024" strokeWidth="1" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const x1 = 100 + 92 * Math.sin(a);
            const y1 = 100 - 92 * Math.cos(a);
            const x2 = 100 + 98 * Math.sin(a);
            const y2 = 100 - 98 * Math.cos(a);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#2e5c46"
                strokeWidth="1.5"
              />
            );
          })}
          <rect x="98.5" y="98.5" width="3" height="3" fill="#4bf0a7" opacity="0.7" />
        </svg>

        {/* Barrido de fósforo: línea al frente, estela decayendo detrás */}
        <div
          aria-hidden="true"
          className="radar-sweep absolute inset-[1%] rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, transparent 285deg, rgba(75, 240, 167, 0.03) 285deg, rgba(75, 240, 167, 0.22) 356deg, rgba(75, 240, 167, 0.5) 360deg)',
          }}
        />

        {/* Contactos: los tres proyectos reales, clicables */}
        {PROJECTS.map((project) => (
          <a
            key={project.designation}
            href={`#${project.anchor}`}
            aria-label={`Ir al proyecto ${project.title}`}
            className={`absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm ${FOCUS_RING}`}
            style={blipPosition(project.radar)}
          >
            <span
              className="blip"
              style={{ animationDelay: `${(project.radar.angle / 360) * SWEEP_SECONDS}s` }}
            >
              <span className="block h-2.5 w-2.5 bg-fosforo glow-phosphor" />
              <span className="absolute left-1/2 top-[calc(100%-8px)] -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-instrument text-fosforo">
                {project.designation} {project.title.toUpperCase()}
              </span>
            </span>
          </a>
        ))}
      </div>

      {/* Reloj de misión: computado desde la fecha real de alta */}
      <p className="text-center font-mono text-[11px] leading-relaxed tracking-instrument text-niebla">
        <span className="text-fosforo">T+{String(years).padStart(2, '0')} AÑOS</span> EN SERVICIO
        ACTIVO
        <span className="block text-[10px] text-niebla">
          DESDE FEB 2021 · {PROFILE.coordinates}
        </span>
      </p>
    </div>
  );
};

export default Radar;
