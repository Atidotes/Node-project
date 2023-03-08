import requests from '@/util/axios.config'

/** 搜索模糊查询 */
export const searchInfo = (params) => requests({ method: 'GET', url: '/new/search', params })

/** 新闻列表 */
export const newList = () => requests({ method: 'GET', url: '/new/list' })

/** 获取新闻tab数据 */
export const newTabList = () => requests({ method: 'GET', url: "/new/tabList" })

/** 获取新闻详情 */
export const newDetails = (params) => requests({ method: 'GET', params, url: '/new/details' })

/** 获取最新新闻 */
export const lastNewList = () => requests({ method: 'GET', url: '/new/lastList' })
