// Vercel runs the full Next.js server (needed for the /api/chat assistant).
// `STATIC_EXPORT=1 next build` still produces a plain static site in ./out for cPanel hosting
// (the AI chat then falls back to WhatsApp).
const isStaticExport = process.env.STATIC_EXPORT === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport ? { output: 'export', distDir: 'out', skipTrailingSlashRedirect: true } : {}),
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  ...(isStaticExport ? {} : { redirects, headers }),
  compress: true,
}

async function redirects() {
  return [
    { source: '/accommodations', destination: '/kilimanjaro/', permanent: true },
    { source: '/accommodations/', destination: '/kilimanjaro/', permanent: true },
  ]
}

async function headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
  ]
}

export default nextConfig
