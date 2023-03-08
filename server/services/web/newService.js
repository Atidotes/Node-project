const newModel = require('../../models/newModel')

const newService = {

  /** 搜索新闻数据 */
  searchInfo: (title) => {
    if (title) {
      return newModel.find({ title: new RegExp(title), isPublish: 1 }).sort({ editTime: -1 })
    } else {
      return newModel.find({ isPublish: 1 }).sort({ editTime: -1 }).limit(5)
    }
  },

  /** 获取新闻列表 */
  newList: () => {
    return newModel.find({ isPublish: 1 }).sort({ editTime: -1 }).limit(4)
  },

  /** 获取新闻tab列表 */
  tabList: () => {
    return newModel.find({ isPublish: 1 }).sort({ editTime: -1 })
  },

  /** 获取新闻详情 */
  getDetails: ({ id }) => {
    return newModel.findOne({ _id: id })
  },

  /** 获取最新新闻 */
  getLastList: () => {
    return newModel.find({ isPublish: 1 }).sort({ editTime: -1 }).limit(4)
  }
}

module.exports = newService