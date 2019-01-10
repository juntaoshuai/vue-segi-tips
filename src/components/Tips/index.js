import Tips from './Tips.vue' // 导入组件
const tips = {
    install (Vue, options) {
        Vue.component('SegiTips', Tips)
        // Vue.component(Tips.name, Tips)
    }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(tips);
}

export default tips