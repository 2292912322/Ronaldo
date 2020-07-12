let path = require("path");
let SpritesmithPlugin = require("webpack-spritesmith");
let SpritesmithConfig = {
  spritesmithOptions: {
    padding: 6
  },
  customTemplates: {
    function_based_template: function(data) {
      // console.log(data)
      // console.log('spritesheet:', data.spritesheet.width, data.spritesheet.height)
      let name = data.spritesheet.image.match(/\/([^\/]*?)\.png$/)[1];
      if (data.sprites.length > 0) {
        var shared = `.${name} { background-image: url(${
          data.sprites[0].image
        }); background-size: ${((data.spritesheet.width / 750) * 100).toFixed(
          2
        )}vw ${((data.spritesheet.height / 750) * 100).toFixed(
          2
        )}vw; background-repeat: no-repeat; }`;
        // var shared = '.icons { background-image: url(I); background-size: Wpx Hpx; transform:scale(0.5);transform-origin: 0 0;}'
        // .replace('W', data.spritesheet.width)
        // .replace('H', data.spritesheet.height)

        var perSprite = data.sprites
          .map(function(sprite) {
            // console.log(sprite.name + ':' + sprite.width + ',' + sprite.height)
            // return '.icons-N { width: Wvw; height: Hvw; background-position: Xvw Yvw; }'
            return `.${name}-${sprite.name}-outer {width: calc(${((sprite.width / 750) * 100).toFixed(2)}vw + 2px); height: calc(${((sprite.height / 750) * 100).toFixed(2)}vw + 2px);}\n.${name}-${sprite.name}-inner { width: calc(${((sprite.width / 750) * 100).toFixed(2)}vw + 2px); height: calc(${((sprite.height / 750) * 100).toFixed(2)}vw + 2px); background-position: calc(${((sprite.offset_x / 750) * 100).toFixed(2)}vw + 1px) calc(${((sprite.offset_y / 750) * 100).toFixed(2)}vw + 1px); }`;
            // return '.icons-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; } .icons-ct-N2 {width: W2px; height: H2px;}'
            // .replace('W', sprite.width)
            // .replace('H', sprite.height)
            // .replace('W2', sprite.width / 2)
            // .replace('H2', sprite.height / 2)
            // .replace('X', sprite.offset_x)
            // .replace('Y', sprite.offset_y)
          })
          .join("\n");

        return shared + "\n" + perSprite;
      } else {
        return "";
      }
    }
  }
};
let env = process.env.NODE_ENV ? process.env.NODE_ENV : "production";
let routeBase = env === "development" ? "" : "./";
export default {
  mode: "spa",
  /*
   ** 客户端和服务端共享的环境变量
   */
  env: {
    MY_ENV: process.env.NODE_ENV
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      },
      {
        name: "format-detection",
        content: "telephone=no"
      },
      {
        "http-equiv": "x-rim-auto-match",
        content: "none"
      },
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate"
      },
      {
        "http-equiv": "Pragma",
        content: "no-cache"
      },
      {
        "http-equiv": "Expires",
        content: "0"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${routeBase}/favicon.ico` }
    ],
    script: [
      { src: `${routeBase}config.js?${new Date().getTime()}`},
      { src: `${routeBase}jweixin-1.4.0.js`}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: "./node_modules/vue-xy-ui/dist/nuxt/xy-page-progress.vue",
  /*
   ** Global CSS
   */
  css: [
    "./node_modules/vue-xy-ui/dist/style/normalize-8.0.0.css",
    "~/assets/style/icons-common.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  router: {
    // middleware: ['test'],
    mode: "hash",
    base: routeBase,
    scrollBehavior: function(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      };
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // 此处用于支持内部使用Vue.extend
      config.resolve.alias["vue"] = "vue/dist/vue.esm.js";
      if (isDev && isClient) {
        config.plugins.push(
          new SpritesmithPlugin(
            Object.assign(SpritesmithConfig, {
              src: {
                cwd: path.resolve(__dirname, "assets/imgs/common/icons"),
                glob: "*.png"
              },
              target: {
                image: path.resolve(__dirname, "assets/imgs/icons-common.png"),
                css: [
                  [
                    path.resolve(__dirname, "assets/style/icons-common.css"),
                    { format: "function_based_template" }
                  ]
                ]
              },
              //从Nuxt 2.0开始，~/alias将无法在CSS文件中正确解析。你必须在url CSS引用中使用~assets（没有斜杠）
              apiOptions: {
                cssImageRef: "~assets/imgs/icons-common.png",
                name: "common"
              },
              options: {
                test: "123"
              }
            })
          )
        );
      }
    }
  },
  plugins: ["~/plugins"]
};
