//index.js
//获取应用实例
const app = getApp()
var API = require('../../utils/API.js');
var HTTP = require('../../utils/HTTP.js');
Page({
  onShareAppMessage: function (res) {
    
    return {
      title: '自定义转发标题',
      path: '/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  data: {
    URL: 'http://center.shopsn.cn/',
    nav: [{ image: "nav01.png", text: "抢购" },
    { image: "nav02.png", text: "品牌" },
    { image: "nav03.jpg", text: "店铺" },
    { image: "nav04.png", text: "积分商城" },
    { image: "nav05.png", text: "皇家御饮" },
    { image: "nav06.png", text: "御贡膳品" },
    { image: "nav07.png", text: "滋补养身" },
    { image: "nav08.png", text: "珠宝玉器" },
    { image: "nav09.png", text: "喜庆物品" },
    { image: "nav10.png", text: "帮助中心" }],
    adv: ["办公用纸调价通知函", "商城开始测试", "关于客户三证合一、开票资料变更的通知", "配送时效延迟公告", "复印纸秒杀时间调整通知", "6月活动"],
    floor: [],
    localImageURL:"../../images/",
    brandList: [{ title: "GR理发", image: "logo01.png" },
      { title: "MAC", image: "logo02.png" },
      { title: "李宁", image: "logo03.png" },
      { title: "黑天鹅", image: "logo04.png" },
      { title: "大象", image: "logo05.png" },
      { title: "360", image: "logo06.png" },
      { title: "三只松鼠", image: "logo07.png" },
      { title: "Deep传媒", image: "logo08.png" },
      { title: "林肯橄榄球", image: "logo09.png" },
      { title: "黑豹钓鱼队", image: "logo10.png" },
      { title: "Smartie男装", image: "logo11.png" },
      { title: "FilmWeave", image: "logo12.png" }],
    start_tamp:1529654400,
    time:''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getFloor();
  },

  getFloor:function(){
    HTTP(API.getFloor, { page: 1,token: 'mqg094tjvipu9cg2ldmp58ok34'},'get')
  }
})
