const { defineConfig } = require("@vue/cli-service");
// const AutoImport = require("unplugin-auto-import/webpack").default;
// const Components = require("unplugin-vue-components/webpack").default;
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      // 自动按需
      //   AutoImport({
      //     resolvers: [ElementPlusResolver()],
      //   }),
      //   Components({
      //     resolvers: [ElementPlusResolver()],
      //   }),
      // 手动按需 需要自己引用样式
      require("unplugin-element-plus/webpack")({
        // options
      }),
    ],
  },
});
