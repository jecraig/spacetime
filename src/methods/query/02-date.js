const set = require('../set/set')
const days = require('../../data/days')
const walkTo = require('../set/walk')

const methods = {
  // # day in the month
  date: function(num) {
    if (num !== undefined) {
      let s = this.clone()
      s.epoch = set.date(s, num)
      return s
    }
    return this.d.getDate()
  },

  //like 'wednesday' (hard!)
  day: function(input) {
    if (input === undefined) {
      return this.d.getDay()
    }
    let original = this.clone()
    let want = input
    // accept 'wednesday'
    if (typeof input === 'string') {
      input = input.toLowerCase()
      want = days.short().indexOf(input)
      if (want === -1) {
        want = days.long().indexOf(input)
      }
    }
    //move approx
    let day = this.d.getDay()
    let diff = day - want
    let s = this.subtract(diff * 24, 'hours')
    //tighten it back up
    walkTo(s, {
      hour: original.hour(),
      minute: original.minute(),
      second: original.second()
    })
    return s
  },

  //these are helpful name-wrappers
  dayName: function(input) {
    if (input === undefined) {
      return days.long()[this.day()]
    }
    let s = this.clone()
    s = s.day(input)
    return s
  },

  //either name or number
  month: function(input) {
    if (input !== undefined) {
      let s = this.clone()
      s.epoch = set.month(s, input)
      return s
    }
    return this.d.getMonth()
  }
}
module.exports = methods
