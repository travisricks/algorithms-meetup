# Create a Magic Square

## Summary

Given an _n_ x _n_ matrix of numbers, return a magic square where all rows, diagonals, and columns sum to the same number by changing the minimum number of values from the given square.

## Input

An array of arrays forming an _n_ x _n_ matrix.

## Output

An array of arrays forming an _n_ x _n_ matrix where all rows, diagonals, and columns sum to the same number.

## Example 1

Input:

```
[
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]
]
```

Output:

```
[
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2]
]
```

Only 3 values were replaced from [0, 0], [1, 2], and [2, 1].

## Constraints

There are no negative numbers. What's the most efficient time complexity you can get this to?