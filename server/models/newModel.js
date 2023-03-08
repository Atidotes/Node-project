/**
 * 用户模型
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newType = {
  title: String,
  content: String,
  category: Number, // 最新动态1 典型案例2 通知公告3
  cover: String,
  isPublish: Number, // 未发布0 已发布1
  editTime: Date,
  userRole: Number,
  role: Number,
  user:Number,
}

const newModel = mongoose.model('new', new Schema(newType))

module.exports = newModel
