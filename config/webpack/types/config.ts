export type WebpackMode = 'production' | 'development'

export interface WebpackPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface IBuildOptions {
  mode: WebpackMode
  paths: WebpackPaths
  isDev: boolean
  port: number
}

export interface IWebpackEnv {
  port: number
  mode: WebpackMode
}
