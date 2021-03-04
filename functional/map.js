const ar = [1, 2, 3, 4, 5, 6]

const double = ar.map(el => el * 2)
console.log(double)

let students = [
  {
    name: 'Jake',
    score: 6.4
  },
  {
    name: 'Ana',
    score: 9.4
  },
  {
    name: 'Jaque',
    score: 7.1
  },
  {
    name: 'Jaque',
    score: 4.1
  }
]
const getScore = el => el.score
const result = students.map(getScore).map(Math.ceil).map(el => el * 2)
// const result = students.map(el => Math.ceil(el.score))
console.log(result)