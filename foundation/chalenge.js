// create a range function
// function range(a, b, c) {
//   let nums = []
//   for (let i = 1; i <= a; i++) {
//     nums.push(i)
//   }
//   return nums
// }
// console.log(range(5))

// range(6,11)
// function range2(a, b, c) {
//   const n1 = b === undefined ? 1 : a
//   const n2 = b === undefined ? a : b

//   let nums = []
//   for (let i = n1; i <= n2; i++) {
//     nums.push(i)
//   }
//   return nums
// }
// console.log(range2(6,11))

// range(10,19,2)
// function range2(a, b, c) {
//   const n1 = b === undefined ? 1 : a
//   const n2 = b === undefined ? a : b
//   const n3 = c === undefined ? 1 : c

//   let nums = []
//   for (let i = n1; i <= n2; i += n3) {
//     nums.push(i)
//   }
//   return nums
// }
// console.log(range2(10, 19, 2))

// range(6, 2)

// function range2(a, b,c=1) {
//   const n1 = b === undefined ? 1 : a
//   const n2 = b === undefined ? a : b
//   // const n3 = c === undefined ? 1 : c
//   const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c)

//   let nums = []
//   for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
//     nums.push(i)
//   }
//   return nums
// }
// console.log(range2(6, 2))

// range(8, -3,4)
function range2(a, b, c = 1) {
  const n1 = b === undefined ? 1 : a
  const n2 = b === undefined ? a : b
  const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c)

  let nums = []
  for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
    nums.push(i)
  }
  return nums
}
console.log(range2(8, -3, 4))