import {Route} from "vue-router";

export default [
    // 刷新页面 必须保留
    {
        path: '/refresh',
        name: 'refresh',
        hidden: true,
        component: {
            beforeRouteEnter (to:Route, from:Route, next:Function) {
                next((vm:any) => vm.$router.replace(from.fullPath))
            },
            render: (h:any) => h()
        }
    },
    // 页面重定向 必须保留
    {
        path: '/redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: () => import('@/components/redirect/index.vue'),
    }
]
