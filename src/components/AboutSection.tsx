import { getAssetPath } from '../utils/assets';

interface TechSkill {
  name: string;
  category: string;
  level: string;
  color: string;
}

const skills: TechSkill[] = [
  { name: 'React / Next.js', category: 'Frontend', level: 'Avanzado', color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript / JS', category: 'Lenguaje', level: 'Avanzado', color: 'from-blue-500 to-indigo-500' },
  { name: 'Astro', category: 'Framework', level: 'Avanzado', color: 'from-purple-500 to-pink-500' },
  { name: 'Tailwind CSS', category: 'Estilos', level: 'Avanzado', color: 'from-cyan-400 to-teal-500' },
  { name: 'Node.js / Express', category: 'Backend', level: 'Intermedio', color: 'from-emerald-500 to-green-600' },
  { name: 'Python / FastAPI', category: 'Backend', level: 'Intermedio', color: 'from-yellow-500 to-amber-600' },
  { name: 'PostgreSQL / MongoDB', category: 'Bases de Datos', level: 'Intermedio', color: 'from-blue-600 to-cyan-600' },
  { name: 'Docker / Cloud', category: 'DevOps', level: 'En aprendizaje', color: 'from-orange-500 to-rose-500' },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-zinc-950/80 border-t border-zinc-800/80 relative overflow-hidden">

      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 mb-2">
            <span>// Conoce al Autor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Acerca de{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Fernando R. G.
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Estudiante y desarrollador de software enfocado en crear arquitecturas web limpias, modernas y escalables.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">

          {/* Bio Card */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-zinc-700/60 shadow-lg shadow-cyan-500/5">
                <img
                  src={getAssetPath('img/logoFRG_definitivo.webp')}
                  alt="Fernando R. G. Logo"
                  className="h-11 w-11 object-contain rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getAssetPath('img/logoFRG_definitivo.webp');
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sans">Pasión por el Código &amp; la Innovación</h3>
                <p className="text-xs font-mono text-zinc-400">Estudiante de Ingeniería en TI e Innovación Digital | UPChiapas</p>
              </div>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              ¡Hola! Bienvenido a <strong className="text-white">Blog-DEV</strong>. Soy estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Chiapas. Este es mi espacio personal donde documento mi aprendizaje diario, patrones de arquitectura de software, desarrollo backend y frontend, y experimentos con tecnologías web.
            </p>
            {/* Sección Contacta conmigo */}
            <div className="pt-2 border-t border-zinc-800/80 space-y-3">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="text-cyan-400">//</span>
                <span>Canales de contacto &amp; redes:</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://github.com/FernadoOXD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800/90 hover:border-cyan-500/50 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-cyan-500/5 hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span className="text-xs font-mono font-medium text-zinc-200 group-hover:text-white">GitHub</span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-cyan-400 text-xs transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/fernando-reyes-4b3091356/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800/90 hover:border-blue-500/50 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.93H5.06v8.57z" />
                    </svg>
                    <span className="text-xs font-mono font-medium text-zinc-200 group-hover:text-white">LinkedIn</span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-blue-400 text-xs transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=fereyesgomez@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800/90 hover:border-purple-500/50 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/5 hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-mono font-medium text-zinc-200 group-hover:text-white">Correo</span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-purple-400 text-xs transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack / Skills Card */}
          <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <h3 className="text-lg font-bold text-white font-sans">Stack Tecnológico</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">Herramientas</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></span>
                    <span className="font-semibold text-zinc-200">{skill.name}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contacto"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>// Conectar en Contacto</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
