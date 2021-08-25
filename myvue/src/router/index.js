import Vue from 'vue'
import VueRoute from 'vue-router'
import Content from '../components/Content'
import Main from '../components/Main'
//安装路由
Vue.use(VueRoute);

export default new VueRoute({
  routes:[
    {
      //路由路径
      path:'/content',
      //名字
      name:'content',
      //跳转的组件
      component:Content
    },
    {
      //路由路径
      path:'/main',
      //名字
      name:'main',
      //跳转的组件
      component:Main
    }
  ]
});
