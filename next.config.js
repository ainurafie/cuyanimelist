const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net",
            }
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
}

module.exports = nextConfig;
