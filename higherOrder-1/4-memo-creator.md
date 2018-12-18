# Create a Memo

## Summary

Create a function which returns a memo function that stores an input and its result. If the function is called with a new input, it will add it to the memo. If the function is called with a previously run input, it will return the stored answer.

## Input

Your input will be a function.

## Output

Your output should be a function. That function should be executable and return a string containing the value and stating whether the value is calculated or from memory.

## Example 1

```
function addTwo(x){
  return x + 2;
}

let plusTwoCalc = memo-creator(function);

plusTwoCalc(2);
//should log or return '4: calculated'

plusTwoCalc(2);
//should log or return '4: from memory'

plusTwoCalc(4);
//should log or return '6: calculated'
```