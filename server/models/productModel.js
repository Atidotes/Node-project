/**
 * 用户模型
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productType = {
  title: String,
  introduction: String,
  detail: String,
  cover: String,
  editTime: Date,
  userRole: Number,
  role:Number,
  user:Number,
}

const productModel = mongoose.model('product', new Schema(productType))

module.exports = productModel
