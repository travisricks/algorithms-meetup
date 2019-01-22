# Border Trench

## Summary

You are skiing with friends in Hokkaido. From the top of the mountain you can see the peaks and valleys of all ski runs below you. Find the longest route you can take before you reach the bottom.
You can only ski towards a cell of lower height
You can only move up down left or right from your current cell

# Inputs

A 2-D Matrix indicating heights like the following:

04, 05, 06, 07, 18, 19,
12, 13, 15, 08, 10, 24,
06, 22, 24, 12, 18, 26
16, 19, 35, 44, 33, 26
32, 16, 14, 12, 34, 26

and a starting coordinate (x, y)
(2, 1) -> 35

# Outputs

A string of the longest ski route possible, indicated by cell heights:
35 -> 24 -> 15 -> 08 -> 07 -> 06 -> 05 -> 04
