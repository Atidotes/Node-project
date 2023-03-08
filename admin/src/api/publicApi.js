import requests from "@/util/axios.config";

/** 上传接口 */
export const upload = (url,params) => requests({
  method: 'POST',
  url: url,
  data: params,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
