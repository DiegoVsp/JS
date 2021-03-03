// Function Expression
const incremento1 = function (n) {
  return n + 1
}
// Arrow Function is always anonymous
const incremento2 = (n) => {
  return n + 1
}

const incremento3 = n => {
  return n + 1
}
const incremento4 = n => n + 1

console.log(incremento2(2))
console.log(incremento3(3))
console.log(incremento4(4))