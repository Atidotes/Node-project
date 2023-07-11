const newService = require('../../services/web/newService')
const config = require('../../env.config')

const newController = {

  /** 搜索新闻数据 */
  searchInfo: async (req, res) => {
    let { title } = req.query
    const result = await newService.searchInfo(title)

    res.send({
      code: 200,
      success: true,
      message: '获取数据成功',
      data: result,
    })
  },

  /** 获取新闻列表 */
  newList: async (req, res) => {
    let result = await newService.newList()

    result.forEach(item => {
      item.cover = `${config.APP_BASE}:${config.APP_PORT}${item.cover}`
    })

    res.send({
      code: 200,
      success: true,
      message: '获取数据成功',
      data: result,
    })
  },

  /** 获取新闻tab列表数据 */
  tabList: async (req, res) => {
    let result = await newService.tabList()

    result.forEach(item=>{
      item.cover = `${config.APP_BASE}:${config.APP_PORT}${item.cover}` 
    })

    res.send({
      code: 200,
      success: true,
      message: '获取数据成功',
      data: filtrate(result, 'category')
    })
  },

  /** 获取新闻详情数据 */
  getDetails: async (req,res) =>{
    let result = await newService.getDetails({id:req.query.id})

    res.send({
      code:200,
      success: true,
      message:'数据请求成功',
      data: result
    })
  },

  /** 获取最新新闻 */
  getLastList: async(req,res) =>{
    let result = await newService.getLastList()

    res.send({
      code:200,
      success:true,
      message:'获取数据成功',
      data: result
    })
  },
}

/** 筛选数据重组数据结构 */
const filtrate = (params, target) => {
  const obj = {}
  const arr = [...new Set(params.map(item => item[target]))]
  arr.forEach(item => {
    obj[item] = params.filter(i => i[target] === item)
  })
  return obj
}

module.exports = newController