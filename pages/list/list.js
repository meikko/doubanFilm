// pages/list/list.js
const api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    method:'',
    films:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.method = options.method;

    // 响应式的赋值
    // this.setData({
    //   method = options.method
    // })
  },

  loadListData(){
    api[this.data.method]({
      start:0,
      count:12
    }).then(data => {
      let films = {
        title: data.subject_collection.name,
        list: data.subject_collection_items
      }
      this.setData({
        films:films
      });
    }).catch(api.showError);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.loadListData();
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