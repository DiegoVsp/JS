const array = [1, 2, 3, 4, 5, 6]

let sum = (total, el) => total + el
let result = array.reduce(sum, 0) //segundo parametro está sendo o valor inicial

const avg = (acc, el, indice, array) => {
  if (indice === array.length - 1) {
    return (acc + el) / array.length
  } else {
    return acc + el
  }
}
let result2 = array.reduce(avg, 0) 
console.log(result)
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

let media = students.map(el => el.score).reduce((total, el) => total + el) / students.length
let somaNota = students.map(el => el.score).reduce((total, el) => total + el)
console.log(`SOMA: ${somaNota}`)
console.log(`Média: ${media}`)
