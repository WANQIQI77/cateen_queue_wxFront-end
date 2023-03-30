// pages/res3/res3.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {

  },
  redirectToPage(e){
    wx.navigateTo({
      url: '../food/food'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //定义定时器
    this.timer = setInterval(() => {
      this.sendRequest();
    }, 1000); // 每隔5秒发送一次请求
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    clearInterval(this.timer);
  },

  //发送请求函数
  sendRequest() {
    wx.request({
      url: 'https://www.ganduward.com/cateen1/cateen2/cateen3',
      method:'GET',
      data:{
        congestion:'',
        waittime:'',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          localdata: res.data.split(";") //将数据给到data
        });
        console.log(this.data.localdata);
      }
    });
  }
});
