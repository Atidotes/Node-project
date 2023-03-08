const productModel = require('../../models/productModel')

const productService = {
  /** 添加产品 */
  add: ({ title, introduction, detail, cover, editTime, userRole,role,user }) => {
    return productModel.create({
      title, introduction, detail, cover, editTime, userRole,role,user
    })
  },

  /** 获取产品列表 */
  getList: ({ _id, userRole, role, user}) => {
    if (role === 1) {
      return Boolean(_id) ? productModel.findOne({ _id }) : productModel.find({ userRole })
    }else{
      return _id ? productModel.findOne({_id}) : productModel.find({
        userRole,
        role,
        user,
      })
    }

  },

  /** 删除产品 */
  deleteList: (id) => {
    return productModel.deleteOne({ _id: id })
  },

  /** 修改产品 */
  reviseInfo: ({ _id, title, introduction, detail, cover, editTime, }) => {
    if (cover) {
      return productModel.updateOne({ _id }, {
        title, introduction, detail, cover, editTime,
      })
    } else {
      return productModel.updateOne({ _id }, {
        title, introduction, detail, editTime,
      })
    }
  }
}

module.exports = productService
