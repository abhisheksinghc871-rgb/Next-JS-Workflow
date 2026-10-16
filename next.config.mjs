// BASE_PATH GitHub Actions workflow se aata hai (repo name). Local par khaali rehta hai.
const basePath = process.env.BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // static HTML banata hai (folder: out/)
  basePath,
  trailingSlash: true,   // /treks/ => treks/index.html, GitHub Pages par safe
  images: { unoptimized: true },
};

export default nextConfig;
