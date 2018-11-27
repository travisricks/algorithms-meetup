# Magic Square

## Summary

Given an _n_ x _n_ matrix of numbers, return `true` if it's a magic square where all rows, diagonals, and columns sum to the same number.

## Input

An array of arrays forming an _n_ x _n_ matrix.

## Output

A boolean.

## Example 1

Input:

```
[
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]
]
```

Output: `false` because the rows/columns/diagonals don't add up to the same number.

## Example 2

Input:

```
[
[8, 3, 4],
[1, 5, 9],
[6, 7, 2]
]
```

Output: `true` because all rows, diagonals, and columns equal 14.