import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { type BuildOptions } from '../types/types'

export const devServer = (
  port: BuildOptions['port'],
): DevServerConfiguration => {
  return { port, open: true }
}
