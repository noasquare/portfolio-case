// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[
        {
          id: 0 ,
          longitude:117.0311,
          latitude:36.6666,
          iconPath:'/assets/icons/pin.png',
          callout:{
            content:'卧槽！'
          }
        }
     ]
  },

  formSubmit(event){
    console.log(event.detail.value)
  },

  inputHandler(event){
    this.setData({
      pick: event.detail.value
    })
    console.log(event.detail.value)
  },

  setScrollView(event){
    this.setData({
      currentView: event.target.dataset.view
    })
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
