import requests from '@/util/axios.config'

/** 请求数据 */
export const getList = () => requests({method:'GET', url:'/product/list'})
