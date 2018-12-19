# Return A Function

## Summary

Create a function `multiplier` which takes a number `x` as an argument and returns a new function. The resulting function takes another number argument `y`, multiplies it by the first input `x`, and returns the result.

## Input

Your input an integer which is multiplied with another input.
Assume all inputs are integers.

## Output

Your output should be a function. The returned function should multiply an argument by the specified multiplier. 

## Example 1

```
let double = multiplier(2);
let triple = multiplier(3);

double(4)
//should output: 8

triple(5)
//should output: 15
```