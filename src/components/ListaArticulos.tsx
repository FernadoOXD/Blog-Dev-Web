import { useState, useMemo, useEffect } from 'react';
import { articulos, type Articulo } from '../data/articulos';
import { CardArticulo } from './CardArticulo';
import { ModalArticulo } from './ModalArticulo';

interface ListaArticulosProps {
  searchQuery?: string;
}

const ARTICULOS_POR_BLOQUE = 6;

export function ListaArticulos({ searchQuery = '' }: ListaArticulosProps) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [articuloSeleccionado, setArticuloSeleccionado] = useState<Articulo | null>(null);
  const [paginaActual, setPaginaActual] = useState<number>(1);

  const categorias = useMemo(() => {
    const tags = Array.from(new Set(articulos.map((a) => a.etiqueta)));
    return ['Todos', ...tags];
  }, []);

  // Reiniciar a la página 1 cuando cambia el filtro de categoría o término de búsqueda
  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaSeleccionada, searchQuery]);

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

  // Cálculos dinámicos de paginación
  const totalPaginas = Math.ceil(articulosFiltrados.length / ARTICULOS_POR_BLOQUE) || 1;
  const paginaValida = Math.min(Math.max(1, paginaActual), totalPaginas);

  const indiceInicio = (paginaValida - 1) * ARTICULOS_POR_BLOQUE;
  const indiceFin = Math.min(indiceInicio + ARTICULOS_POR_BLOQUE, articulosFiltrados.length);
  const articulosPaginados = articulosFiltrados.slice(indiceInicio, indiceFin);

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas && nuevaPagina !== paginaActual) {
      setPaginaActual(nuevaPagina);
      const el = document.getElementById('articulos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Generador inteligente de números de página con elipsis (...) para cuando crezca el blog
  const obtenerNumerosPagina = () => {
    const paginas: (number | string)[] = [];
    if (totalPaginas <= 7) {
      for (let i = 1; i <= totalPaginas; i++) paginas.push(i);
    } else {
      if (paginaValida <= 4) {
        paginas.push(1, 2, 3, 4, 5, '...', totalPaginas);
      } else if (paginaValida >= totalPaginas - 3) {
        paginas.push(1, '...', totalPaginas - 4, totalPaginas - 3, totalPaginas - 2, totalPaginas - 1, totalPaginas);
      } else {
        paginas.push(1, '...', paginaValida - 1, paginaValida, paginaValida + 1, '...', totalPaginas);
      }
    }
    return paginas;
  };

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

            {/* Aviso si hay búsqueda activa */}
            {searchQuery.trim() !== '' && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50 text-xs font-mono text-cyan-300">
                <span>Filtrando por: &quot;<strong>{searchQuery}</strong>&quot;</span>
                <span className="text-zinc-400">({articulosFiltrados.length} resultados)</span>
              </div>
            )}
          </div>

          {/* Filtros de Categorías / Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categorias.map((cat) => {
              const activa = categoriaSeleccionada === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activa
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

        {/* Grid de Cards por Bloques */}
        {articulosFiltrados.length > 0 ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articulosPaginados.map((articulo) => (
                <CardArticulo
                  key={articulo.id}
                  articulo={articulo}
                  onSelect={(art) => setArticuloSeleccionado(art)}
                />
              ))}
            </div>

            {/* Paginación por Bloques [1] [2] [3] ... */}
            {totalPaginas > 1 && (
              <div className="flex flex-col items-center justify-center pt-8 border-t border-zinc-800/60 font-mono space-y-4">
                
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
                  
                  {/* Botón Anterior */}
                  <button
                    onClick={() => cambiarPagina(paginaValida - 1)}
                    disabled={paginaValida === 1}
                    className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 border transition-all duration-200 ${
                      paginaValida === 1
                        ? 'bg-zinc-950 text-zinc-600 border-zinc-850 cursor-not-allowed opacity-50'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-cyan-400 border-zinc-800 hover:border-cyan-500/50 cursor-pointer shadow-md'
                    }`}
                    aria-label="Página anterior"
                  >
                    <span>&larr;</span>
                    <span className="hidden sm:inline">Anterior</span>
                  </button>

                  {/* Números de Bloques / Páginas */}
                  {obtenerNumerosPagina().map((item, idx) => {
                    if (item === '...') {
                      return (
                        <span key={`ellipsis-${idx}`} className="px-2.5 py-2 text-xs text-zinc-500">
                          ...
                        </span>
                      );
                    }

                    const numeroPagina = item as number;
                    const esActiva = numeroPagina === paginaValida;

                    return (
                      <button
                        key={`page-${numeroPagina}`}
                        onClick={() => cambiarPagina(numeroPagina)}
                        className={`min-w-[38px] sm:min-w-[42px] h-[38px] sm:h-[42px] px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center justify-center ${
                          esActiva
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-950 border border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105'
                            : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {numeroPagina}
                      </button>
                    );
                  })}

                  {/* Botón Siguiente */}
                  <button
                    onClick={() => cambiarPagina(paginaValida + 1)}
                    disabled={paginaValida === totalPaginas}
                    className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 border transition-all duration-200 ${
                      paginaValida === totalPaginas
                        ? 'bg-zinc-950 text-zinc-600 border-zinc-850 cursor-not-allowed opacity-50'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-cyan-400 border-zinc-800 hover:border-cyan-500/50 cursor-pointer shadow-md'
                    }`}
                    aria-label="Página siguiente"
                  >
                    <span className="hidden sm:inline">Siguiente</span>
                    <span>&rarr;</span>
                  </button>
                </div>

                {/* Subtítulo informativo */}
                <p className="text-xs text-zinc-400 text-center">
                  Bloque <strong className="text-white">{paginaValida}</strong> de <strong className="text-white">{totalPaginas}</strong> &mdash; Mostrando {indiceInicio + 1}-{indiceFin} de {articulosFiltrados.length} artículos
                </p>

              </div>
            )}
          </div>
        ) : (
          /* Estado vacío si no hay coincidencias */
          <div className="text-center py-16 px-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 font-mono">
            <p className="text-zinc-400 text-base mb-2">
              <span className="text-cyan-400 font-bold">&gt;</span> No se encontraron artículos que coincidan con &quot;<strong>{searchQuery}</strong>&quot;.
            </p>
            <p className="text-xs text-zinc-500 mb-4">
              Prueba buscando por tecnologías como React, Tailwind, Python, o MVC.
            </p>
            <button
              onClick={() => {
                setCategoriaSeleccionada('Todos');
              }}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 transition-colors cursor-pointer"
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

