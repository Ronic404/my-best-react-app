import devServer from 'webpack-dev-server';

import { IBuildOptions } from './types/config';

export function webpackDevServer(options: IBuildOptions): devServer.Configuration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
  }
}
