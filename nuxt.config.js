const bodyParser = require('body-parser')
export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#e91e63',
        duration: 5000
    },
    /*
     ** Global CSS
     */
    css: ['~assets/css/style.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/axios'],

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    /*
     ** .env global variables
     */
    env: {
        baseUrl: process.env.BASE_URL || 'https://ninja-chat-f3752.firebaseio.com',
        fb_API_KEY: 'AIzaSyAiCKJd-6_YJ_l3Ks0KT21Ixzj3JL3QPoA'
    },
    /*
     ** Axios configuration
     */
    axios: {
        baseURL: process.env.BASE_URL || 'https://ninja-chat-f3752.firebaseio.com'
    },
    /*
     ** Page transtion effect
     */
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    /*
     ** router configuration
     */
    router: {
        middleware: 'log'
    },
    serverMiddleware: [bodyParser.json(), '~/api']
}