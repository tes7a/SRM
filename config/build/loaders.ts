import type webpack from 'webpack'

export const loaders = (): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }

  const cssLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  return [tsLoader, scssLoader, cssLoader, svgLoader]
}
