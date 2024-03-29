/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-12 12:35:26
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-13 21:54:51
 */
const path = require('path')
//获取webpack
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
      
    ]
  },
  resolve: {
    //导入模块简写省略指定后缀
    extensions: ['.js', '.css', '.vue'],
    // alias:别名
    alias: {
        //指定vue使用vue.esm.js
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终解释权归Geeks_Z所有')
  ],
  devServer: {
    contentBase: './dist',//服务的文件夹
    // port: 4000,
    inline: true//是否实时刷新
  }
}