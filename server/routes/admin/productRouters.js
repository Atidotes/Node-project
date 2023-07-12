const productController = require('../../controllers/admin/productController')
const express = require('express')
const productRouter = express.Router()
/** 图片上传 */
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, 'public/productUploads/')
  },
  filename: (req, file, cb) => {
    let name = (file.originalname).split('.')
    return cb(null, `${Date.now()}-${name[0]}.${name[name.length - 1]}`)
  }
})
const upload = multer({ storage })

productRouter.post('/admin/product/add', upload.single('file'), productController.add)
productRouter.get('/admin/product/list', productController.getList)
productRouter.delete('/admin/product/list/:id', productController.deleteList)
productRouter.get('/admin/product/list/:id', productController.getList)
productRouter.post('/admin/product/revise',upload.single('file'), productController.reviseInfo)

module.exports = productRouter
