Page({


  data: {
    result: ''
    
  },
  onLoad: function (options) {

    var result = JSON.parse(options.result)
    console.log(result)
    result = result.result
    console.log(result)
    this.setData({
      result: result
    })

  },
    choose: function (e) {
    var num = e.currentTarget.dataset.index
    console.log(this.data.result[num])
    var resultnum = this.data.result[num]
    resultnum = JSON.stringify(resultnum)
    wx.navigateTo({
      url: '../comparetwo/comparetwo?first=' + resultnum
    })

  }

})