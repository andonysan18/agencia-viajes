/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // <--- ESTO ES LA MAGIA: Permite todo
      },
    ],
  },
};

export default nextConfig;