function logParams(a, b, c) {
  console.log(a, b, c)
}

logParams(2, 3, 4, 5, 6)
logParams(2, 3, 4)
logParams(2, 3)
logParams(2)
logParams()

function defaultParams(a, b, c = 0) {
  console.log(a, b, c)
}
defaultParams(1, 2, 3)
defaultParams(1, 2)
defaultParams(1)
defaultParams()
// ========================
function l(numeros){
  for(let n of numeros){
    console.log(n)
  }
}
l([2,3,4,5,6,7])

// Spread/Rest
function logNums(...nums) {
  // console.log(Array.isArray(nums))
  console.log(...nums)
}
logNums(1, 2)

function sumAll(...nums){
  let total = 0
  for(let n of nums){
    total+=n
  }
  return total
}
console.log(sumAll(2,2,3,8))

// let numeros = [290,1,4,5,6,28,15,0]
function eMaior(...numeros){
  let maior=numeros[0]  
  let menor=numeros[0]  
  for(let n of numeros){
    if(n>maior){
      maior=n
    }
    if(n<menor){
      menor=n
    }
  }
  return {maior, menor}
}
console.log(eMaior(1,5,6,3,44,98))