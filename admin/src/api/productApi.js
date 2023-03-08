import requests from "@/util/axios.config";

/** 获取产品表格数据 */
export const productList = () => requests({ method: 'GET', url: '/product/list' })

/** 删除产品 */
export const deleteProduct = (id) => requests({ method: 'DELETE', url: `/product/list/${id}` })

/** 获取产品数据 */
export const productInfo = (id) => requests({ method: 'GET', url: `/product/list/${id}` })

