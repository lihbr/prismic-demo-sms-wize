const { envConfig } = require("./env.config");
const logger = require("consola").withScope("nuxt");

module.exports = async () => {
  // Configure application environment
  const env = envConfig(/* settings, CMS_GLOBAL */);

  // Script
  const script = [];

  return {
    /*
     ** Application mode
     */
    mode: "universal",

    /*
     ** Head of the page, handled by head module
     */
    head: {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Roboto:300,400,700,300italic&display=fallback"
        }
      ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: env.APP_ACCENT_COLOR },

    /*
     ** Global CSS
     */
    css: ["normalize.css", "~/assets/sass/style.sass"],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~/plugins/logger", "~/plugins/filters"],

    /*
     ** Nuxt.js modules
     */
    modules: [],

    /*
     ** Nuxt.js build modules
     */
    buildModules: [
      "@nuxtjs/eslint-module",
      [
        "~/modules/head",
        {
          lang: env.APP_LANG,
          name: env.APP_NAME,
          description: env.APP_DESC,
          metaImage: {
            og: env.APP_METAIMG_OG,
            tw: env.APP_METAIMG_TW
          },
          twitterHandle: env.APP_TWITTER_HANDLE,
          backgroundColor: env.APP_BACKGROUND_COLOR,
          accentColor: env.APP_ACCENT_COLOR,
          titleFormat: env.APP_TITLE_FORMAT,
          url: env.APP_URL
        }
      ],
      "@nuxtjs/global-components",
      "@nuxtjs/style-resources",
      "@nuxtjs/sitemap",
      "@nuxtjs/feed",
      ["@nuxtjs/netlify-files", { existingFilesDirectory: __dirname }],
      [
        "@nuxtjs/gtm",
        {
          id: env.GTM_ID,
          pageTracking: true,
          pageViewEventName: "nuxtRoute",
          respectDoNotTrack: env.GTM_FRIENDLY,
          dev: env.GTM_DEV
        }
      ],
      [
        "@nuxtjs/pwa",
        {
          workbox: {
            offlineAnalytics: !!env.GTM_ID && true,
            // Register image CDN here
            runtimeCaching: [
              // {
              //   urlPattern: `https://example.com/.*`
              // }
            ]
          },
          meta: false,
          icon: {
            accessibleIcons: false
          },
          manifest: {
            // display: "browser", // disable "Add to Home Screen" button
            lang: env.APP_LANG,
            name: env.APP_NAME,
            short_name: env.APP_NAME,
            description: env.APP_DESC,
            background_color: env.APP_BACKGROUND_COLOR,
            theme_color: env.APP_ACCENT_COLOR
          }
        }
      ],
      "nuxt-svg-loader"
    ],

    /*
     ** Style resources
     */
    styleResources: {
      sass: "~/assets/sass/core.sass"
    },

    /*
     ** Generate
     */
    generate: {
      fallback: true,
      routes: [
        {
          route: "/",
          payload: {}
        }
      ]
    },

    /*
     ** Sitemap
     */
    sitemap: {
      hostname: env.APP_URL,
      gzip: true,
      exclude: []
    },

    /*
     ** Feed
     */
    feed: [],

    /*
     ** Env
     */
    env,

    /*
     ** Server configuration
     */
    server: {
      host: env.APP_HOST,
      port: env.APP_PORT
    },

    /*
     ** Build
     */
    build: {
      extractCSS: !env.DEV,
      loaders: {
        sass: {
          implementation: require("sass"),
          fiber: require("fibers")
        }
      },
      html: {
        minify: {
          minifyCSS: false,
          minifyJS: false
        }
      }
    }
  };
};
