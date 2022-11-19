export type WebpackMode = 'production' | 'development'

export interface WebpackPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface IBuildOptions {
  mode: WebpackMode
  paths: WebpackPaths
  isDev: boolean
  port: number
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}

export interface IWebpackEnv {
  port: number
  mode: WebpackMode
  apiUrl: string
}
