import requests from "@/util/axios.config";

/** 获取新闻列表 */
export const newList = () => requests({ method: 'GET', url: '/new/list' })

/** 改变发布状态 */
export const newSwitch = (data) => requests({ method: 'PUT', url: '/new/publish', data })

/** 删除新闻 */
export const deleteNew = (id) =>requests({method:'DELETE',url:`/new/list/${id}`,})

/** 获取新闻信息 */
export const newInfo = (id) => requests({method:'GET',url:`/new/list/${id}`})
