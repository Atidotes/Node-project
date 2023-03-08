const newModel = require('../../models/newModel')

const newService = {

  /** 添加新闻 */
  add: ({
    title,
    content,
    cover,
    category,
    isPublish,
    editTime,
    userRole,
    role,
    user,
  }) => {
    return newModel.create({
      title,
      content,
      cover,
      category,
      isPublish,
      editTime,
      userRole,
      role,
      user,
    })
  },

  /** 获取新闻列表 */
  getList: ({ userRole, role,user }) => {
    if (role === 1) {
      return newModel.find({ userRole })
    } else {
      return newModel.find({ userRole, role,user })
    }
  },

  /** 获取新闻信息 */
  getNewInfo: (id) => {
    return newModel.findOne({ _id: id })
  },

  /** 发布新闻 */
  publish: ({ _id, isPublish, editTime }) => {
    return newModel.updateOne({ _id }, {
      isPublish, editTime
    })
  },

  /** 删除新闻 */
  deleteNew: (id) => {
    return newModel.deleteOne({ _id: id })
  },

  /** 修改新闻 */
  revise: ({ title, content, cover, editTime, category, isPublish, _id }) => {
    if (cover) {
      return newModel.updateOne({ _id }, {
        title, content, cover, editTime, category, isPublish,
      })
    } else {
      return newModel.updateOne({ _id }, {
        title, content, editTime, category, isPublish,
      })
    }
  },
}

module.exports = newService