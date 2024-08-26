import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { type BuildPaths } from '../types/types'

export const plugins = (
  path: BuildPaths['html'],
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: path }),
    new webpack.ProgressPlugin(),
  ]
}
