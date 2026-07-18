export const PROFILE = {
  name: 'Miguel Jiménez Rodríguez',
  shortName: 'Miguel Jiménez',
  role: 'Frontend Developer',
  location: 'Aranjuez, España',
  coordinates: '40.03°N 3.60°O',
  availability: 'En Indra, pero escucho propuestas',
  statusLabel: 'En escucha',
  // Alta en Indra: febrero de 2021 (dato real del CV, alimenta el reloj de misión T+)
  serviceStart: '2021-02-01',
  email: 'migueljiroz@gmail.com',
  github: {
    handle: 'MiguelJiRo',
    url: 'https://github.com/MiguelJiRo',
    display: 'github.com/MiguelJiRo',
  },
  linkedin: {
    handle: 'migueljiroz',
    url: 'https://linkedin.com/in/migueljiroz',
    display: 'linkedin.com/in/migueljiroz',
  },
  telegram: {
    handle: 'Hisstrel',
    url: 'https://t.me/Hisstrel',
    display: 't.me/Hisstrel',
  },
};

export const CURRENT_YEAR = new Date().getFullYear();

/** Años completos en servicio desde la fecha de alta (para el reloj de misión). */
export function serviceYears(now = new Date()) {
  const start = new Date(PROFILE.serviceStart);
  let years = now.getFullYear() - start.getFullYear();
  const anniversary = new Date(start);
  anniversary.setFullYear(start.getFullYear() + years);
  if (now < anniversary) years -= 1;
  return years;
}
