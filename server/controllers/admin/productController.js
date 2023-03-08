const APP = require('../../global')
const productService = require('../../services/admin/productServices')

const productController = {

  /** 添加产品 */
  add: async (req, res) => {
    const { title, introduction, detail } = req.body

    const cover = req.file ? `/productUploads/${req.file?.filename}` : false
    await productService.add({
      title,
      introduction,
      detail,
      cover,
      editTime: new Date(),
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

  /** 获取产品列表 */
  getList: async (req, res) => {
    let result = await productService.getList({
      _id:req.params.id,
      userRole:req.userRole,
      role: req.role,
      user: req.user,
    })

    if (!Array.isArray(result)) {
      result.cover = `${APP.base}:${APP.port}${result.cover}`
    } else {
      result.forEach((item) => {
        item.cover = `${APP.base}:${APP.port}${item.cover}`
      })
    }

    res.send({
      code: 200,
      success: true,
      message: '请求数据成功',
      data: result,
    })
  },

  /** 删除产品信息 */
  deleteList: async (req, res) => {
    await productService.deleteList(req.params.id)

    res.send({
      code: 200,
      success: true,
      message: '操作成功',
      data: {},
    })
  },

  /** 修改产品信息 */
  reviseInfo: async (req, res) => {
    const { title, introduction, detail, _id } = req.body
    const cover = req.file ? `/productUploads/${req.file?.filename}` : false

    await productService.reviseInfo({
      _id,
      title,
      introduction,
      detail,
      cover,
      editTime: new Date()
    })

    res.send({
      code: 200,
      success: true,
      message: '修改成功',
      data: {},
    })
  },
}

module.exports = productController