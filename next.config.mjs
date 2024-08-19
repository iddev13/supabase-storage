/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'eczifuularqngckvupch.supabase.co',
				port: '',
			},
		],
	},
};

export default nextConfig;
