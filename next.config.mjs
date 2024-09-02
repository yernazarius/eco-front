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
				protocol: 'http',
				hostname: '194.110.55.21',
				port: '',
				pathname: '/s3/static/**',
			},
			{
				protocol: 'https',
				hostname: 'www.ecoinstrument.ru',
				port: '',
				pathname: '/upload/**',
			},
		],
	},
}
export default nextConfig
