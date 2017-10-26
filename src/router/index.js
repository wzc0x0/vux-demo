import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'

const notFound = () =>
    import ('@/components/404')

Vue.use(Router)

export default new Router({
    routes: [Home,
        {
            path: '*',
            component: NotFound,
            hidden: true
        }
    ]
})