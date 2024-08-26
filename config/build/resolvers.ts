import type webpack from 'webpack'

export const resolvers = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  }
}
