// pages/list/list.js
const api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    method:'',
    films:{},
    start:0,
    count:12,
    total:0,
    showLoad:false,
    showNoMore:false
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
    this.setData({
      showLoad : true
    });
    api[this.data.method]({
      start:this.data.start,
      count:this.data.count
    }).then(data => {
      let list = this.data.films.list || [];
      let films = {
        title: data.subject_collection.name,
        list: list.concat(data.subject_collection_items)
      }
      this.setData({
        films:films,
        total:data.total,
        showLoad : false
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
    this.setData({
      start:0,
      films:{}
    })
    this.loadListData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.start = this.data.start + this.data.count;
    if(this.data.total > this.data.start){
      this.loadListData();
    } else {
      this.setData({
        showNoMore:true
      })
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})