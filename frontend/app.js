import router from "./utils/router.js"  





const app = new Vue({


    el : '#app' ,
    template : `
    
      <router-view></router-view>
    
    `,
    router,
   
    
})
