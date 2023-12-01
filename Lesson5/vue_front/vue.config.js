const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/login',
  outputDir:'dist',
  assetsDir:'static'
})
