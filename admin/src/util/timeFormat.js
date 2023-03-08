import moment from 'moment'
moment.locale('zh-cn');         // zh-cn

export const timeFormat = (params) => {
  return moment(params).format("YYYY/MM/DD HH:mm")
}
