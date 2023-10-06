import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgloader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woof)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // MiniCssExtractPlugin чтобы сборки прода не грязнились css, а создавались отдельные файлы
  const cssLoader = buildCssLoader(options.isDev);

  // Здесь лоадер для i18n и хот рефреш реакта
  const babelLoader = buildBabelLoader(options);

  // если используется js/jsx, то нужно прикрутить babel-loader
  const tsLoader = { // обрабатывает файлы ts/tsx
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svgloader,
    babelLoader,
    tsLoader,
    cssLoader,
  ];
}
