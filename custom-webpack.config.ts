import type { Configuration } from 'webpack';

module.exports = {
  entry: { background: 'src/background.ts', main: 'src/main.ts' },
} as Configuration;