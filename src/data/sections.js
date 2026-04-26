export const SECTIONS = [
  { id: 'home', label: 'Inicio', slug: 'inicio' },
  { id: 'about', label: 'Sobre Mí', slug: 'sobre-mí' },
  { id: 'projects', label: 'Proyectos', slug: 'proyectos' },
  { id: 'skills', label: 'Stack', slug: 'stack' },
  { id: 'contact', label: 'Contacto', slug: 'contacto' },
];

export const SECTION_BY_ID = Object.fromEntries(
  SECTIONS.map((section, index) => [
    section.id,
    { ...section, number: String(index).padStart(2, '0') },
  ]),
);

export const SECTION_IDS = SECTIONS.map((s) => s.id);
