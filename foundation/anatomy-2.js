// Anonymous Function
(function(a,b,c){
  return a+b+c
})


// Function expression

let sum = function(a,b){
  return a+b
} 
console.log(sum(1,2))

const anotherSum = sum
console.log(anotherSum(2,2))