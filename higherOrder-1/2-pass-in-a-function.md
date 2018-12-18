# Pass In A Function

## Summary

Create a function which takes a value and another function as arguments.
It should return the results of the argument function called with the value.

## Input

Your input will be a value (i.e. integer, string, or boolean) and a function.

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