import path from 'path'

import {
  type BuildEnvironment,
  type BuildMode,
  type BuildPaths,
  webpackConfig,
} from './config'

export default (env: BuildEnvironment) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  const port: number = env.port || 3000
  const mode: BuildMode = env.mode || 'development'
  const isDev: boolean = mode === 'development'

  return webpackConfig({
    isDev,
    mode,
    paths,
    port,
  })
}
