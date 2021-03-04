// Anonymous Function
// IIFE - Immediately Invoke Function Expression
(function (a, b, c) {
  console.log(`Result: ${a + b + c}`)
})(2, 3, 4);

(function (a, b, c) {
  let x = 300
  console.log(`X: ${x}`)
})();

(() => {
  console.log('Arrow #01')
})();
(() => console.log('Arrow #02'))();

