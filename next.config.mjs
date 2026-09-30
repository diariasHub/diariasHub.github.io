/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // GitHub Pages solo sirve archivos estáticos: `next build` genera la carpeta `out/`
  output: 'export',
  // El optimizador de imágenes de Next necesita servidor; en Pages se sirven tal cual
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
