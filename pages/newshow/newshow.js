const app = getApp()
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
    status:true
  },
  toastHide: function (event) {
    console.log("触发bindchange，隐藏toast")

    this.setData({ status: true })
  },
  onLoad: function (options) {
    console.log(options.name)
    this.setData({
      name:options.name,
      club:options.club,
      age: options.age,
      nation: options.nation,
      position: options.position,
      shoot: options.shoot,
      pace: options.pace,
      strength: options.strength,
      defence: options.defence,
      dribbling: options.dribbling,
      pass: options.pass,
      mindset: options.mindset
    })
  } ,
  newok:function(e){
    
    console.log("触发了点击事件，弹出toast")
    
    this.setData({ status: false })　　
    var that = this

    wx.request({
      url: 'http://localhost:8888',
      data: {
        pname:this.data.name,
        page:  this.data.age,
        pnation: this.data.nation,
        pclub: this.data.club,
        pposition: this.data.position,
        pshoot: this.data.shoot,
        ppace: this.data.pace,
        pstren: this.data.strength,
        pdefend: this.data.defence,
        pdrib: this.data.dribbling,
        ppass: this.data.pass,
        pmind: this.data.mindset,
        way: "newplayer"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          result: JSON.stringify(res.data)
          
        })
      }
    })
  }
})