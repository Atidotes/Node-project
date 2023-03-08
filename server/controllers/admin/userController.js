const userService = require('../../services/admin/userService')
const JWT = require('../../util/JWT')
const APP = require('../../global')

const userController = {
  /** 登录 */
  login: async (req, res) => {
    const result = await userService.login(req.body)
    
    /**
     * 判断获取数据库数据是否为空
     */
    if (!result) {
      res.send({
        success: false,
        code: 404,
        message: '账号或密码不匹配',
        data: {},
      })
    } else {
      /**
       * JWT验证
       */
      const token = JWT.generate({
        _id: result._id,
        userName: result.userName,
        accountNumber: result.accountNumber,
        role: result.role,
        userRole: result.userRole
      }, '1d')
      res.header('Authorization', token)

      /**
       * 传送数据
       */
      res.send({
        success: true,
        code: 200,
        message: '登录成功',
        data: {
          userName: result.userName,
          accountNumber: result.accountNumber,
          gender: result.gender ?? 0,
          introduction: result.introduction,
          avatar: result.avatar ? `${APP.base}:${APP.port}${result.avatar}` : null,
          role: result.role,
        },
      })
    }
  },

  /** 修改个人资料 */
  upload: async (req, res) => {
    /** 解析用户ID */
    const token = req.headers['authorization'].split(' ')[1]
    const payload = JWT.verify(token)

    /** 解析数据 */
    const { userName, gender, introduction } = req.body
    const avatar = req.file ? `/avatarUploads/${req.file?.filename}` : false

    /** 调用数据库保存数据 */
    await userService.upload({
      _id: payload._id,
      userName,
      gender: Number(gender),
      introduction,
      avatar,
    })

    /** 发送数据 */
    if (avatar) {
      res.send({
        success: true,
        code: 200,
        message: '保存成功',
        data: {
          userName,
          gender: Number(gender),
          introduction,
          avatar: `${APP.base}:${APP.port}${avatar}`,
        },
      })
    } else {
      res.send({
        success: true,
        code: 200,
        message: '保存成功',
        data: {
          userName,
          gender: Number(gender),
          introduction,
        },
      })
    }
  },

  /** 添加用户 */
  add: async (req, res) => {
    /** 解析数据 */
    const { userName, gender, introduction, password, accountNumber, role } = req.body
    const avatar = req.file ? `/avatarUploads/${req.file?.filename}` : false

    /** 调用数据库保存数据 */
    await userService.add({
      userName,
      gender: Number(gender),
      introduction,
      avatar,
      password,
      accountNumber,
      role: Number(role),
      userRole: req.userRole
    })

    /** 发送数据 */
    res.send({
      success: true,
      code: 200,
      message: '添加用户成功',
      data: {},
    })
  },

  /** 获取用户列表 */
  userList: async (req, res) => {
    const result = await userService.userList({
      _id: req.params.id,
      userRole: req.userRole
    })

    if (Array.isArray(result)) {
      result.forEach((item) => {
        if (!item.avatar || item.avatar.includes('undefined')) {
          item.avatar = null
        } else {
          item.avatar = `${APP.base}:${APP.port}${item.avatar}`
        }
      })
    }

    res.send({
      code: 200,
      success: true,
      message: '获取数据成功',
      data: result,
    })
  },

  /** 修改用户信息 */
  reviseUser: async (req, res) => {
    await userService.reviseUser(req.body)

    res.send({
      code: 200,
      success: true,
      message: '修改成功',
      data: {},
    })
  },

  /** 删除用户信息 */
  deleteList: async (req, res) => {
    await userService.deleteList({ _id: req.params.id })

    res.send({
      code: 200,
      success: true,
      message: '删除成功',
      data: {},
    })
  }
}

module.exports = userController
