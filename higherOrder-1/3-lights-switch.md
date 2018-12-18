# Lights Switch

## Summary

Create a function that returns another function. 
The resulting function contains a boolean variable `lightsOn` and when called will change `lightsOn` from true to false and vice versa.

## Input

There is no input.

## Output

Your output should be a function. When called, the function will switch the state and `console.log` the current state of `lightsOn`.

## Example 1

```
let lightSwitch = switchCreator();
lightSwitch();
//should output: 'Lights On!'
lightSwitch();
//should output: 'Lights Off!'
```