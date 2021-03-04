const array = [1, 2, 3, 4, 5, 6]

const result = array.filter(el => el > 4)
console.log(array)
console.log(result)

const result2 = array.filter(el => el % 2 == 0)
console.log(result2)

let students = [
  {
    name: 'Jake',
    score: 6.4
  },
  {
    name: 'Emma',
    score: 9.4
  },
  {
    name: 'Peter',
    score: 9.1
  },
  {
    name: 'Jaque',
    score: 4.1
  }
]
let eleme = el => el.score >= 9
const nota = students.filter(eleme)
console.log(nota)