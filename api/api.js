
const URLS = {
  hotUrl:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  latestUrl:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items',
  freeUrl:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items',
  detailUrl:'https://m.douban.com/rexxar/api/v2/movie/'
}

const showError = function(error){
    wx.showToast({
      title: error=null ? '数据加载失败' : error.errMsg,
      image:'/imgs/error.png'
    })
}

const loadHotFilms = function(parms={}){
  return new Promise((resolve,reject) => {
    wx.request({
      url: URLS.hotUrl,
      data:parms,
      success : resolve,
      fail: reject
    })
  }).then( res => {
    if(res.statusCode == 200){
      return res.data;
    }else{
      Promise.reject({
        message:res.errMsg
      })
    }
  })
}

const loadLatestFilms = function(parms= {}){
  return new Promise((resolve,reject) => {
    wx.request({
      url: URLS.latestUrl,
      data:parms,
      success : resolve,
      fail: reject
    })
  }).then( res => {
    if(res.statusCode == 200){
      return res.data;
    }else{
      Promise.reject({
        message:res.errMsg
      })
    }
  })
}

const loadFreeFilms = function(parms= {}){
  return new Promise((resolve,reject) => {
    wx.request({
      url: URLS.freeUrl,
      data:parms,
      success : resolve,
      fail: reject
    })
  }).then( res => {
    if(res.statusCode == 200){
      return res.data;
    }else{
      Promise.reject({
        message:res.errMsg
      })
    }
  })
}
module.exports = {
  showError,
  loadHotFilms,
  loadLatestFilms,
  loadFreeFilms
}