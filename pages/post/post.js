// pages/post/post.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories: app.globalData.stories
  },

  submitStory: function (e) {
    console.log('submit story')

    app.globalData.stories.push(e.detail.value.textarea)    
    console.log(app.globalData.stories)

    wx.showToast({
      title: 'Saving...',
      icon: 'loading',
      duration: 1000
    })

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/stories/stories'
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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