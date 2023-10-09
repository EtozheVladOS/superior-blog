import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfug(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js', // по дефолту main.js в папке build (строкой ниже)
      // contenthash чтобы main не хешировался в браузере
      path: paths.build,
      clean: true,
      // Базовый путь для ресурсов приложения
      // Добавил для корреткной работы роутов (например :id), чтобы тянул чанки из праивльного места
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined, // чтобы былы возможность отсалеживать ошибки в консоли разраба
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
