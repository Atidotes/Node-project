import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 关闭加载圈
NProgress.configure({ showSpinner: false })

const requests = axios.create({
  baseURL: "/admin",
  timeout: 3000,
})

// 添加请求拦截器
requests.interceptors.request.use((config) => {
  NProgress.start()
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`

  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use((response) => {
  const { authorization } = response.headers
  authorization && localStorage.setItem('token', authorization)

  NProgress.done()
  return response.data;
}, (error) => {
  const { status } = error.response
  if (status === 401) {
    localStorage.removeItem('token')
    window.location.href = '#/login'
  }

  NProgress.done()
  return Promise.reject(error);
});

export default requests
