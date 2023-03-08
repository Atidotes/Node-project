const userModel = require("../../models/userModel")

const userService = {
  /** 登录 */
  login: async ({ accountNumber, password }) => {
    return userModel.findOne({
      accountNumber,
      password,
    })
  },

  /** 保存个人信息 */
  upload: async ({ _id, userName, gender, introduction, avatar }) => {
    if (avatar) {
      return userModel.updateOne({ _id }, {
        userName,
        gender,
        introduction,
        avatar,
      })
    } else {
      return userModel.updateOne({ _id }, {
        userName,
        gender,
        introduction,
      })
    }
  },

  /** 添加用户 */
  add: async ({ userName, gender, introduction, avatar, password, accountNumber, role, userRole }) => {
    return userModel.create({
      userName,
      gender,
      introduction,
      avatar,
      password,
      accountNumber,
      role,
      userRole,
    })
  },

  /** 获取用户列表 */
  userList: async ({ _id, userRole }) => {
    return Boolean(_id) ? userModel.findOne({ _id }, [
      'userName', 'role', 'password', 'introduction', 'accountNumber'
    ]) : userModel.find({ userRole }, [
      'userName', 'gender', 'avatar', 'role', 'accountNumber'
    ])
  },

  /** 修改用户信息 */
  reviseUser: async (body) => {
    return userModel.updateOne({ _id: body._id }, body)
  },

  /** 删除用户信息 */
  deleteList: async ({ _id }) => {
    return userModel.deleteOne({ _id })
  }
}

module.exports = userService
