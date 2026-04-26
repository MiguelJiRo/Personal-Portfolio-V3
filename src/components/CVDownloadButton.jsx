import { useState } from 'react';

const FILENAME = 'CV_Miguel_Jimenez_Rodriguez.pdf';

const CVDownloadButton = ({ className, children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);

    let url;
    try {
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./CVDocument'),
      ]);

      const blob = await pdf(<CVDocument />).toBlob();
      url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = FILENAME;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Error al generar el PDF:', err);
      setError('No pudimos generar el CV. Inténtalo de nuevo en unos segundos.');
    } finally {
      if (url) URL.revokeObjectURL(url);
      setLoading(false);
    }
  };

  return (
    <span className="inline-flex flex-col gap-2">
      <button
        type="button"
        onClick={handleDownload}
        className={className}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? 'Generando CV…' : children || 'Descargar CV'}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {loading ? 'Generando CV, espera unos segundos.' : ''}
      </span>
      {error && (
        <span role="alert" className="text-sm text-red-400">
          {error}
        </span>
      )}
    </span>
  );
};

export default CVDownloadButton;
