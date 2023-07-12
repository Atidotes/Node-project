const newController = require('../../controllers/admin/newController')
const express = require('express')
const newRouter = express.Router()
/** 图片上传 */
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, 'public/newUploads/')
  },
  filename: (req, file, cb) => {
    let name = (file.originalname).split('.')
    return cb(null, `${Date.now()}-${name[0]}.${name[name.length - 1]}`)
  }
})
const upload = multer({ storage })

newRouter.post('/admin/new/add', upload.single('file'), newController.add)
newRouter.get('/admin/new/list', newController.getList)
newRouter.get('/admin/new/list/:id', newController.getNewInfo)
newRouter.delete('/admin/new/list/:id', newController.deleteNew)
newRouter.put('/admin/new/publish', newController.publish)
newRouter.post('/admin/new/upload', upload.single('file'), newController.uploads)
newRouter.post('/admin/new/revise', upload.single('file'), newController.revise)

module.exports = newRouter
