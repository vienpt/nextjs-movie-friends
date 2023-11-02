/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'https',
                hostname: 'themoviedb.org',
            },
            {
                protocol: 'https',
                hostname: 'imdb.com',
            },
        ],
    },
}

module.exports = nextConfig
