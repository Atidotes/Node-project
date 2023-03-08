const newController = require('../../controllers/web/newController')
const express = require('express')
const newRouter = express.Router()

newRouter.get('/web/new/search', newController.searchInfo)
newRouter.get('/web/new/list', newController.newList)
newRouter.get('/web/new/tabList', newController.tabList)
newRouter.get('/web/new/details', newController.getDetails)
newRouter.get('/web/new/lastList', newController.getLastList)

module.exports = newRouter
