const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    (config.resolve.alias['@Assets'] = path.resolve(
      __dirname,
      '../src/@Assets',
    )), (config.resolve.alias['@Components'] = path.resolve(
      __dirname,
      '../src/@Components',
    )), (config.resolve.alias['@Constants'] = path.resolve(
      __dirname,
      '../src/@Constants',
    )), (config.resolve.alias['@Primitives'] = path.resolve(
      __dirname,
      '../src/primitives',
    )), (config.resolve.alias['@Services'] = path.resolve(
      __dirname,
      '../src/@Services',
    )), (config.resolve.alias['@Utils'] = path.resolve(
      __dirname,
      '../src/@Utils',
    )), (config.resolve.alias['@Views'] = path.resolve(
      __dirname,
      '../src/@Views',
    ));

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return {
       ...config,
      resolve: {
         ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
// .storybook/main.js