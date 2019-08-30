/**
 * 首页
 */
export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: {
            title: 'article',
            name: '首页'
        },
    }
]
