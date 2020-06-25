{
  mode: 'development',
  context: 'D:\\Development\\vue-cli-manifest',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'D:\\Development\\vue-cli-manifest\\public',
    filename: 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'D:\\Development\\vue-cli-manifest\\src',
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'D:\\Development\\vue-cli-manifest\\node_modules',
      'D:\\Development\\vue-cli-manifest\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp') */
      {}
    ]
  },
  resolveLoader: {
    modules: [
      'D:\\Development\\vue-cli-manifest\\node_modules\\@vue\\cli-plugin-typescript\\node_modules',
      'D:\\Development\\vue-cli-manifest\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'D:\\Development\\vue-cli-manifest\\node_modules',
      'D:\\Development\\vue-cli-manifest\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp-loaders') */
      {}
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'D:\\Development\\vue-cli-manifest\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: 'ddd09534'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: 'D:\\Development\\vue-cli-manifest\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: 'ddd09534'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\stylus-loader\\index.js',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\stylus-loader\\index.js',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\stylus-loader\\index.js',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\stylus-loader\\index.js',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          filepath => {
                      // always transpile js in vue files
                      if (/\.vue\.jsx?$/.test(filepath)) {
                        return false
                      }
                      // exclude dynamic entries from cli-service
                      if (filepath.startsWith(cliServicePath)) {
                        return true
                      }
          
                      // only include @babel/runtime when the @vue/babel-preset-app preset is used
                      if (
                        process.env.VUE_CLI_TRANSPILE_BABEL_RUNTIME &&
                        filepath.includes(path.join('@babel', 'runtime'))
                      ) {
                        return false
                      }
          
                      // check if this is something the user explicitly wants to transpile
                      if (transpileDepRegex && transpileDepRegex.test(filepath)) {
                        return false
                      }
                      // Don't transpile node_modules
                      return /node_modules/.test(filepath)
                    }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'D:\\Development\\vue-cli-manifest\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '0fd5ef94'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\babel-loader\\lib\\index.js'
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'D:\\Development\\vue-cli-manifest\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '26257c14'
            }
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('cache-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'D:\\Development\\vue-cli-manifest\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '26257c14'
            }
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'D:\\Development\\vue-cli-manifest\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          sourceMap: true,
          cache: true,
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          error => {
            if (error.webpackError) {
              const message = typeof error.webpackError === 'string'
                ? error.webpackError
                : error.webpackError.message || ''
              for (const { re, msg, type } of rules) {
                const match = message.match(re)
                if (match) {
                  return Object.assign({}, error, {
                    // type is necessary to avoid being printed as defualt error
                    // by friendly-error-webpack-plugin
                    type,
                    shortMessage: msg(error, match)
                  })
                }
              }
              // no match, unknown webpack error without a message.
              // friendly-error-webpack-plugin fails to handle this.
              if (!error.message) {
                return Object.assign({}, error, {
                  type: 'unknown-webpack-error',
                  shortMessage: message
                })
              }
            }
            return error
          }
        ],
        additionalFormatters: [
          errors => {
            errors = errors.filter(e => e.shortMessage)
            if (errors.length) {
              return errors.map(e => e.shortMessage)
            }
          }
        ]
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'D:\\Development\\vue-cli-manifest\\public',
          to: 'D:\\Development\\vue-cli-manifest\\public',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: '..\\node_modules\\@vue\\cli-service\\lib\\config\\index-default.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue: {
          enabled: true,
          compiler: 'vue-template-compiler'
        },
        tslint: false,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      }
    ),
    {
      hooks: {
        apply: {
          _args: [
            'manifest'
          ],
          taps: [],
          interceptors: [],
          call: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          promise: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          callAsync: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          _x: undefined
        },
        customize: {
          _args: [
            'entry',
            'original',
            'manifest',
            'asset'
          ],
          taps: [],
          interceptors: [],
          call: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          promise: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          callAsync: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          _x: undefined
        },
        transform: {
          _args: [
            'assets',
            'manifest'
          ],
          taps: [
            {
              type: 'sync',
              fn: assets => {
                    const { sortManifest } = this.options;
              
                    return sortManifest ? getSortedObject(
                      assets,
                      typeof sortManifest === 'function' ? sortManifest.bind(this) : undefined
                    ) : assets;
                  },
              name: 'WebpackAssetsManifest'
            }
          ],
          interceptors: [],
          call: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          promise: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          callAsync: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          _x: undefined
        },
        done: {
          _args: [
            'manifest',
            'stats'
          ],
          taps: [],
          interceptors: [],
          call: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          promise: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          callAsync: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          _x: undefined
        },
        options: {
          _args: [
            'options'
          ],
          taps: [],
          interceptors: [],
          call: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          promise: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          callAsync: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          _x: undefined
        },
        afterOptions: {
          _args: [
            'options'
          ],
          taps: [
            {
              type: 'sync',
              fn: options => {
                    this.options = Object.assign( this.defaultOptions, options );
                    this.options.integrityHashes = filterHashes( this.options.integrityHashes );
              
                    validateOptions(optionsSchema, this.options, PLUGIN_NAME);
              
                    // Copy over any entries that may have been added to the manifest before apply() was called.
                    // If the same key exists in assets and options.assets, options.assets should be used.
                    this.assets = Object.assign(this.options.assets, this.assets, this.options.assets);
              
                    if ( this.options.hasOwnProperty('contextRelativeKeys') ) {
                      warn('contextRelativeKeys has been removed. Please use the customize hook instead.');
                    }
              
                    [ 'apply', 'customize', 'transform', 'done' ].forEach( hookName => {
                      if ( typeof this.options[ hookName ] === 'function' ) {
                        this.hooks[ hookName ].tap(`${PLUGIN_NAME}.option.${hookName}`, this.options[ hookName ] );
                      }
                    });
                  },
              name: 'WebpackAssetsManifest'
            }
          ],
          interceptors: [],
          call: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          promise: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          callAsync: function lazyCompileHook(...args) {
          	this[name] = this._createCall(type);
          	return this[name](...args);
          },
          _x: undefined
        }
      },
      options: {
        assets: {},
        output: 'manifest.json',
        replacer: null,
        space: 2,
        writeToDisk: false,
        fileExtRegex: /\.\w{2,4}\.(?:map|gz)$|\.\w+$/i,
        sortManifest: true,
        merge: false,
        publicPath: null,
        apply: null,
        customize: null,
        transform: null,
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
                },
        entrypoints: false,
        entrypointsKey: 'entrypoints',
        integrity: false,
        integrityHashes: [
          'sha256',
          'sha384',
          'sha512'
        ],
        integrityPropertyName: 'integrity'
      },
      assets: {},
      assetNames: new Map([]),
      currentAsset: null,
      compiler: null,
      stats: null,
      hmrRegex: null
    }
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
