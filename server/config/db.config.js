const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1:27017/company-system", (error) => {
  if (error) {
    console.log('数据库连接异常')
  } else {
    console.log('数据库连接成功')
  }
})