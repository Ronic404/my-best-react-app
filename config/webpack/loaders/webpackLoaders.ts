import webpack from 'webpack'

import { IBuildOptions } from '../types/config'
import { buildCssLoader } from './buildCssLoader'
import { buildBabelLoader } from './buildBabelLoader'

export function webpackLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoader = buildCssLoader(isDev)

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  }

  return [codeBabelLoader, tsxCodeBabelLoader, cssLoader, svgLoader, fileLoader]
}
