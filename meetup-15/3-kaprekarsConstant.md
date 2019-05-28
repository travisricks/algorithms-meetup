# Kaprekars Constant

## Summary

How many times does it take for you to reach 6174?

You are given a 4-digit number with at least two distinct digits.

How many times does your program need to perform the following routine on the given number before you get to 6174 aka Kaprekars Constant?

* Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number)
* Subtract the smaller number from the bigger number

Performing the above routine will always cause you to reach a fixed number: 6174. What's cool about Kaprekars Constant is that performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).

Your program should return the number of times this routine must be performed until 6174 is reached.

## Input

A 4-digit number with two distinct digits (e.g., you will never get 3333).

## Output

Number of times you need to perform the subtracting and arranging routine specified above.

## Example

If your input is 3524, your program should return 3 because of the following steps:

* (1) 5432 - 2345 = 3087
* (2) 8730 - 0378 = 8352
* (3) 8532 - 2358 = 6174

If your input is 2111, your program should return 5 because of the following steps:

* (1) 2111 - 1112 = 0999
* (2) 9990 - 0999 = 8991
* (3) 9981 - 1899 = 8082
* (4) 8820 - 0288 = 8532
* (5) 8532 - 2358 = 6174