// 基本步骤：

// 在main.js中导入createApp函数
import {createApp} from 'vue'
// 定义App.vue组件，导入main.js
import App from './App.vue'
// 使用createApp函数基于App.vue组件创建应用实例
const app = createApp(App)
// 挂载至index.html的#app容器
app.mount("#app")