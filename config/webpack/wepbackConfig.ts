import webpack from 'webpack'

import { IBuildOptions } from './types/config'

import { webpackLoaders } from './loaders/webpackLoaders'
import { webpackPlugins } from './webpackPlugins'
import { webpackResolvers } from './webpackResolvers'
import { webpackDevServer } from './webpackDevServer'

export function webpackConfig(options: IBuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: webpackLoaders(options),
    },
    plugins: webpackPlugins(options),
    resolve: webpackResolvers(options),
    devServer: isDev ? webpackDevServer(options) : undefined,
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
  }
}
