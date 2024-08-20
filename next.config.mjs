/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '0.0.0.0',
				port: '8083',
				pathname: '/s3/static/**',
			},
			{
				protocol: 'https',
				hostname: 'daididau.kz',
				port: '',
				pathname: '/s3/static/**',
			},
		],
	},
}
export default nextConfig
