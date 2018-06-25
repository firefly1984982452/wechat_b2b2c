
var HTTP_URL = 'http://mapi.shopsn.cn/';

var HTTP = function(API,params,requestType){
  wx.request({
    url: HTTP_URL+API,
    data:(params),
    method: '' + requestType,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success:function(res){
      return res.data.data;
    }
  })
}

module.exports = HTTP;