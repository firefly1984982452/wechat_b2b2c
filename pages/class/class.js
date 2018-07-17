// pages/class/class.js
var HTTP = require('../../utils/HTTP.js');
var API = require('../../utils/API.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    listDetail:[],
    URL:'http://center.shopsn.cn/',
    classID:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          deviceHeight:res.windowHeight
        })
      },
    });
    that.getClass();
    that.getClassFloor(that.data.classID);
  },

  getClass(){
    HTTP(API.getClass,{},'post').then((res)=>{
      this.setData({
        list: res,
        classID:res[0].id
      })
      console.log(this.data.classID)
    })
  },
  
  getClassFloor(index){
    wx.showLoading({
      title: '加载中...',
    });
    HTTP(API.getClassDetail,{fid:index},'get').then((res)=>{
      this.setData({
        listDetail: res
      })
      wx.hideLoading();
    })
  },

  tabFun(e){
    var index = e.target.id;
    this.setData({
      classID:index
    })
    this.getClassFloor(index);
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
  
  }
})