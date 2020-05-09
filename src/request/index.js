
window.apiRoot = 'https://manage.sy365.cn'

// 上线前应当切换这个
window.staffh5Root = 'https://user.sy365.cn'
window.staffh5TestRoot = '.'

export const apiPathList = {


  //获取订单列表(懒加载) get {id,type}
  getOrderList: apiRoot + "/user/personal/getOrderList",

  //获取单个订单信息 get {id}
  getOrder: apiRoot + "/user/personal/getOrder",

  //获取合同详情 get{id}
  getContract: apiRoot + "/user/personal/getContract",




  //获取服务分类 get
  getCategoryTree: apiRoot + "/user/service/getCategoryTree",

  //获取服务分类列表 get {id}
  getCategoryDetail: apiRoot + "/user/service/getCategoryDetail",

  //立即预约提交表单 post {phone, name}
  submitRequire: apiRoot + "/user/service/submitRequire",



  //广告位
  getAdPosition: apiRoot + "/user/common/getAdPosition",


  //首页视频
  getHomeVideo: apiRoot + "/user/common/getHomeVideo",
  //获取配置文件
  getWorkFormConfig: apiRoot + '/user/common/getWorkerFormConfig?get_for=edit'
    
}


















