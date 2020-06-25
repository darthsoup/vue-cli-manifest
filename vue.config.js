const WebpackAssetsManifest = require('webpack-assets-manifest')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { info, log, chalk } = require('@vue/cli-shared-utils')
const ui = require('cliui')({ width: 140 })

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

function makeRow(a, b) {
  return `  ${a}\t        ${b}\t      `
}

module.exports = {
  outputDir: 'public',
  assetsDir: 'static',
  lintOnSave: false,

  // CSS
  css: {
    // requireModuleExtension: false,
    loaderOptions: {
      scss: {
        //prependData: `@import "~@/variables.scss";`
      },
    }
  },

  // webpack-dev-server
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },

  // webpack-chain
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
    ;
  },

  // Configure Webpack
  configureWebpack: config => {
    if (IS_PRODUCTION) {
      if (process.env.npm_lifecycle_event === 'analyze') {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    } else {
      // Development Stuff
    }

    // Add Bundle
    config.plugins.push(
      new WebpackAssetsManifest({
        output: 'manifest.json',
        done(manifest) {
          info(`The manifest has been written to ${manifest.getOutputPath()}`)
          const assets = JSON.parse(JSON.stringify(manifest.assets))

          ui.div(
            makeRow(
              chalk.cyan.bold(`File`),
              chalk.cyan.bold(`Path`),
            ) + `\n\n` +
            Object.entries(assets).map(([fileName, path]) => makeRow(
              chalk.green(fileName),
              path
            )).join(`\n`)
          )

          log(`${ui.toString()}\n\n`)
        }
      })
    )
  },

  // Plugin Options
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        //path.resolve(__dirname, './src/filename.scss'),
      ]
    }
  }
}
