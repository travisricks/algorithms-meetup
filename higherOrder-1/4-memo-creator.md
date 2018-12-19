# Create a Memo

## Summary

Create a function `memoCreator` which takes a function `func` as an argument and returns a function that when called multiple times with the same arguments, only runs `func` once and stores it's result in a memo. If called a second time, instead of calling `func` again, return the value from the memo.

## Input

Your input is a function `func`.

## Output

Your output should be a function. The resulting function when executed will `console.log` string containing the value and stating whether the value is calculated or from memory.

## Example 1

```
function addTwo(x){
  return x + 2;
}

let plusTwoCalc = memoCreator(function);

console.log(plusTwoCalc(2))
//should log '4: calculated'

console.log(plusTwoCalc(2))
//should log '4: from memory'

console.log(plusTwoCalc(4))
//should log '6: calculated'
```