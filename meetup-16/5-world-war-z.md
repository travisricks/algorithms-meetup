# World War Z

## Summary

You are given a `N`x`N` board with zombies, people and walls scattered all about. You are given only one grenade.

Your mission is to kill as many zombies as possible without killing too many people.

A few constraints:

- the impact of the grenade travels horizontally and vertically only
- the impact goes through zombies but NOT walls and of course, ends at the border
- can only place grenades on spaces NOT occupied by walls or zombies
- you are allowed to have casualties (killing of innocent lives), but to justify killing a person, your grenade has to kill at least 3 zombies---this means that if your grenade kills 1 person and 2 zombies only, that is not allowed.
- your ultimate mission is to kill as many zombies as possible--so killing 3 zombies and 1 person is better than killing 2 zombies.

## Input

A 2-D matrix of `N`x`N` with zombies represented by `2`, human represented as `3`, and walls represented by `1`. Empty spaces are marked as 0.

## Output

A simple tuple of the row index and column index where the grenade kills the most zombies.

If there are multiple possibilities that kill the same number of zombies, return the appropriate coordinates in a list.

## Example

Input: 

```
[
  [0, 0, 0, 0, 0, 0],
  [1, 2, 3, 0, 0, 2],
  [0, 0, 0, 0, 0, 0],
  [2, 0, 0, 1, 2, 0],
  [0, 0, 1, 0, 0, 0],
  [2, 3, 0, 0, 0, 0]
]
```

Output: `[1, 4]`

Grenade denoted with an `X`:

```
[
  [0, 0, 0, 0, 0, 0],
  [1, 2, 3, 0, X, 2],
  [0, 0, 0, 0, 0, 0],
  [2, 0, 0, 1, 2, 0],
  [0, 0, 1, 0, 0, 0],
  [2, 3, 0, 0, 0, 0]
]
```

## Constraints

5 < `N` < 10^5

3 <= zombies

humans <= zombies / 2
