import path from 'path'
import webpack from 'webpack'

import { IWebpackEnv } from './config/webpack/types/config'
import { webpackConfig } from './config/webpack/wepbackConfig'

export default (env: IWebpackEnv): webpack.Configuration => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  return webpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      build: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public/index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev,
    port: env.port || 3000,
  })
}
