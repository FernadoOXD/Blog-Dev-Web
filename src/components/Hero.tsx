function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800/60">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-mono text-zinc-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-semibold">&lt;dev&gt;</span>
              <span className="text-zinc-400">Software & Cloud Notes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Dominando el{' '}
              <span
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 bg-clip-text text-transparent inline-block font-extrabold"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: '#0891b2' }}
              >
                Stack Moderno
              </span>
              <span className="text-cyan-400 font-mono text-3xl sm:text-4xl lg:text-5xl ml-2 inline-block">;</span>
            </h1>

            <p className="text-lg sm:text-xl font-mono text-cyan-400/90 flex items-center gap-2">
              <span className="text-purple-400">&gt;</span> Explorando React, APIs y la Nube
            </p>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Notas técnicas, tutoriales y arquitectura de software por{' '}
              <span className="text-white font-semibold underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                Fernando
              </span>
              .
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#articulos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explorar Artículos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#sobre-mi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-mono text-sm font-medium transition-all duration-200"
              >
                <span className="text-purple-400">//</span>
                <span>Acerca de Fernando</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-zinc-900/90 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">

                <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>App.tsx — Developer Notes</span>
                  </div>
                  <div className="w-8"></div>
                </div>

                <div className="p-2 sm:p-4 bg-zinc-950/60 flex items-center justify-center">
                  <img
                    src="/img/code_img-hero.png"
                    alt="Code & Modern Stack Architecture"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/img/code_img-hero.png';
                    }}
                    className="w-full h-auto object-cover rounded-lg transform hover:scale-[1.02] transition-transform duration-300 shadow-md"
                  />
                </div>

                <div className="bg-zinc-950 px-4 py-2 border-t border-zinc-800/80 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Ready
                    </span>
                    <span>UTF-8</span>
                  </div>
                  <div className="text-cyan-400/80">
                    TypeScript 5.x
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
