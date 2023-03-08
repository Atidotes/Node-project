const productController = require('../../controllers/admin/productController')
const express = require('express')
const productRouter = express.Router()
/** 图片上传 */
const multer = require('multer')
const upload = multer({ dest: 'public/productUploads/' })

productRouter.post('/admin/product/add', upload.single('file'), productController.add)
productRouter.get('/admin/product/list', productController.getList)
productRouter.delete('/admin/product/list/:id', productController.deleteList)
productRouter.get('/admin/product/list/:id', productController.getList)
productRouter.post('/admin/product/revise',upload.single('file'), productController.reviseInfo)

module.exports = productRouter
