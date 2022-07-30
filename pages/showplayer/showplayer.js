Page({
  data: {
    name: '',
    club: '',
    age: '',
    nation: '',
    position: '',
    shoot: '',
    pace: '',
    strength: '',
    defence: '',
    dribbling: '',
    pass: '',
    mindset: '',
    eva:'',
    youreva:''
    },

  onLoad: function (options) {
    console.log(options.result)
    var result=JSON.parse(options.result)
    console.log(result)
    this.setData({
      name: result.name,
      club: result.club,
      age: result.age,
      nation:result.nation,
      position: result.position,
      shoot: result.shoot,
      pace: result.pace,
      strength:result.strength,
      defence: result.defence,
      dribbling: result.dribbling,
      pass: result.pass,
      mindset:result.mindset,
      eva:result.eva
    })
  },
  score:function(e){
    this.setData({
      youreva:e.detail.value
    })
  },
  okscore:function(e){
    this.setData({
      youreva:this.data.youreva
    })
    var that=this
    wx.request({
      url: 'http://localhost:8888',
      data: {
        eva: this.data.youreva,
        way: "addscore",
        name:this.data.name
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var result = JSON.stringify(res.data)
        wx.showToast({
          title: '打分成功',
        })
        //result=JSON.parse(result)
        
  }
  })
  }
  })