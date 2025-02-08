# JavaScript NaN Comparison Bug

This repository demonstrates a common error in JavaScript related to comparing NaN (Not a Number) values using strict equality.  NaN is a special value that represents an undefined or unrepresentable numerical result.

The `bug.js` file shows the incorrect implementation, which uses `===` to compare NaN values. The `bugSolution.js` provides the corrected version using `Number.isNaN()` for proper NaN comparison. 

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run each file using a JavaScript interpreter (e.g., Node.js).

## Explanation of the Bug

The strict equality operator (`===`) in JavaScript is designed to compare values for both type and value equality. However, because NaN is not equal to itself, the strict equality comparison will always return `false` when comparing any values to NaN, including NaN itself. This behavior often leads to unexpected results in comparisons.