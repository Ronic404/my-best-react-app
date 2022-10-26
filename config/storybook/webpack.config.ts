import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'

import { WebpackPaths } from '../webpack/types/config'
import { buildCssLoader } from '../webpack/loaders/buildCssLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: WebpackPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '../../src'),
  }

  config.resolve?.modules?.push(paths.src, 'node_modules')

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
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }))

  return config
}
