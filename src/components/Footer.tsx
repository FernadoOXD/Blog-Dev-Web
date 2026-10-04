export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 font-sans text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
          
          {/* Columna Marca & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-xl tracking-tight text-white flex items-center gap-1">
                <span className="text-cyan-400">&lt;</span>
                <span>Blog</span>
                <span className="text-purple-400">DEV</span>
                <span className="text-cyan-400">/&gt;</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
              Plataforma de notas técnicas, ingeniería de software, tutoriales de React, Astro y arquitecturas en la nube.
            </p>
            <div className="pt-2 font-mono text-xs text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Desarrollado con Astro 5 + React 19 + Tailwind CSS</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">// Navegación</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">#</span> Inicio
                </a>
              </li>
              <li>
                <a href="#articulos" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span className="text-purple-500">#</span> Artículos
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span className="text-emerald-500">#</span> Acerca de Fernando
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto & Redes */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">// Contacto</h4>
            <p className="text-zinc-400 text-xs font-sans">
              ¿Tienes alguna duda o te gustaría colaborar en un proyecto?
            </p>
            <div className="space-y-2 pt-1">
              <a
                href="mailto:fernando@upchiapas.edu.mx"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>fernando@upchiapas.edu.mx</span>
              </a>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <p>© {currentYear} Blog-DEV — Fernando R. G. Todos los derechos reservados.</p>
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>Volver arriba</span>
            <span>&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
