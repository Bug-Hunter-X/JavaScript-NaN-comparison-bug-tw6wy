function foo(a, b) {
  if (a === b) {
    return true; // This will cause the bug if a and b are NaN
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); //false, should be true