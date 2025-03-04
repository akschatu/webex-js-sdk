const config = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@webex/babel-config-legacy/inject-package-version',
    [
      '@babel/plugin-transform-classes',
      {
        globals: ['Error'],
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    'lodash',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-proposal-async-generator-functions',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: [
          '>0.25% in US',
          'last 2 Chrome major versions',
          'last 2 Firefox major versions',
          'not dead',
          'not UCAndroid > 0',
          'ie >= 11',
          'maintained node versions',
        ],
      },
    ],
    '@babel/preset-typescript',
  ],
  sourceMaps: true,
};

module.exports = config;
