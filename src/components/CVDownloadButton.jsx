import { useState } from 'react';

const CVDownloadButton = ({ className, children }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./CVDocument'),
      ]);

      const blob = await pdf(<CVDocument />).toBlob();
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });

      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_Miguel_Jimenez_Rodriguez.pdf';
      link.type = 'application/pdf';

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Hubo un error al generar el CV. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleDownload} className={className} disabled={loading}>
      {loading ? 'Generando CV...' : (children || 'Descargar CV')}
    </button>
  );
};

export default CVDownloadButton;
