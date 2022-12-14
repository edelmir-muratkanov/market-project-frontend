/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
		YANDEX_MAP_KEY: process.env.YANDEX_MAP_KEY.toString()
	},
	images: {
		domains: ['localhost']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:3001/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:3001/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
