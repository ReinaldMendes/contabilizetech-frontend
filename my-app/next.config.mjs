/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  images: {
    // A chave 'formats' está ok e pode ser mantida
    formats: ['image/webp', 'image/avif'],
    // Trocamos 'domains' por 'remotePatterns'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Mantivemos o domínio que você já tinha
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ADICIONAMOS O DOMÍNIO DO CLOUDINARY AQUI
      },
    ],
  },
  eslint: {
    dirs: ['pages', 'components', 'app', 'src'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig; // Usamos export default com o .mjs