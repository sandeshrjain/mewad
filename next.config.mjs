/** @type {import('next').NextConfig} */
const repositoryName = "mewad"
const isProduction = process.env.NODE_ENV === "production"
const basePath = isProduction ? `/${repositoryName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
