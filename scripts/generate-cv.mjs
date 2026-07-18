/**
 * Genera el CV en PDF en tiempo de build (prebuild/predev) a partir del mismo
 * CVDocument.jsx que usa el resto del proyecto. Así el botón "Descargar CV"
 * es un enlace estático instantáneo y el cliente no carga @react-pdf/renderer
 * (~500 KB gzip) para producir un fichero que siempre es idéntico.
 */
import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bundle = path.join(root, 'node_modules', '.cache', 'cv-document.mjs');
const dest = path.join(root, 'public', 'CV_Miguel_Jimenez_Rodriguez.pdf');

await mkdir(path.dirname(bundle), { recursive: true });
await build({
  entryPoints: [path.join(root, 'src', 'components', 'CVDocument.jsx')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  packages: 'external',
  jsx: 'automatic',
  outfile: bundle,
  logLevel: 'error',
});

const [cvModule, pdfModule, reactModule] = await Promise.all([
  import(pathToFileURL(bundle)),
  import('@react-pdf/renderer'),
  import('react'),
]);
const CVDocument = cvModule.default;
const React = reactModule.default ?? reactModule;

await pdfModule.renderToFile(React.createElement(CVDocument), dest);
console.log(`CV generado en ${path.relative(root, dest)}`);
