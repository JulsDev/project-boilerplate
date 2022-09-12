const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'development',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      public: path.resolve('./public/'),
      src: path.resolve('./src/'),
      components: path.resolve('./src/components/'),
      pages: path.resolve('./src/pages/'),
      utils: path.resolve('./src/utils/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: ['ts-loader'],
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024  // 3 kilobytes
          }
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*', 
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/manifest.json',
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Hello world',
      template: 'src/page-template.hbs',
      description: 'project template with Webpack 5',
      minify: false
    })
  ],

  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    open: true
  }
}