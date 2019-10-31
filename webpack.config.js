const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const options = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'awesome-typescript-loader'
      },
    ]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
          vendor: {
                test: /node_modules/,
                name: 'vendor',
                chunks: 'initial',
                enforce: true
            }
        }
    },
  },
};

module.exports = function(env, argv) {
  const { mode } = argv;

  if (mode === 'production') {
    options.mode = 'production';
  } else if (mode === 'development') {
    options.mode = 'development';
    options.devtool = 'eval-source-map';
  }

  return options;
};
