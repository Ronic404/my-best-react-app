import webpack from 'webpack'

import { IBuildOptions } from './types/config'

export function webpackResolvers(options: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
  }
}
