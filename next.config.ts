import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [process.env.ORIGIN!],
};

export default nextConfig;
