//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
import Profile from "../views/user/Profile";
import List from "../views/user/List";
import NotFound from '../views/NotFound'
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main,
      props: true,
      children: [
        {
          name: 'Profile',
          path: "/user/profile/:id",
          component: Profile,
          props: true
        },
        {
          path: "/user/list",
          component: List
        }
      ]
    },
    //首页
    {
      path: '/login',
      component: Login,

    },
    {
      name: 'backHome',
      path: '/backHome',
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
