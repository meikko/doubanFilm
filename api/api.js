
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

const loadHotFilms = function(Url, parms={}){
  return new Promise((resolve,reject) => {
    wx.request({
      url: Url,
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
  loadHotFilms
}