const app = getApp()
Page({
  data: {
    name: '',
    club: '',
    age: '',
    nation:'',
    position:'',
    shoot:'',
    pace:'',
    strength:'',
    defence:'',
    dribbling:'',
    pass:'',
    mindset:''
  },
  getname: function (e) {
    this.setData({
      name: e.detail.value
    })
  }, 
  getclub: function (e) {
    this.setData({
      club: e.detail.value
    })
  },
  getage: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  getnation: function (e) {
    this.setData({
      nation: e.detail.value
    })
  },
  getposition: function (e) {
    this.setData({
      position: e.detail.value
    })
  },
  getshoot: function (e) {
    this.setData({
      shoot: e.detail.value
    })
  },
  getpace: function (e) {
    this.setData({
      pace: e.detail.value
    })
  },
  getstrength: function (e) {
    this.setData({
      strength: e.detail.value
    })
  },
  getdefence: function (e) {
    this.setData({
      defence: e.detail.value
    })
  },
  getdribbling: function (e) {
    this.setData({
      dribbling: e.detail.value
    })
  },
  getpass: function (e) {
    this.setData({
      pass: e.detail.value
    })
  },
  getmindset: function (e) {
    this.setData({
      mindset: e.detail.value
    })
  },
  playerok:function(e){
  
    wx.navigateTo({
      url: '../newshow/newshow?name=' + this.data.name + "&club=" + this.data.club + "&age=" + this.data.age + "&nation=" + this.data.nation + "&position=" + this.data.position + "&shoot=" + this.data.shoot + "&pace=" + this.data.pace + "&strength=" + this.data.strength + "&defence=" + this.data.defence + "&dribbling=" + this.data.dribbling + "&pass=" + this.data.pass + "&mindset=" + this.data.mindset ,
    })
  } 

  })