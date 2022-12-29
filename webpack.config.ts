import path from 'path'
import webpack from 'webpack'

import { webpackConfig } from './config/webpack/wepbackConfig'
import { IWebpackEnv, WebpackMode } from './config/webpack/types/config'

function getApiUrl(mode: WebpackMode, apiUrl?: string): string {
  if (apiUrl) return apiUrl
  if (mode === 'production') return '/api'
  return 'http://localhost:8000'
}

export default (env: IWebpackEnv): webpack.Configuration => {
  const mode = env?.mode || 'development'
  const isDev = mode === 'development'
  const apiUrl = getApiUrl(mode, env?.apiUrl)

  return webpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      build: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public/index.html'),
      src: path.resolve(__dirname, 'src'),
      locales: path.resolve(__dirname, 'public/locales'),
      buildLocales: path.resolve(__dirname, 'dist/locales'),
    },
    isDev,
    apiUrl,
    port: env?.port || 3000,
    project: 'frontend',
  })
}
