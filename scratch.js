import spacetime from './src/index.js'

// console.log(spacetime('Feb 29 2001').iso())

const year = 2025
// for (let w = 1; w < 52; w += 1) {
//   const date = spacetime.now().year(year).week(w);
//   if (date.week() !== w) {
//     console.log(date.week(), w)
//   }
// }

// const date = spacetime.now().year(year).week(1);
// console.log(date.iso())
// console.log(date.week()) 

let date = spacetime('2024-12-30')
console.log(date.week())