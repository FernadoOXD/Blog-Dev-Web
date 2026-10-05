import type { Articulo } from '../data/articulos';
import { getAssetPath } from '../utils/assets';

interface CardArticuloProps {
  articulo: Articulo;
  onSelect: (articulo: Articulo) => void;
}

// Mapa de colores por categoría
const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'frontend':
      return 'text-cyan-400 bg-cyan-950/40 border-cyan-800/60 group-hover:border-cyan-500/80';
    case 'backend':
      return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/60 group-hover:border-emerald-500/80';
    case 'arquitectura':
      return 'text-purple-400 bg-purple-950/40 border-purple-800/60 group-hover:border-purple-500/80';
    case 'despliegue':
    case 'devops':
      return 'text-amber-400 bg-amber-950/40 border-amber-800/60 group-hover:border-amber-500/80';
    case 'bases de datos':
      return 'text-blue-400 bg-blue-950/40 border-blue-800/60 group-hover:border-blue-500/80';
    case 'productividad':
    case 'herramientas':
      return 'text-rose-400 bg-rose-950/40 border-rose-800/60 group-hover:border-rose-500/80';
    default:
      return 'text-zinc-400 bg-zinc-900 border-zinc-700/60';
  }
};

export function CardArticulo({ articulo, onSelect }: CardArticuloProps) {
  const tagColorClass = getTagColor(articulo.etiqueta);

  return (
    <article
      onClick={() => onSelect(articulo)}
      className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-cyan-500/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 cursor-pointer backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -right-12 -top-12 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

      <div>
        {articulo.imagenCabecera && (
          <div className="mb-4 h-44 w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/80 relative flex items-center justify-center">
            <img
              src={getAssetPath(articulo.imagenCabecera)}
              alt={articulo.titulo}
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetPath('img/ToArt/default_image.webp');
              }}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors ${tagColorClass}`}>
            <span>#</span>
            <span>{articulo.etiqueta}</span>
          </span>

          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{articulo.tiempoLectura}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 line-clamp-2 leading-snug mb-3 font-sans">
          {articulo.titulo}
        </h3>
        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-6 font-sans">
          {articulo.resumen}
        </p>
      </div>
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-zinc-400 flex items-center gap-1">
          <span className="text-zinc-500">//</span>
          <span>{articulo.fecha}</span>
        </span>

        <span className="inline-flex items-center gap-1 text-cyan-400 group-hover:text-cyan-300 font-semibold transition-transform duration-200 group-hover:translate-x-1">
          <span>Leer artículo</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </article>
  );
}

export default CardArticulo;
