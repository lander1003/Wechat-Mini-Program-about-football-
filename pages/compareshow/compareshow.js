Page({
  data: {
    name1: '',
    club1: '',
    age1: '',
    nation1: '',
    position1: '',
    shoot1: '',
    pace1: '',
    strength1: '',
    defence1: '',
    dribbling1: '',
    pass1: '',
    mindset1: '',
    eva1:'',
    name2: '',
    club2: '',
    age2: '',
    nation2: '',
    position2: '',
    shoot2: '',
    pace2: '',
    strength2: '',
    defence2: '',
    dribbling2: '',
    pass2: '',
    mindset2: '',
    eva2:''
  },

  onLoad: function (options) {
    console.log(options.first)
    console.log(options.second)
    var first = JSON.parse(options.first)
    var second=JSON.parse(options.second)
    this.setData({
      name1: first.name,
      club1: first.club,
      age1: first.age,
      nation1: first.nation,
      position1: first.position,
      shoot1: first.shoot,
      pace1: first.pace,
      strength1: first.strength,
      defence1: first.defence,
      dribbling1: first.dribbling,
      pass1: first.pass,
      mindset1: first.mindset,
      eva1:first.eva,
      name2: second.name,
      club2: second.club,
      age2: second.age,
      nation2: second.nation,
      position2: second.position,
      shoot2: second.shoot,
      pace2: second.pace,
      strength2: second.strength,
      defence2: second.defence,
      dribbling2: second.dribbling,
      pass2: second.pass,
      mindset2: second.mindset,
      eva2:second.eva
    })
  }
})