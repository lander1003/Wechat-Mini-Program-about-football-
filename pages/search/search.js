var app = getApp();
Page({
  data:{
    clubinput:'',
    playerinput:'',
    theinput:'',
    
   
  },
  //获取输入框的内容，并赋值到text中
 
  talks: function (e) {
    this.setData({
      theinput: e.detail.value
    })
  },
  oksclub: function (e) {
    this.setData({
      clubinput:this.data.theinput 
    })
    var that=this
 
    wx.request({
      url: 'http://localhost:8888',
      data: {
        club: this.data.clubinput,
        way: "searchclub"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var result=JSON.stringify(res.data)
        //result=JSON.parse(result)
        console.log('../searchclub/searchclub?result=' + result)
        wx.navigateTo({
          url: '../searchresult/searchresult?result=' + result
        })
       }
      })
   
    
       
  },
  oksplayer: function (e) {
    this.setData({
      playerinput:this.data.theinput
    })
    var that = this

    wx.request({
      url: 'http://localhost:8888',
      data: {
        player: this.data.playerinput,
        way: "searchplayer"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var result = JSON.stringify(res.data)
        wx.navigateTo({
          url: '../searchresult/searchresult?result=' + result
        })
      }
    })

  }
 ,



})
