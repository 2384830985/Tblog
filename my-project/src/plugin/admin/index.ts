import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Jump from '@/libs/overallSituation'

export default {
    async install(Vue:any,options:Object){
        // 设置为 false 以阻止 vue 在启动时生成生产提示。https://cn.vuejs.org/v2/api/#productionTip
        Vue.config.productionTip = false;
        // 当前环境
        Vue.prototype.$env = process.env.NODE_ENV;
        // 当前的 baseUrl
        Vue.prototype.$baseUrl = process.env.BASE_URL;
        // 全局公共方法
        Vue.prototype.$Jump = Jump;
        // iView
        Vue.use(iView)
    }
}
