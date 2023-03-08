const APP = require('../../global')
const productService = require('../../services/web/productService')

const productController = {
  getList: async (req,res)=>{
    const result = await productService.getList()

    result.forEach(item=>{
      item.cover = `${APP.base}:${APP.port}${item.cover}` 
    })

    res.send({
      code:200,
      success: true,
      message:'请求数据成功',
      data: result
    })
  },
}

module.exports = productController