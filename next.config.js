/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  output: 'export', // Add this line to enable static export
  distDir: 'build', // Specify the output directory for the export
}

module.exports = nextConfig
