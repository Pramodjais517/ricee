/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false
    },
    // Enable compression
    compress: true,
    // Enable powered by header
    poweredByHeader: false,
}

module.exports = nextConfig
