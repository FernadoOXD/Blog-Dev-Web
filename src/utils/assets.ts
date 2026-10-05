/**
 * Helper para resolver rutas de assets estáticos dinámicamente con base en import.meta.env.BASE_URL
 * Funciona perfectamente tanto en entorno de desarrollo local como en GitHub Pages (/Blog-Dev-Web/).
 */
export function getAssetPath(path?: string): string {
  if (!path) return '';
  // Si ya es una URL absoluta externa (http://, https://, data:), retornar tal cual
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Quitar la barra diagonal inicial si viene incluida para evitar dobles barras //
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${baseUrl}${cleanPath}`;
}

export default getAssetPath;
