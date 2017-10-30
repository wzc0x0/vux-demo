export default [{
        path: '/',
        component: () =>
            import ('./app.vue')
    },
    {
        path: '/detail/:id',
        component: () =>
            import ('./detail.vue')
    }

]