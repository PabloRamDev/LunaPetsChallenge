/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'dog.ceo',
            },
            {
                protocol: 'https',
                hostname: 'placedog.net',
                },


        ]
            
        
    }
}

module.exports = nextConfig
