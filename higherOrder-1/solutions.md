# Solutions

These are the solutions for the exercises in the Higher Order Functions Workshop.

## Return a Function

```
function multiplier(coefficient){
  return function(number){
    return coefficient * number;
  }
}
```

## Pass in a Function

```
function execute(param, func){
  return func(param);
}
```

## Light Switch
```
function switchCreator(){
  let lightsOn = false;
  return function(){
    lightsOn = !lightsOn;
    if(lightsOn){
      console.log("Lights On!");
    } else {
      console.log("Lights Off!");
    }
  }
}
```
## Memo Creator

```
function memoCreator(func){
  let memo = {};
  return function(x){
    if(memo[x]){
      return "" + memo[x] + ": from memory";
    } else {
      memo[x] = func(x); 
      return "" + memo[x] + ": calculated";
    }
  }
}
```

## Recreate a Loop

```
function loop(initial, test, update, body){
  if(test(initial)){
    body(initial);
    loop(update(initial), test, update, body);
  }
}
```