const logonService = require('../../services/admin/logonService')
const svgCaptcha = require('svg-captcha');
let text = 'a'

const logonRouters = {

  /** 验证码 */
  captcha: async (req, res) => {
    const captcha = svgCaptcha.create({
      size: 4, //验证码长度
      noise: 3, //干扰线条数目
      width: 120, //宽度
      height: 32, //高度
      ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
      inverse: false, // 翻转颜色
      fontSize: 45, // 字体大小
      color: true, // 验证码字符颜色（需设置背景色）
      background: '#ccc', // 背景
    });
    text = captcha.text

    if (!captcha.text) {
      res.status(404).send({
        code: 404,
        success: false,
        message: '获取数据失败'
      })
    } else {
      res.send({
        code: 200,
        success: true,
        message: '获取数据成功',
        data: captcha.data
      })
    }
  },

  /** 注册 */
  logon: async (req, res) => {
    let { accountNumber, password, captcha, userName } = req.body

    /** 验证验证码是否正确 */
    if (captcha.toLowerCase() !== text.toLowerCase()) {
      return res.send({
        code: 403,
        message: '验证码不正确',
        success: false,
        data: {}
      })
    }

    /** 验证账号是否被注册 */
    let result = await logonService.seek({ accountNumber })
    if (result) {
      return res.send({
        code: 403,
        message: '账号已被注册',
        success: false,
        data: {}
      })
    }

    /** 注册账号 */
    await logonService.logon({ accountNumber, password, userName, role: 1, userRole: accountNumber })
    res.send({
      code: 200,
      success: true,
      message: '注册成功',
      data: {},
    })
  },
}

module.exports = logonRouters