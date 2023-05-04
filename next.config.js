module.exports = {
    async rewrites() {
        return [
            {
                source: '/about-me',
                destination: '/',
            },
            {
                source: '/my-experience',
                destination: '/',
            },
            {
                source: '/my-links',
                destination: '/',
            },
        ]
    },
}