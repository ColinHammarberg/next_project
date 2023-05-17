/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATOCMS_ACCESS_TOKEN:
            process.env.DATOCMS_API_KEY
    }
}

module.exports = nextConfig
