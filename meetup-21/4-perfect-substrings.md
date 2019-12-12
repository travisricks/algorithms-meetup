# Perfect Substrings

## Summary

There is s that consists of digits from 0 to 9, and an integer k. A substring s[L:R] (where 0 = L = R < sizeof(s) ) is a contiguous group of characters with `s`.

A substring is called a perfect substring if all of its elements occur exactly `k` times.

Calculate the number of perfect substrings in `s`.

## Inputs

`s`: a string where the value of each element `s[i]` is described by the character at position `i` (where `0 = i < n`).

`k`: an integer that denotes the required frequency of the substring.

## Output

Your function must return an integer that represents the number of perfect substrings in the given string.

## Example

`s = 1102021222` and `k = 2`. The 6 perfect substrings are:

```
    s[0:1] = 11
    s[0:5] = 110202
    s[1:6] = 102021
    s[2:5] = 0202
    s[7:8] = 22
    s[8:9] = 22
```