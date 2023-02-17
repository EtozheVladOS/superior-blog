import { BuildOptions } from "./types/config";
import {Configuration as DevServerConfig} from "webpack-dev-server";

export function buildDevServer({ port }: BuildOptions): DevServerConfig {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
};
