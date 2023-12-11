// const spacetime = require('./builds/spacetime.cjs')
import spacetime from './src/index.js'

let s = spacetime(null, 'Africa/Cairo')
console.log(s.time())
console.log(s.timezone())
s = s.minus(5, 'months')
console.log(s.time())
console.log(s.timezone())

// s = spacetime(null, 'America/Toronto')
// console.log(s.time())
// console.log(s.timezone())
