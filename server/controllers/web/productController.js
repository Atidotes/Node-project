const productService = require('../../services/web/productService')
const config = require('../../env.config')

const productController = {
  getList: async (req,res)=>{
    const result = await productService.getList()

    result.forEach(item=>{
      item.cover = `${config.APP_BASE}:${config.APP_PORT}${item.cover}` 
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