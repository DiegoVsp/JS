/*
  A programming language is said to have
  First-class functions when functions in that
  language are treated like any other variable
*/
let x = 10
const add = function (a, b) {
  return a + b
}

const soma = (a, b) => {
  return a + b
}

const subtração = (a, b) => a - b

const multiplicacao = function (a, b) {
  return a * b
}
const divisao = (a, b) => {
  return a / b
}
console.log(multiplicacao(20, x))