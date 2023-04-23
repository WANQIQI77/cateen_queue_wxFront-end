// pages/thumbnail/thumbnail.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    canteen1:"一食堂",
    canteen2:"二食堂",
    canteen3:"三食堂"
  },

//按钮的事件处理函数
  tapCanteen1(e){
    wx.navigateTo({
      url: '../res1/res1'
    })

  },
  
  tapCanteen2(e){
    wx.navigateTo({
      url: '../res2/res2'
    })

  },


  tapCanteen3(e){
    wx.navigateTo({
      url: '../res3/res3'
    })

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