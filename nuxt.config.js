export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '稀土掘金',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router:{
    middleware:'auth',
    extendRoutes(routes,resolve){
        console.log(routes)
        routes.push({
          name:'root',
          path:'/index',
          component:resolve(__dirname,'pages/indexList.vue')
        }),
        routes.push({
          name:'root2',
          path:'/',
          component:resolve(__dirname,'pages/indexList.vue')
        })
     
    }
  },

  //自定义
  loading:'~/components/loading.vue',
  
  // {
  //   // color:'#399',height:'3px'
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/transltion.css',
    {src:'element-ui/lib/theme-chalk/index.css'},
    '~assets/css/editor.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/dateformat',
      ssr: true
    },
    '~/plugins/router',
    {src:'~/plugins/request',ssr:true},
    
      { src: '@/plugins/localStorage', ssr: false},
   
    // {
    //   src:'~/plugins/axios',
    //   ssr:true //服务端
    // },
    {
      src:'~/plugins/element-ui',
      ssr:true //不支持ssr的插件只会在客户端运行不要true
    },
    {
      src:'@/plugins/vue-quill-editor',
      ssr:false
    }
  ],
  axios:{
    //开启跨域行为
    proxy:true,
    // prefix:'/api',//baseUrl 服务器地址前缀

  },
  proxy:{
    '/api':{
      target:'http://localhost:3001',//代理地址转发
      changeOrigin:true,
      pathRewrite:{
        // '^/api':'' 把api前缀的替换为空
      }

    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    
    '@nuxtjs/style-resources',


    
  ],
  styleResources:{
    scss:[
      './assets/sass/global.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:[/^element-ui/],
  }
}
