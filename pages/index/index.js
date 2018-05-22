//index.js
//获取应用实例
const app = getApp()

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
    floor: [{
      "id": "37",
      "class_name": "礼品鲜花",
      "pic_url": "\/Uploads\/class\/2017-07-12\/5965e212ec150.jpg",
      "goods": []
    }, {
      "id": "33",
      "class_name": "图书音像",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596489f67e3ca.jpg",
      "goods": []
    }, {
      "id": "15",
      "class_name": "食品酒类",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596489e239de6.jpg",
      "goods": []
    }, {
      "id": "34",
      "class_name": "母婴玩具",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596489cde5d52.jpg",
      "goods": []
    }, {
      "id": "31",
      "class_name": "汽车用品",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596489ba91d70.jpg",
      "goods": []
    }, {
      "id": "14",
      "class_name": "女鞋箱包",
      "pic_url": "\/Uploads\/class\/2017-07-11\/5964896b99d06.jpg",
      "goods": []
    }, {
      "id": "4",
      "class_name": "美妆个护",
      "pic_url": "\/Uploads\/class\/2017-07-11\/5964895a72be8.jpg",
      "goods": []
    }, {
      "id": "697",
      "class_name": "女装男装",
      "pic_url": "\/Uploads\/class\/2017-07-11\/59648948be529.jpg",
      "goods": []
    }, {
      "id": "3",
      "class_name": "家居厨具",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596489298d7b2.jpg",
      "goods": []
    }, {
      "id": "29",
      "class_name": "电脑办公",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596488ff60ee8.jpg",
      "goods": []
    }, {
      "id": "9",
      "class_name": "手机数码",
      "pic_url": "\/Uploads\/class\/2017-07-11\/596488d5d826f.jpg",
      "goods": [{
        "id": "3773",
        "goods_price": "7.00",
        "title": "水果好吃 三联\/无等分 包 64GB",
        "p_id": "3765",
        "image": "\/Uploads\/goods\/2018-05-17\/thumb_5afd565977680.png"
      }, {
        "id": "3767",
        "goods_price": "42.00",
        "title": "水果好吃 箱 四联\/无等分 64GB",
        "p_id": "3765",
        "image": "\/Uploads\/goods\/2018-05-17\/thumb_5afd565977680.png"
      }, {
        "id": "3768",
        "goods_price": "452.00",
        "title": "水果好吃 包 四联\/无等分 32GB",
        "p_id": "3765",
        "image": "\/Uploads\/goods\/2018-05-17\/thumb_5afd565977680.png"
      }, {
        "id": "3769",
        "goods_price": "45.00",
        "title": "水果好吃 包 四联\/无等分 64GB",
        "p_id": "3765",
        "image": "\/Uploads\/goods\/2018-05-17\/thumb_5afd565977680.png"
      }]
    }, {
      "id": "1",
      "class_name": "家用电器",
      "pic_url": "\/Uploads\/class\/2017-07-11\/5964893765bda.jpg",
      "goods": []
    }, {
      "id": "794",
      "class_name": "接口",
      "pic_url": "",
      "goods": []
    }],
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
    var now = Math.round(new Date().getTime()/1000);
    var nTime = this.data.start_tamp-now;
    var day = Math.floor(nTime / 1000 / 60 / 60 / 24);
    var hour = Math.floor(nTime % 1000 / 60 / 60);
    var minute = Math.floor(nTime / 1000 / 60);
    var sec = Math.floor(nTime / 1000);
    console.log(day + "===" + hour + "===" + minute + "===" + sec);
    if (day) {
      return day + "天";
    } else if (hour) {
      return hour + '小时';
    } else if (minute) {
      return minute + '分';
    } else {
      return sec + '秒';
    }
  },
})
