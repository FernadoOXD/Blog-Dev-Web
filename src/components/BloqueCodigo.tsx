import { useState } from 'react';

interface BloqueCodigoProps {
  lenguaje: string;
  codigo: string;
}

export function BloqueCodigo({ lenguaje, codigo }: BloqueCodigoProps) {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Error al copiar código:', err);
    }
  };

  const handleDescargar = () => {
    const extensions: Record<string, string> = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      json: 'json',
      yaml: 'yml',
      yml: 'yml',
      sql: 'sql',
      bash: 'sh',
      html: 'html',
      css: 'css'
    };
    const ext = extensions[lenguaje.toLowerCase()] || 'txt';
    const blob = new Blob([codigo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `snippet.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-6 rounded-2xl bg-[#121214] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/60 bg-[#16161a]">
        <span className="font-sans font-bold text-sm text-zinc-200">
          {lenguaje}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDescargar}
            className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 rounded-lg transition-colors cursor-pointer"
            title="Descargar snippet"
            aria-label="Descargar código"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          <button
            onClick={handleCopiar}
            className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Copiar al portapapeles"
            aria-label="Copiar código"
          >
            {copiado ? (
              <span className="flex items-center gap-1 text-emerald-400 text-xs font-sans">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="hidden sm:inline">¡Copiado!</span>
              </span>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="p-5 overflow-x-auto text-zinc-300 leading-relaxed scrollbar-thin scrollbar-thumb-zinc-700">
        <pre className="font-mono">{codigo}</pre>
      </div>
    </div>
  );
}

export default BloqueCodigo;
