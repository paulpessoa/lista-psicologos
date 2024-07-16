/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['thispersondoesnotexist.com'],
    },
  };

export default nextConfig;
