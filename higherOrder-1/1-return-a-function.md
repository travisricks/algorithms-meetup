# Return A Function

## Summary

Create a function which takes a single integer argument and returns a new function. The resulting function takes an integer argument and multiplies it by the integer from the original function creator.

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