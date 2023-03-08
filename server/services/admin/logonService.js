const userModel = require("../../models/userModel")

const logonService = {
  /** 查找账号 */
  seek: ({accountNumber}) =>{
    return userModel.findOne({accountNumber})
  },

  logon: async ({accountNumber, password,userName,role,userRole})=>{
     return userModel.create({accountNumber, password,userName,role,userRole})
  },
}

module.exports = logonService
