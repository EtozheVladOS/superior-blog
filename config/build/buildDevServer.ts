import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions): DevServerConfig {
  return {
    port,
    // open: true, // автооткрытие после успешной сборки
    historyApiFallback: true,
    hot: true,
  };
}
