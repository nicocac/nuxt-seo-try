// https://nuxt.com/docs/api/configuration/nuxt-config
// Providing an app.head property in your nuxt.config.ts allows you to customize the head for your entire app.
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config: any, ctx: any) {
      config.module.rules.push({
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      })
    }
  }

})
