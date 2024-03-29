const userController = require('../../controllers/admin/userController')
const express = require('express')
const userRouter = express.Router()
/** 图片上传 */
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, 'public/avatarUploads/')
  },
  filename: (req, file, cb) => {
    let name = (file.originalname).split('.')
    return cb(null, `${Date.now()}-${name[0]}.${name[name.length - 1]}`)
  }
})
const upload = multer({ storage })

userRouter.post('/admin/user/login', userController.login)
userRouter.post('/admin/user/upload', upload.single('file'), userController.upload)
userRouter.post('/admin/user/add', upload.single('file'), userController.add)

/** 删改查用户信息 */
userRouter.get('/admin/user/list', userController.userList)
userRouter.get('/admin/user/list/:id', userController.userList)
userRouter.put('/admin/user/list/:id', userController.reviseUser)
userRouter.delete('/admin/user/list/:id', userController.deleteList)

module.exports = userRouter
