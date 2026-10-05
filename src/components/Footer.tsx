import React from 'react';

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
                <a href="#proyectos" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span className="text-blue-500">#</span> Proyectos
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
                href="https://github.com/FernadoOXD"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-cyan-500/50 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </div>
                <span className="text-zinc-500 group-hover:text-cyan-400 text-xs transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>

              <a
                href="https://www.linkedin.com/in/fernando-reyes-4b3091356/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-blue-500/50 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.93H5.06v8.57z" />
                  </svg>
                  <span>LinkedIn</span>
                </div>
                <span className="text-zinc-500 group-hover:text-blue-400 text-xs transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=fereyesgomez@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Enviar correo</span>
                </div>
                <span className="text-zinc-500 group-hover:text-purple-400 text-xs transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
            </div>
                      </div>
            <div className="pt-4">
              <a href="#contacto"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>// Conectar en Contacto</span>
                <span>&rarr;</span>
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

    </footer>
  );
}

export default Footer;
