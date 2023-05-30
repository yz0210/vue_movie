import axios from 'axios'

// 导入 NProgress 包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置请求的跟路径
// axios.defaults.baseURL = 'http://124.70.71.210:8081/yz'

axios.defaults.baseURL = ' http://localhost:8081/yz'

/*const service = axios.create({
    // 配置请求的跟路径
    baseURL: '/api',
    // 超时时长
    timeout: 1000
})*/
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
    // console.log(config)
    NProgress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
    // 在最后必须 return config
    return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
    NProgress.done()
    return config
})
export default axios
