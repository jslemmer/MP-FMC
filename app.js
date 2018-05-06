//app.js
App({
  onLaunch: function () {
    this.globalData.stories = wx.getStorageSync('stories')
  },
  globalData: {
    stories: []
  }
})