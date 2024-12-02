import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? "/sungwookoo.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" 
    ? "https://sungwookoo.github.io/sungwookoo.github.io"
    : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
