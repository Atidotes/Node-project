const logonController = require('../../controllers/admin/logonController')
const express = require('express')
const logonRouter = express.Router()

logonRouter.post('/admin/user/logon', logonController.logon)
logonRouter.get('/admin/user/captcha', logonController.captcha)

module.exports = logonRouter
