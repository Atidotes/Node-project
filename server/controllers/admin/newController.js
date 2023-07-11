const newService = require('../../services/admin/newService')
const config = require('../../env.config')

const newController = {

  /** 添加新闻 */
  add: async (req, res) => {
    const { title, content, category, isPublish } = req.body
    const cover = req.file ? `/newUploads/${req.file?.filename}` : false
    await newService.add({
      title,
      content,
      cover,
      editTime: new Date(),
      category: Number(category),
      isPublish: Number(isPublish),
      userRole: req.userRole,
      role: req.role,
      user: req.user,
    })

    res.send({
      code: 200,
      success: true,
      message: '发布成功',
      data: {},
    })
  },

  /** 新闻列表 */
  getList: async (req, res) => {
    const result = await newService.getList({ 
      userRole: req.userRole,
      role: req.role,
      user:req.user
    })

    res.send({
      code: 200,
      success: true,
      message: '获取数据成功',
      data: result,
    })
  },

  /** 获取新闻信息 */
  getNewInfo: async (req, res) => {
    const result = await newService.getNewInfo(req.params.id)

    result.cover = `${config.APP_BASE}:${config.APP_PORT}${result.cover}`

    res.send({
      code: 200,
      success: true,
      message: '获取数据成功',
      data: result,
    })
  },

  /** 删除新闻 */
  deleteNew: async (req, res) => {
    await newService.deleteNew(req.params.id)

    res.send({
      code: 200,
      message: '操作成功',
      success: true,
      data: {},
    })
  },

  /** 是否发布新闻 */
  publish: async (req, res) => {
    const { isPublish } = req.body
    await newService.publish({
      ...req.body,
      editTime: new Date(),
    })

    res.send({
      code: 200,
      success: true,
      message: isPublish === 1 ? '已发布成功' : '已取消发布',
      data: {}
    })
  },

  /** 富文本上传本地图片 */
  uploads: (req, res) => {
    const src = req.file ? `/newUploads/${req.file?.filename}` : false

    res.send({
      "errno": 0,
      "data": {
        "url": `${config.APP_BASE}:${config.APP_PORT}${src}`,
        "alt": "yyy",
      }
    })
  },

  /** 修改新闻 */
  revise: async (req, res) => {
    const { title, content, category, isPublish, _id } = req.body
    const cover = req.file ? `/newUploads/${req.file?.filename}` : false

    await newService.revise({
      _id,
      title,
      content,
      cover,
      editTime: new Date(),
      category: Number(category),
      isPublish: Number(isPublish),
    })

    res.send({
      code: 200,
      success: true,
      message: '发布成功',
      data: {},
    })
  },
}

module.exports = newController