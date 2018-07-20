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
    name: app.globalData.name,
    IMG_URL: app.globalData.IMG_URL,
    nav: [],
    floor: [],
    adArr:[],
    page:1,
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
    time:'',
    homeData:{}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getHome();
    this.getFloor();
  },

  getFloor:function(){
    HTTP(API.getFloor, { 
      page: this.data.page,
      token: 'mqg094tjvipu9cg2ldmp58ok34'
      },'get').then((res)=>{

        var nfloor = this.data.floor;
        nfloor.push(res);
        this.setData({ floor: nfloor });
        this.getAd();
    })
    console.log(this.data.floor.length, this.data.floor)
  },

  getAd(){
    HTTP(API.getAd,{
      page:this.data.page
    }, 'get').then((res) => {
      var item = this.data.adArr;
      item.push(res);
      this.setData({
        adArr:item
      })
      this.data.page++;
      wx.hideLoading();
      console.log(res)
    })
  },

  getHome(){
    HTTP(API.getHome, {}, 'post').then((res) => {
      console.log(res)
      this.setData({
        homeData: res
      });
    })
    console.log(this.data.homeData)
  },
  bannerDetail: function () {
    console.log('item')
  },


  onReachBottom:function(){
    var that = this;
    wx.showLoading({
      title: '加载中...',
    });
    
    that.getFloor();
  }

})
