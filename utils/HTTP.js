
var HTTP_URL = 'http://mapi.shopsn.cn/';
var IMG_URL = 'http://center.shopsn.cn';

var HTTP = function(API,params,requestType){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: HTTP_URL + API,
      data: params,
      method: '' + requestType,
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
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