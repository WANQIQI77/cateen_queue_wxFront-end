// pages/res3/res3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  globalData: {
    socketStatus: 'closed',
  },
  onLaunch: function() {   
      var that = this;
      if (that.globalData.socketStatus === 'closed') {
            that.openSocket();
      }
  },
  openSocket() {
     //打开时的动作
      wx.onSocketOpen(() => {
        console.log('WebSocket 已连接')
        this.globalData.socketStatus = 'connected';
        this.sendMessage();
      })
      //断开时的动作
      wx.onSocketClose(() => {
        console.log('WebSocket 已断开')
        this.globalData.socketStatus = 'closed'
      })
      //报错时的动作
      wx.onSocketError(error => {
        console.error('socket error:', error)
      })
      // 监听服务器推送的消息
      wx.onSocketMessage(message => {
        //把JSONStr转为JSON
        message = message.data.replace(" ", "");
        if (typeof message != 'object') {
          message = message.replace(/\ufeff/g, ""); //重点
          var jj = JSON.parse(message);
          message = jj;
        }
        console.log("【websocket监听到消息】内容如下：");
        console.log(message);
        //分割内容
        this.setData({
          localdata:res.data.split(";")//将数据给到data
        })
        console.log(this.data.localdata)
      })
      // 打开信道
      wx.connectSocket({
        url: 'https://www.ganduward.com:44329',
      })
    },
      
  //关闭信道
    closeSocket() {
      if (this.globalData.socketStatus === 'connected') {
        wx.closeSocket({
          success: () => {
            this.globalData.socketStatus = 'closed'

          }
        })
      }
    },
      

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})