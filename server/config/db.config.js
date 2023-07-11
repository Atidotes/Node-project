const mongoose = require('mongoose')
const config = require('../env.config')

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://${config.APP_DB_BASE}:${config.APP_DB_PORT}/company-system`, (error) => {
  if (error) {
    console.log('数据库连接异常')
  } else {
    console.log('数据库连接成功')
  }
})