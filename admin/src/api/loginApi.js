import requests from "@/util/axios.config";

/** 登录 */
export const loginApi = (data) => requests({ url: '/user/login', method: 'POST', data: data })

/** 获取验证码 */
export const captchaApi = () => requests({ url: `/user/captcha/?time=${new Date().getTime()}`, method: 'GET' })

export const logonApi = (data) => requests({ url: '/user/logon', method: 'POST', data })
