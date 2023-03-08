import requests from "@/util/axios.config";

/** 获取用户列表 */
export const getUserList = () => requests({ method: 'GET', url: '/user/list' })

/** 删除用户 */
export const deleteUserInfo = (id) => requests({ method: 'delete', url: `/user/list/${id}` })

/** 获取用户信息 */
export const getUserInfo = (id) => requests({ method: 'GET', url: `/user/list/${id}` })

/** 修改用户信息 */
export const reviseUserInfo = (id, data) => requests({ method: 'PUT', data, url: `/user/list/${id}` })
