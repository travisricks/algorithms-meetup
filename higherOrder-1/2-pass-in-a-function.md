# Pass In A Function

## Summary

Create a function which takes two arguments: a value and a function.
The function should return the result of the function called with the value as an argument.

## Input

Your input will be a value (integer, string, boolean) and a function.

## Example 1

```
execute(5, console.log);
//should log '5' to the console
```

## Example 2

```
function positive(x) {
  if(x > 0){
    return true;
  }
  return false
}
execute(20, positive)
// should return 'true'

execute(-5, positive)
// should return 'false'
```