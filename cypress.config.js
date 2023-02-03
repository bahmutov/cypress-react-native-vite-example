const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://127.0.0.1:5173/',
    supportFile: false,
    fixturesFolder: false,
  },

  component: {
    fixturesFolder: false,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
