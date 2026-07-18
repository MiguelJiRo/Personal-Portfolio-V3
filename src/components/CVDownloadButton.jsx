// El PDF se pre-genera en build (scripts/generate-cv.mjs) desde CVDocument.jsx:
// descarga instantánea sin cargar @react-pdf/renderer en el navegador.
const CV_URL = '/CV_Miguel_Jimenez_Rodriguez.pdf';

const CVDownloadButton = ({ className, children }) => (
  <a href={CV_URL} download className={className}>
    {children || 'Descargar CV'}
  </a>
);

export default CVDownloadButton;
