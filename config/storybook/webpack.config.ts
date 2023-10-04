import { BuildPaths } from 'config/build/types/config';
import path from 'path';
import { Configuration as wbConfiguration, RuleSetRule, DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default function ({ config }: { config: Required<wbConfiguration> }) {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules?.push(paths.src);
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': paths.src,
  };
  config.resolve.extensions?.push('.tsx', '.ts');

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules?.push(buildCssLoader(true));

  config.plugins.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT_ENIRONMENT__: JSON.stringify('storybook'),
  }));

  return config;
}
