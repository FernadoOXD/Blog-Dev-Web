import { useState, useMemo } from 'react';
import { articulos, type Articulo } from '../data/articulos';
import { CardArticulo } from './CardArticulo';
import { ModalArticulo } from './ModalArticulo';

interface ListaArticulosProps {
  searchQuery?: string;
}

export function ListaArticulos({ searchQuery = '' }: ListaArticulosProps) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [articuloSeleccionado, setArticuloSeleccionado] = useState<Articulo | null>(null);

  const categorias = useMemo(() => {
    const tags = Array.from(new Set(articulos.map((a) => a.etiqueta)));
    return ['Todos', ...tags];
  }, []);

  // Filtrar artículos por categoría y búsqueda
  const articulosFiltrados = useMemo(() => {
    return articulos.filter((art) => {
      const coincideCategoria =
        categoriaSeleccionada === 'Todos' || art.etiqueta === categoriaSeleccionada;

      const coincideBusqueda =
        searchQuery.trim() === '' ||
        art.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.resumen.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.etiqueta.toLowerCase().includes(searchQuery.toLowerCase());

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoriaSeleccionada, searchQuery]);

  return (
    <section id="articulos" className="py-16 md:py-24 bg-zinc-950 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-zinc-800/80 pb-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
              <span>// Publicaciones y Guías</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>Explorar Artículos</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-normal">
                {articulosFiltrados.length} posts
              </span>
            </h2>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
              Tutoriales prácticos, análisis de tecnologías modernas y notas de arquitectura.
            </p>
          </div>

          {/* Filtros de Categorías / Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categorias.map((cat) => {
              const activa = categoriaSeleccionada === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${activa
                      ? 'bg-cyan-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                    }`}
                >
                  {cat !== 'Todos' && <span className="opacity-60 mr-1">#</span>}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Cards */}
        {articulosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articulosFiltrados.map((articulo) => (
              <CardArticulo
                key={articulo.id}
                articulo={articulo}
                onSelect={(art) => setArticuloSeleccionado(art)}
              />
            ))}
          </div>
        ) : (
          /* Estado vacío si no hay coincidencias */
          <div className="text-center py-16 px-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 font-mono">
            <p className="text-zinc-400 text-base mb-2">
              <span className="text-cyan-400 font-bold">&gt;</span> No se encontraron artículos para el filtro seleccionado.
            </p>
            <button
              onClick={() => setCategoriaSeleccionada('Todos')}
              className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>

      <ModalArticulo
        articulo={articuloSeleccionado}
        onClose={() => setArticuloSeleccionado(null)}
      />
    </section>
  );
}

export default ListaArticulos;
