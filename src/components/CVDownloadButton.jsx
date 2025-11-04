import { pdf } from '@react-pdf/renderer';
import CVDocument from './CVDocument';

const CVDownloadButton = ({ className, children }) => {
  const handleDownload = async () => {
    try {
      // Generar el PDF
      const blob = await pdf(<CVDocument />).toBlob();

      // Crear blob con el tipo MIME correcto
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });

      // Crear un enlace temporal para descargar
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_Miguel_Jimenez_Rodriguez.pdf';
      link.type = 'application/pdf';

      // Simular clic para descargar
      document.body.appendChild(link);
      link.click();

      // Limpiar con un pequeño delay para asegurar la descarga
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Hubo un error al generar el CV. Por favor, intenta nuevamente.');
    }
  };

  return (
    <button onClick={handleDownload} className={className}>
      {children || 'Descargar CV'}
    </button>
  );
};

export default CVDownloadButton;
