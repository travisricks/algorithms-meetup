# Recreate a Loop

## Summary

Create a function `loop` which replicates the functionality of a loop. It should take the following 4 arguments: 
1. `initial`: The starting number.
1. `test`: A test function that determines when the loop should stop.
1. `update`: An update function that changes the starting number after each iteration of the loop.
1. `body`: A body function which is called in each loop iteration with the first argument.

## Example 1

Input:

```
loop(4, function(x) {return x > 0;}, function(x) { return x - 1;}, console.log)
```

Output: 
```
4
3
2
1
```

## Example 2

Input:

```
let array = [];
loop(0, x => x < 5, x => x + 1, array.push)
console.log(array)
```

Output: 
```
[0, 1, 2, 3, 4]
```

#### Hint 
Function should check that the value within the bounds of the test. If it is within the bounds, run the body, and finally run the update and call the function again until it fails the test.
