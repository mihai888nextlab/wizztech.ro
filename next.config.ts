import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    /**
     * A stray package-lock.json in C:\Users\Mihai made Turbopack infer the home
     * directory as the workspace root. Pin it to this project so file watching
     * and output tracing stay scoped here.
     */
    root: path.join(__dirname),
  },
};

export default nextConfig;
