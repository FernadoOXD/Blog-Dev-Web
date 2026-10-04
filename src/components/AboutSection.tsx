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
      {/* Background glow */}
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Bio Card */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-zinc-700/60 shadow-lg shadow-cyan-500/5">
                <img
                  src="/img/logoFRG_definitivo.webp"
                  alt="Fernando R. G. Logo"
                  className="h-11 w-11 object-contain rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/img/logoFRG_definitivo.webp';
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sans">Pasión por el Código &amp; la Innovación</h3>
                <p className="text-xs font-mono text-zinc-400">Universidad Politécnica de Chiapas (UPChiapas)</p>
              </div>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Bienvenido a <strong className="text-white">Blog-DEV</strong>, mi espacio personal donde documento aprendizajes, patrones de arquitectura de software, buenas prácticas en desarrollo frontend con React y Astro, APIs robustas y exploración de tecnologías en la nube.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Creo firmemente en el poder del software bien estructurado, el código limpio y la documentación continua como herramientas indispensables para el crecimiento profesional en tecnología.
            </p>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80 font-mono">
              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/90">
                <span className="text-2xl font-black text-cyan-400">10+</span>
                <p className="text-xs text-zinc-400 mt-1">Artículos técnicos</p>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/90">
                <span className="text-2xl font-black text-purple-400">100%</span>
                <p className="text-xs text-zinc-400 mt-1">Stack moderno</p>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/90">
                <span className="text-2xl font-black text-emerald-400">Astro+</span>
                <p className="text-xs text-zinc-400 mt-1">React Híbrido</p>
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
