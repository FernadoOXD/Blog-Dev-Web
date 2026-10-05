import { useState } from 'react';

interface HeaderProps {
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
}

function Header({ searchQuery: controlledSearchQuery, onSearchChange }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [internalSearchQuery, setInternalSearchQuery] = useState('');

    const searchQuery = controlledSearchQuery !== undefined ? controlledSearchQuery : internalSearchQuery;
    const handleSearchChange = (value: string) => {
        if (onSearchChange) {
            onSearchChange(value);
        } else {
            setInternalSearchQuery(value);
        }

        if (value.trim().length > 0 && typeof window !== 'undefined') {
            const articulosSection = document.getElementById('articulos');
            if (articulosSection) {
                const rect = articulosSection.getBoundingClientRect();
                if (rect.top > window.innerHeight || rect.bottom < 100) {
                    articulosSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };
    return (
        <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 text-zinc-200 font-sans shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-4">

                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="relative p-1 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-300 shadow-md shadow-cyan-500/10">
                                <img
                                    src="/img/logoFRG_definitivo.webp"
                                    alt="FRG Logo"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/img/logoFRG_definitivo.webp';
                                    }}
                                    className="h-10 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-mono font-bold text-lg tracking-tight text-white flex items-center gap-1">
                                    <span className="text-cyan-400">&lt;</span>
                                    <span>Blog</span>
                                    <span className="text-purple-400">DEV</span>
                                    <span className="text-cyan-400">/&gt;</span>
                                </span>
                                <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase -mt-1 hidden sm:block">
                                    Fernando R. G.
                                </span>
                            </div>
                        </a>
                        <div className="relative hidden md:block w-72 lg:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="Buscar artículos técnicos..."
                                className="w-full pl-9 pr-14 py-1.5 bg-zinc-900/90 border border-zinc-700/60 rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono transition-all duration-200"
                            />
                            {searchQuery ? (
                                <button
                                    type="button"
                                    onClick={() => handleSearchChange('')}
                                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-zinc-400 hover:text-white cursor-pointer"
                                    title="Limpiar búsqueda"
                                >
                                    <span className="text-xs bg-zinc-800 hover:bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300">✕</span>
                                </button>
                            ) : (
                                <span className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-[10px] font-mono text-zinc-500 uppercase">
                                    Posts
                                </span>
                            )}
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-1 font-mono text-sm">
                        <a
                            href="#"
                            className="px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors flex items-center gap-1.5 group"
                        >
                            <span className="text-cyan-500/70 group-hover:text-cyan-400">#</span>
                            <span>Inicio</span>
                        </a>
                        <a
                            href="#articulos"
                            className="px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors flex items-center gap-1.5 group"
                        >
                            <span className="text-purple-500/70 group-hover:text-purple-400">#</span>
                            <span>Artículos</span>
                        </a>
                        <a
                            href="#proyectos"
                            className="px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors flex items-center gap-1.5 group"
                        >
                            <span className="text-blue-500/70 group-hover:text-blue-400">#</span>
                            <span>Proyectos</span>
                        </a>
                        <a
                            href="#sobre-mi"
                            className="px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors flex items-center gap-1.5 group"
                        >
                            <span className="text-emerald-500/70 group-hover:text-emerald-400">#</span>
                            <span>Acerca de</span>
                        </a>
                        <a
                            href="#contacto"
                            className="px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors flex items-center gap-1.5 group"
                        >
                            <span className="text-amber-500/70 group-hover:text-amber-400">#</span>
                            <span>Contacto</span>
                        </a>
                    </nav>
                    <div className="flex items-center gap-3">
                        {/* Menú desplegable en móvil */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
                            aria-label="Abrir menú"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Búsqueda en móvil */}
                <div className="md:hidden pb-3 pt-1">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            placeholder="Buscar artículos técnicos..."
                            className="w-full pl-9 pr-10 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 font-mono"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => handleSearchChange('')}
                                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-zinc-400 hover:text-white cursor-pointer"
                                title="Limpiar búsqueda"
                            >
                                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">✕</span>
                            </button>
                        )}
                    </div>
                </div>
                {/* Menú hamburguesa para móvil */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-zinc-800/80 py-3 space-y-1 font-mono text-sm animate-fadeIn">
                        <a
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors"
                        >
                            <span className="text-cyan-400 mr-2">#</span>Inicio
                        </a>
                        <a
                            href="#articulos"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors"
                        >
                            <span className="text-purple-400 mr-2">#</span>Artículos
                        </a>
                        <a
                            href="#proyectos"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors"
                        >
                            <span className="text-blue-400 mr-2">#</span>Proyectos
                        </a>
                        <a
                            href="#sobre-mi"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors"
                        >
                            <span className="text-emerald-400 mr-2">#</span>Acerca de
                        </a>
                        <a
                            href="#contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900 transition-colors"
                        >
                            <span className="text-amber-400 mr-2">#</span>Contacto
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
export default Header;
