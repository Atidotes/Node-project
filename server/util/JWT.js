const jsonwebtoken = require('jsonwebtoken')

const secret = 'Atidote'

const JWT = {
  // 生成token
  generate(value, trim) {
    return jsonwebtoken.sign(value, secret, { expiresIn: trim })
  },

  // 验证token
  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret)
    } catch (error) {
      return false
    }
  }
}

module.exports = JWT
