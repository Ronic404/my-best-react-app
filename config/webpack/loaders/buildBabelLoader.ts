import { RuleSetRule } from 'webpack'

import { IBuildOptions } from '../types/config'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps extends IBuildOptions {
  isTsx?: boolean
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps): RuleSetRule {
  const isProd = !isDev

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            { isTsx },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [
            babelRemovePropsPlugin,
            { attr: ['data-testid'] },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  }
}
