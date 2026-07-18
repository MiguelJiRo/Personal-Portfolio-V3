export const SECTIONS = [
  {
    id: 'home',
    label: 'Inicio',
    code: 'SEC-01',
    codeName: 'SEÑAL',
  },
  {
    id: 'about',
    label: 'Sobre mí',
    code: 'SEC-02',
    codeName: 'HOJA DE SERVICIOS',
  },
  {
    id: 'projects',
    label: 'Proyectos',
    code: 'SEC-03',
    codeName: 'REGISTRO DE OPERACIONES',
  },
  {
    id: 'skills',
    label: 'Stack',
    code: 'SEC-04',
    codeName: 'MANIFIESTO DE EQUIPAMIENTO',
  },
  {
    id: 'contact',
    label: 'Contacto',
    code: 'SEC-05',
    codeName: 'CANAL DE ENLACE',
  },
];

export const SECTION_BY_ID = Object.fromEntries(
  SECTIONS.map((section, index) => [
    section.id,
    { ...section, number: String(index + 1).padStart(2, '0') },
  ]),
);

export const SECTION_IDS = SECTIONS.map((s) => s.id);
