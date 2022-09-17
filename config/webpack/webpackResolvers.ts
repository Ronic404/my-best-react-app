import webpack from 'webpack';

export function webpackResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
