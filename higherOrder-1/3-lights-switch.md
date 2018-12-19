# Lights Switch

## Summary

Create a function `switchCreator` that returns another function. 
The resulting function should close over a boolean variable `lightsOn` and when called will toggle the state of `lightsOn` and log the current state to the console.

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