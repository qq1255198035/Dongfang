const path = require("path");
const webpack = require('webpack');
function resolve(dir) {
      return path.join(__dirname, dir)
}
module.exports = {
      baseUrl: './',
      productionSourceMap: false,
      chainWebpack: config => {
            config.resolve.alias
                  .set("@$", resolve("src"))
                  .set("@api", resolve("src/api"))
                  .set("@assets", resolve("src/assets"))
                  .set("@comp", resolve("src/components"))
                  .set("@views", resolve("src/views"))
                  .set("@layout", resolve("src/layout"))
                  .set("@static", resolve("src/static"))
                  .set('@lang', resolve('src/lang'))
      },
      configureWebpack: {
            //警告 webpack 的性能提示
            performance: {
                  hints:'warning',
                  //入口起点的最大体积
                  maxEntrypointSize: 50000000,
                  //生成文件的最大体积
                  maxAssetSize: 30000000,
                  //只给出 js 文件的性能提示
                  assetFilter: function(assetFilename) {
                        return assetFilename.endsWith('.js');
                  }
            }

      },
      // devServer: {
      //       port: 3000,
      //       proxy: {
      //             '/jeecg-boot': {
      //                   target: process.env.NODE_ENV == 'production' ? '' : 'http://192.168.0.145:8080',
      //                   //target: 'http://192.168.0.9:8080',
      //                   ws: false,
      //                   changeOrigin: true
      //             },
      //       }
      // },
      lintOnSave: undefined
}
