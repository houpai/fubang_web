import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export const constantRoutes = [
  {path: "/", redirect: "/index"},
  {
    path: "/index",
    component: () => import("@/views/Index/index"),
    meta:{
      title: '首页'
    }
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
  },

  // 404 page must be placed at the end !!! push routes end
  {path: "*", redirect: "/404"}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  // const newRouter = createRouter()
  // router.matcher = newRouter.matcher // reset router
  localStorage.setItem('isLogout',true)
  router.matcher = new Router({
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes,
    replace: true
  }).matcher
}

export default router
