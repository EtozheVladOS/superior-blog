export default {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT_ENIRONMENT__: 'jest',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  rootDir: '../../',
  roots: [
    '<rootDir>/src',
  ],
  moduleNameMapper: {
    '@/(.*)(.svg)': '<rootDir>config/jest/jestEmptyComponent.tsx',
    '\\.(jpg|jpeg|png)$': '<rootDir>config/jest/styleMock.js',
    '\\.s?css$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>src/$1',
  },
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporters', {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        openReport: false,
        inlineSource: true,
      },
    ],
  ],
};
