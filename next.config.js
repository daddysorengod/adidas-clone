// module.exports = {
//     // future: {
//     //     webpack5: true,
//     // },
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Note: we provide webpack above so you should not `require` it
//         // Perform customizations to webpack config
//         config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

//         // Important: return the modified config
//         return config
//     },
//     typescript: {
//         // !! WARN !!
//         // Dangerously allow production builds to successfully complete even if
//         // your project has type errors.
//         // !! WARN !!
//         ignoreBuildErrors: false,
//     },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = nextConfig
  