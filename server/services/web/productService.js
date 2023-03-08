const productModel = require('../../models/productModel')

const productService = {
  getList: () =>{
    return productModel.find()
  }
}

module.exports = productService