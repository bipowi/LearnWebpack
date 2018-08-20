var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin')
var path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor' // Specify the common bundle's name.
  //   }),
  //   // 공통 라이브러리를 vendor쪽으로 쪼개서 사용, 공통부분 빼낸다.
  // ]
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // Extract the webpack bootstrap logic into manifest.js
        // webpack 공통코드는 manifestfh
      }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
      // manifest는 webpack의 지도.
    })
  ]
}