/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/e-commerce-2a028.appspot.com/**",
      },
    ],
  },
};

export default nextConfig;
