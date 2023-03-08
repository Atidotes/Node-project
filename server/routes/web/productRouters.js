const productController = require('../../controllers/web/productController')
const express = require('express')
const productRouter = express.Router()

productRouter.get('/web/product/list', productController.getList)

module.exports = productRouter
