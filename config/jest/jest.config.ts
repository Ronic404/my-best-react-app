export default {
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules', 'src',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/config/jest/__mocks__/svg.tsx',
  },
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '<rootDir>/reports/unit',
      filename: 'report.html',
      // openReport: true,
      inlineSource: true,
    }],
  ],
}
