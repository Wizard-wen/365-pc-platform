

/**
 * 首页
 */

import homePage from '@/pages/home.vue'
import classifyContent from '@/pages/classifyContent.vue'

const homeModule = [
    {
        path: '/homePage',
        name: 'homePage',
        component: homePage,
        meta: {
            requiresAuth:false,//该页面不需要登录
        }
    },
    {
        path: '/classifyContent',
        name: 'classifyContent',
        component: classifyContent,
        meta: {
            requiresAuth:false,//该页面不需要登录
        }
    }
]


import join from '@/pages/join.vue'
const joinModule = [
    {
        path: '/join',
        name: 'join',
        component: join,
        meta: {
            requiresAuth:false,//该页面不需要登录
        }
    }
]
/**
 * 重定向
 */
export default [
    {path: '/', redirect: '/homepage'},
    ...homeModule,
    ...joinModule,
]