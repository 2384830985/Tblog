import {Component,Vue} from 'vue-property-decorator'

@Component({
    name: "logo",
})
export default class logos extends Vue {
    // 非空断言
    $refs!:{
        logoes: HTMLDivElement;
    }

    private showLogo:any = null;
    private scrollShow:boolean = true;

    get logoClass():Array<Object>{
        return [
            `logo`,
            {
                [`logo-top`]: this.showLogo===true,
                [`logo-bottom`]: this.showLogo!==null&&this.showLogo===false,
            }
        ]
    }

    /**
     * 点击回拉
     */
    private changeLoge(){
        this.showLogo = false;
        let scroll = (document.querySelector('html,body') as HTMLBodyElement).scrollTop
        this.setIntervalChangeLoge(scroll,this);
    }

    /**
     * 回拉效果
     * @param {number} res
     * @param that
     */
    private setIntervalChangeLoge:any =  function (res:number,that:any) {
        that.scrollShow = false;
        let timer = setInterval(function () {
            res = res-50;
            that.$nextTick(()=>{
                document.documentElement.scrollTop = document.body.scrollTop  = res<100?0:res;
                if (res<100) {
                    that.scrollShow = true;
                    clearInterval(timer);
                }
            })
        },20)
    }

    mounted(){
        this.start();
    }

    /**
     * 添加滚动监听
     */
    private start(){
        // let Logo = this.$refs.logoes.getBoundingClientRect();
        window.addEventListener('scroll', this.handleScroll);
    }

    /**
     * 滚动监听 滚动到250 的时候就自动收回去
     */
    private handleScroll(){
        let scroll = (document.querySelector('html,body') as HTMLBodyElement).scrollTop;
        // 小于10 就直接收回去
        let show = scroll>250;
        // 第一次进来只有先拉才会有
        if (this.showLogo==null) {
            if (scroll>250) {
                this.showLogo = true;
            }
        }else {
            if (show!==this.showLogo&&this.scrollShow) {
                this.showLogo = show
            }
        }
    }

    /**
     * 页面关闭取消滚动事件
     */
    deactivated(){
        window.removeEventListener('scroll', this.handleScroll);
    }
}
