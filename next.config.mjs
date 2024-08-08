/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.jdmagicbox.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
