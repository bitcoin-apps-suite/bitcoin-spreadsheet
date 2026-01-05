/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@bsv/sdk', 'scrypt-ts'],
    webpack: (config, { webpack, isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                buffer: require.resolve("buffer"),
                process: require.resolve("process/browser"),
            };
            config.plugins.push(
                new webpack.ProvidePlugin({
                    process: "process/browser",
                    Buffer: ["buffer", "Buffer"],
                })
            );
        }
        return config;
    },
    turbopack: {}, // Explicitly enable Turbopack with default settings to resolve error
};

module.exports = nextConfig;
