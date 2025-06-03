// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.assettype.com',
                port: '',
                pathname: '**', // Allows any path on this hostname
            },
            {
                protocol: 'https',
                hostname: 'www.emirates247.com',
                port: '',
                pathname: '**', // Allows any path on this hostname
            },
            // You don't need a specific entry for local images from the public folder.
            // Next.js handles them by default when remotePatterns are defined correctly.
            // If you find issues, you might explicitly add localhost during development,
            // but it's generally not required for images from `public`.
        ],
    },
};

export default nextConfig;