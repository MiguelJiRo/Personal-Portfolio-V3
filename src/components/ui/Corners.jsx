/**
 * Brackets en L en las 4 esquinas de un panel — el motivo estructural del
 * sistema visual. El contenedor debe ser `relative`; el color se hereda vía
 * `text-*` (border-current), lo que permite encenderlos en hover del grupo.
 */
const Corners = ({ className = 'text-fosforo/40' }) => (
  <span aria-hidden="true" className={`pointer-events-none absolute inset-0 transition-colors duration-200 ${className}`}>
    <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-current" />
    <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-current" />
    <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-current" />
    <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-current" />
  </span>
);

export default Corners;
