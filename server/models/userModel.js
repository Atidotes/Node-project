/**
 * 用户模型
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userType = {
  userName:String, // 昵称
  accountNumber: Number, // 账号
  password:String, // 密码
  gender: Number, // 性别 未设0，男1，女2
  introduction:String, // 简介
  avatar: String, // 头像路径
  role:Number, // 角色 管理员1，编辑2
  userRole:Number,
}

const userModel = mongoose.model('user',new Schema(userType))

module.exports = userModel
