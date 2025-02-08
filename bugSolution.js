function foo(a, b) {
  return Number.isNaN(a) && Number.isNaN(b); 
}

console.log(foo(NaN, NaN)); // true
console.log(foo(1, NaN)); //false
console.log(foo(NaN, 2)); // false