# Create a Memo

## Summary

Create a function `memoCreator` which takes a function `func` as an argument and returns a function that when called multiple times with the same arguments, only runs `func` once and stores it's result in a memo. If called a second time, instead of calling `func` again, return the value from the memo.

## Input

Your input will be a function.

## Output

Your output should be a function. That function should be executable and return a string containing the value and stating whether the value is calculated or from memory.

## Example 1

```
function addTwo(x){
  return x + 2;
}

let plusTwoCalc = memoCreator(function);

plusTwoCalc(2);
//should log or return '4: calculated'

plusTwoCalc(2);
//should log or return '4: from memory'

plusTwoCalc(4);
//should log or return '6: calculated'
```