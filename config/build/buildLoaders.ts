import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
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
  const cssLoader = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          [require.resolve('react-refresh/babel')],
        ],
      },
    },
  };

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
