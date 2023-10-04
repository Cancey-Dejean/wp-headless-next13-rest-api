/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
  images: {
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "stone.local",
      },
    ],
  },
  // nextConfig,
}
