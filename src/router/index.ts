import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import {store} from '../store'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        meta: {
            auth: true
        },
        component: () => import('@/views/Dashboard.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const { isLogin } = store.state['account']
    console.log(isLogin);
    
    if (to.name !== 'Login' && to.meta.auth && !isLogin) next({ name: 'Login' })
    else next()
})

export default router