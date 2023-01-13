/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {},
	reactStrictMode: true,
	env: {
		REACT_NEXT_APP_URL_API: process.env.REACT_NEXT_APP_URL_API
	}
};

module.exports = nextConfig;
