// pages/res2/res2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //发起get数据请求
getInfo()
{
  wx.request({
    url: 'https://www.ganduward.com:44329',
    method:'GET',
    data:{
      congestion:'',
      waittime:'',
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success:(res) => {
     this.setData({
        localdata:res.data.split(";")//将数据给到data
      })
      console.log(this.data.localdata)
    }
  })

},
/**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.getInfo
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