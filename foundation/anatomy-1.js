// Function declaration

function sayHello(){
  console.log('Hello!')
}

sayHello()

function sayHello2(name){
  console.log(`Hello ${name}!`)
}

sayHello2('Diego')

function returnHi(){
  return 'Hi'
}

let hi = returnHi()
console.log(hi)
console.log(returnHi())

function returnHi2(name){
  return `Hi ${name}!`
}
console.log(returnHi2('John'))