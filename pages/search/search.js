// pages/search/search.js

var API = require('../../utils/API.js');
var HTTP = require('../../utils/HTTP.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: [],
    historySearch:[],
    inputValue:''
  },

  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  searchFun(e){
    var arr = this.data.historySearch;
    arr.push(e.detail.value);

    wx.setStorage({
      key: 'search',
      data: arr
    })

    this.setData({
      historySearch:arr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getHot();
    wx.getStorage({
      key: 'search',
      success: function(res) {
        console.log(res)
        that.setData({
          historySearch: res.data
        })
      },
    })
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

  /**
   * 取消搜索
   */
  cancelFun:function(){
    wx.navigateBack()
  },

  getHot(){
    HTTP(API.hotSearch,{},'post').then((res)=>{
      this.setData({
        hotData:res
      })
    })
  },

  emptySearch(){
    var that = this;
    wx.clearStorage({
      success:function(res){
        that.setData({
          historySearch:[]
        })
      }
    });

  }
})