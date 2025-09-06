/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.ignoreWarnings = [
          {
            module: /sequelize/,
            message: /Critical dependency: the request of a dependency is an expression/,
          },
        ];
        return config;
      },
};

export default nextConfig;
