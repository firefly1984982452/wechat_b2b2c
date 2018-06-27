
var HTTP_URL = 'http://mapi.shopsn.cn/';
var IMG_URL = 'http://center.shopsn.cn';

var HTTP = function(API,params,requestType){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: HTTP_URL + API,
      data: (params),
      method: '' + requestType,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.data.status == 1){
          resolve(res.data.data);
        }else{
          reject(res);
        }
      }
    })
  })
}

module.exports = HTTP;