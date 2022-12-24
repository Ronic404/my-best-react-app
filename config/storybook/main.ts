import path from 'path'
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'

import { WebpackPaths } from '../webpack/types/config'
import { buildCssLoader } from '../webpack/loaders/buildCssLoader'

export default {
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config: Configuration) => {
    const paths: WebpackPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '../../src'),
      locales: path.resolve(__dirname, '../../public/locales'),
      buildLocales: path.resolve(__dirname, '../../dist/locales'),
    }

    if (config.resolve) {
      config.resolve.modules?.push(paths.src, 'node_modules')
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': paths.src,
      }
    }

    // @ts-expect-error
    config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })

    config.module?.rules?.push(buildCssLoader(true))
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    config.plugins?.push(new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }))

    return config
  },
}
