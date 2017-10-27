export default [{
        path: '/',
        component: () =>
            import ('./app.vue')
    },
    {
        path: '/detail',
        component: () =>
            import ('./detail.vue')
    }

]