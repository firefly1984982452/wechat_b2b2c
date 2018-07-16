// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    listDetail:[],
    URL:'http://center.shopsn.cn/'
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
    })
    wx.request({
      url: 'http://mapi.shopsn.cn/GoodsClass/getFirstId',
      data:'',
      method:'post',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        that.setData({
          list:res.data.data
        })
      }
    });
    that.getClassFloor(1);
  },
  
  getClassFloor(index){
    var that = this;
    wx.request({
      url: 'http://mapi.shopsn.cn/GoodsClass/getOtherClass',
      method:'get',
      data:{fid:index},
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        that.setData({
          listDetail : res.data.data
        })
      }
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
  
  }
})