import { useState, useMemo } from 'react';
import { proyectos, type Proyecto } from '../data/proyectos';

const getCategoryColor = (categoria: string) => {
  switch (categoria.toLowerCase()) {
    case 'frontend':
      return 'text-cyan-400 bg-cyan-950/40 border-cyan-800/60';
    case 'backend':
      return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/60';
    case 'fullstack':
      return 'text-purple-400 bg-purple-950/40 border-purple-800/60';
    case 'herramientas':
      return 'text-amber-400 bg-amber-950/40 border-amber-800/60';
    case 'mobile':
      return 'text-rose-400 bg-rose-950/40 border-rose-800/60';
    default:
      return 'text-zinc-400 bg-zinc-900 border-zinc-700/60';
  }
};

const getStatusBadge = (estado?: string) => {
  switch (estado) {
    case 'Completado':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Completado
        </span>
      );
    case 'En desarrollo':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-950/60 border border-amber-800/60 text-amber-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          En desarrollo
        </span>
      );
    case 'Open Source':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-purple-950/60 border border-purple-800/60 text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          Open Source
        </span>
      );
    default:
      return null;
  }
};

export function ProjectsSection() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');

  const categorias = useMemo(() => {
    const cats = Array.from(new Set(proyectos.map((p) => p.categoria)));
    return ['Todos', ...cats];
  }, []);

  const proyectosFiltrados = useMemo(() => {
    if (categoriaSeleccionada === 'Todos') {
      return proyectos;
    }
    return proyectos.filter((p) => p.categoria === categoriaSeleccionada);
  }, [categoriaSeleccionada]);

  return (
    <section id="proyectos" className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-800/80 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/80 pb-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
              <span>// Portafolio &amp; Creaciones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>Proyectos</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Destacados
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-normal">
                {proyectosFiltrados.length} items
              </span>
            </h2>
            <p className="text-zinc-400 mt-2 text-base sm:text-lg max-w-2xl leading-relaxed">
              Soluciones construidas con buenas prácticas, arquitectura escalable y tecnologías modernas.
            </p>
          </div>

          {/* Filtros de Categorías */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categorias.map((cat) => {
              const activa = categoriaSeleccionada === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${activa
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-950 font-bold shadow-md shadow-cyan-500/20'
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
        {proyectosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {proyectosFiltrados.map((proyecto) => {
              const categoryColor = getCategoryColor(proyecto.categoria);

              return (
                <article
                  key={proyecto.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 backdrop-blur-sm overflow-hidden text-left"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {proyecto.imagen && (
                      <div className="mb-5 h-48 sm:h-56 w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/80 relative flex items-center justify-center">
                        <img
                          src={proyecto.imagen}
                          alt={proyecto.titulo}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/img/ToArt/default_image.webp';
                          }}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                        {/* Metricas o Destacado sobre la imagen */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                          {proyecto.metricas && (
                            <span className="px-2.5 py-1 rounded-md bg-zinc-950/90 border border-zinc-700/80 text-[11px] font-mono text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                              <span className="text-cyan-400">&gt;</span>
                              {proyecto.metricas}
                            </span>
                          )}
                          {proyecto.destacado && (
                            <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 text-[11px] font-mono font-bold text-amber-300 backdrop-blur-md shadow-sm">
                              ★ Destacado
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Cabecera de Tags & Estado */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${categoryColor}`}>
                        <span>#</span>
                        <span>{proyecto.categoria}</span>
                      </span>

                      {getStatusBadge(proyecto.estado)}
                    </div>

                    {/* Título */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 font-sans leading-snug mb-3">
                      {proyecto.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm text-zinc-300 leading-relaxed mb-4 font-sans">
                      {proyecto.descripcion}
                    </p>

                    {/* Lista de características / Highlights */}
                    {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
                      <div className="space-y-1.5 mb-5 font-sans text-xs text-zinc-400">
                        {proyecto.caracteristicas.map((caract, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">✦</span>
                            <span>{caract}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags Tecnológicos */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proyecto.tecnologias.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de Acción / Enlaces */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    {proyecto.githubUrl && (
                      <a
                        href={proyecto.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-750 text-zinc-200 hover:text-white border border-zinc-700/80 transition-all duration-200 hover:shadow-md cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-zinc-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>Ver Código</span>
                      </a>
                    )}

                    {proyecto.demoUrl && proyecto.demoUrl.trim() !== '' && proyecto.demoUrl.trim() !== '#' ? (
                      <a
                        href={proyecto.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:translate-x-0.5 cursor-pointer"
                      >
                        <span>Demo en Vivo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 text-xs select-none"
                        title="Este proyecto no cuenta con demo en vivo desplegada actualmente"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                        <span>Sin Demo en Vivo</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 font-mono">
            <p className="text-zinc-400 text-base mb-2">
              <span className="text-cyan-400 font-bold">&gt;</span> No hay proyectos registrados en esta categoría.
            </p>
            <button
              onClick={() => setCategoriaSeleccionada('Todos')}
              className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 transition-colors cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectsSection;
