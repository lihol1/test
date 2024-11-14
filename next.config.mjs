/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test',
    reactStrictMode: true,
    images:{
        unoptimized: true
    }
};

export default nextConfig;
