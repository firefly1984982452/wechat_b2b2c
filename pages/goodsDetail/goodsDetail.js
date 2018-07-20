// pages/goodsDetail/goodsDetail.js
var HTTP = require('../../utils/HTTP.js');
var API = require('../../utils/API.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IMG_URL: app.globalData.IMG_URL,
    goodsID:0,
    goodsInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      goodsID:options.id
    })
    this.getDetail();
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getDetail(){
    HTTP(API.goodsDetail,{id:this.data.goodsID},'get').then((res)=>{
      this.setData({
        goodsInfo:res
      })
    })
  }
})