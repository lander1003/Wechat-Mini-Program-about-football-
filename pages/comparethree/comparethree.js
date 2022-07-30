Page({


  data: {
    first: '',
    second:''

  },
  onLoad: function (options) {

    var resecond = JSON.parse(options.second)
    console.log(resecond)
    resecond=resecond.result
    console.log(resecond)
   var refirst=options.first
   // var refirst=JSON.parse(options.first)
  console.log(resecond)
  console.log(refirst)
    this.setData({
      first:refirst,
      second:resecond
    })

  },
  choose: function (e) {
    var num = e.currentTarget.dataset.index
    console.log(this.data.second[num])
    var resultsecond = this.data.second[num]
    resultsecond= JSON.stringify(resultsecond)
    wx.navigateTo({
      url: '../compareshow/compareshow?first=' + this.data.first+'&second='+ resultsecond
    })

  }

})