import type webpack from 'webpack'

import { loaders } from './loaders'
import { plugins } from './plugins'
import { resolvers } from './resolvers'
import { type BuildOptions } from '../types/types'
import { devServer } from './dev-server'

export const webpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {
    paths: { build, entry, html },
    mode,
    isDev,
    port,
  } = options

  return {
    entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    mode,
    output: {
      filename: '[contenthash].[name].js',
      path: build,
      clean: true,
    },
    module: {
      rules: loaders(),
    },
    devServer: isDev ? devServer(port) : undefined,
    resolve: resolvers(),
    plugins: plugins(html),
  }
}
