/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disabling strict mode can sometimes help with canvas/animation double-mounting issues
  compiler: {
    styledComponents: true, // Enable styled-components SWC transform
  }
};

export default nextConfig;
