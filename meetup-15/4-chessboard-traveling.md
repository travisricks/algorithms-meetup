# Traveling Chessboard

## Summary

How many possible ways can you get from point A to point B on an 8 x 8 chessboard by only moving up and to the right?

## Input

Input is a string consisting of the location of a space on a standard 8 x 8 chessboard.

The string should represent the location of point A and point B, with no other pieces along the space of the chessboard.

The structure of the string will be the following: `"(x y)(a b)"` where `"(x y)"` represent the position you are currently on.

`"(a b)"` represents some other space on the chess board that represents the final destination.

```
1 <= x <= 8
1 <= y <= 8
a > x
b > y
```

## Output

A number representing all possible ways you can go from Point A to Point B by only moving up and right.

## Example

Input: `"(1 1)(2 2)"`

Output: `2` because there are only two possible ways to travel from (1 1) to (2 2) while only moving up and to the right.

## Constraints

Can you do this in less than O(n^2)?