import { useEffect } from 'react';
import type { Articulo } from '../data/articulos';
import { BloqueCodigo } from './BloqueCodigo';
import { getAssetPath } from '../utils/assets';

interface ModalArticuloProps {
  articulo: Articulo | null;
  onClose: () => void;
}

export function ModalArticulo({ articulo, onClose }: ModalArticuloProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (articulo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [articulo, onClose]);

  if (!articulo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/85 backdrop-blur-md animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden z-10 text-left">

        <div className="bg-zinc-950 px-4 sm:px-6 py-3.5 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
              title="Cerrar (Esc)"
            />
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 truncate max-w-[200px] sm:max-w-md">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span className="truncate">{articulo.titulo.toLowerCase().replace(/[^a-z0-9]/g, '-')}.md</span>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-zinc-700">

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 font-semibold shadow-xs">
              #{articulo.etiqueta}
            </span>
            <span className="text-zinc-400 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {articulo.fecha}
            </span>
            <span className="text-zinc-400 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {articulo.tiempoLectura} de lectura
            </span>
            <span className="text-zinc-400 flex items-center gap-1.5 ml-auto hidden sm:flex">
              <span className="text-cyan-500 font-bold">//</span>
              <span>Por Fernando R. G.</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
            {articulo.titulo}
          </h1>
          <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border-l-4 border-cyan-500 border-y border-r border-zinc-800/80 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed shadow-inner">
            <p className="font-mono text-xs text-cyan-400 mb-1.5 font-bold uppercase tracking-wider">
              // Resumen Ejecutivo
            </p>
            {articulo.resumen}
          </div>

          {articulo.imagenCabecera && (
            <div className="rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950/80 p-2 sm:p-3 shadow-xl flex items-center justify-center">
              <div className="w-full flex items-center justify-center bg-zinc-950/60 rounded-xl overflow-hidden border border-zinc-900">
                <img
                  src={getAssetPath(articulo.imagenCabecera)}
                  alt={articulo.titulo}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getAssetPath('img/ToArt/default_image.webp');
                  }}
                  className="w-full h-auto max-h-72 sm:max-h-96 md:max-h-[420px] object-contain rounded-lg transition-transform duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          <div className="space-y-8 pt-2">
            {articulo.secciones && articulo.secciones.map((seccion, idx) => (
              <section key={idx} className="space-y-4">
                {seccion.subtitulo && (
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2 font-sans border-b border-zinc-800/60 pb-2">
                    <span className="text-cyan-400 font-mono text-lg">#</span>
                    <span>{seccion.subtitulo}</span>
                  </h2>
                )}

                {seccion.parrafos && seccion.parrafos.map((p, pIdx) => (
                  <p key={pIdx} className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                    {p}
                  </p>
                ))}

                {seccion.puntosClave && seccion.puntosClave.length > 0 && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {seccion.puntosClave.map((punto, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                        <span className="text-cyan-400 font-mono font-bold mt-1 text-xs">▹</span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {seccion.codigo && (
                  <BloqueCodigo
                    lenguaje={seccion.codigo.lenguaje}
                    codigo={seccion.codigo.codigo}
                  />
                )}

                {seccion.codigoSecundario && (
                  <BloqueCodigo
                    lenguaje={seccion.codigoSecundario.lenguaje}
                    codigo={seccion.codigoSecundario.codigo}
                  />
                )}

                {seccion.imagen && seccion.imagen.src && (
                  <figure className="my-6 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950/80 p-2 sm:p-4 space-y-2.5 shadow-xl">
                    <div className="flex items-center justify-center w-full bg-zinc-950/60 rounded-xl overflow-hidden border border-zinc-900">
                      <img
                        src={getAssetPath(seccion.imagen.src)}
                        alt={seccion.imagen.alt}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getAssetPath('img/ToArt/default_image.webp');
                        }}
                        className="w-full h-auto max-h-[550px] object-contain rounded-lg transition-transform duration-300 hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    {seccion.imagen.pieDeFoto && (
                      <figcaption className="text-xs font-mono text-center text-zinc-400 px-2 py-1 bg-zinc-900/50 rounded-md border border-zinc-800/50">
                        {seccion.imagen.pieDeFoto}
                      </figcaption>
                    )}
                  </figure>
                )}

                {seccion.nota && (
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/60 text-cyan-200 text-xs sm:text-sm font-sans flex items-start gap-3 my-4">
                    <span className="text-cyan-400 text-lg font-mono leading-none mt-0.5">💡</span>
                    <div>{seccion.nota.texto}</div>
                  </div>
                )}

              </section>
            ))}
          </div>

        </div>

        <div className="bg-zinc-950 px-5 sm:px-8 py-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 font-mono text-xs">
          <div className="text-zinc-400 flex items-center gap-2">
            <span>Escrito por:</span>
            <span className="text-zinc-200 font-bold bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
              Fernando R. G.
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 cursor-pointer"
          >
            <span>Volver a los Artículos</span>
            <span>&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ModalArticulo;
