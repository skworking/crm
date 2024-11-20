/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**', // Allows all images from the specified domain
      },
    ],
  },
  // Add rewrites for `/en` routes
  async rewrites() {
    return [
      {
        source: '/en/:path*',  // Match any path starting with `/en`
        destination: '/:path*', // Redirect to the equivalent route without `/en`
      },
    ];
  },

  // Add webpack configuration for handling SVGs with @svgr/webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Enables SVG files to be imported as React components
    });

    return config;
  },
};

export default nextConfig;
