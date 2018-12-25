# Return A Function

## Summary

Create a function `multiplier` which takes a number (`coefficient`) as an argument and returns a new function. The resulting function takes another number argument (`number`), multiplies it by the first input (`coefficient`), and returns the result.

## Input

`multiplier` will take an integer (`coefficient`) that becomes the multiplier in the resulting function.
The resulting function will take an integer (`number`) as an argument.
Assume (`coefficient`) and (`number`) inputs only take integers.

## Output

Your output should be a function. The returned function should multiply an argument by the specified multiplier. 

## Example 1

```
let double = multiplier(2);
let triple = multiplier(3);

console.log(double(4))
//should output: 8

console.log(triple(5))
//should output: 15
```