import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 关闭加载圈
NProgress.configure({ showSpinner: false })

const requests = axios.create({
  baseURL: "/web",
  timeout: 500,
})

// 添加请求拦截器
requests.interceptors.request.use((config) => {
  NProgress.start()
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use((response) => {
  NProgress.done()
  return response.data;
}, (error) => {
  NProgress.done()
  return Promise.reject(error);
});

export default requests
