import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import store from '@/store'

const
    NotFound = () =>
    import ('@/components/404')

Vue.use(Router)

const router = new Router({
    routes: [...Home,
        {
            path: '*',
            component: NotFound,
            hidden: true
        }
    ]
})

router.beforeEach((to, from, next) => {
    store.commit('updateLoadingStatus', { isLoading: true })
    next()
})

router.afterEach((to) => {
    store.commit('updateLoadingStatus', { isLoading: false })
})

export default router