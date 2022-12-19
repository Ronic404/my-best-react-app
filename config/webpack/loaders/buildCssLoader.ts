import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean): RuleSetRule {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => path.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }
}
