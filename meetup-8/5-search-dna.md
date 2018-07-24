# Search DNA

## Summary

You've been hired by a bio-tech company to efficiently search strings of DNA for a matching sequences.

Basic background of your algorithm. Maybe include a story?? :)

## Input
1) A sequence of DNA you will be searching AGAINST.
2) A sequence of DNA that you will be searching FOR

## Output
Return true if Input #2 exists in Input #1. Else, return false

## Example
Inputs:
1) AATTCCGG
2) TCCG

Output: true

============

Inputs:
1) AATTCCGG
2) AATTT

Output: false

============

Input
1) ATCGATCGATCGAA
2) ATCGATCGAA

Output: true

============

Input
1) ATCGATCGATCGA
2) ATCGAA

Output: false

## Constraints

Construction of your state machine may take an arbitrary amount of time. However, your state machine must search DNA strings in linear time O(n) with respect to Input #1 (the DNA sequence you are searching against). In practice, each character in Input #1 should only be read once.

## Tips

Optional place to put some tips to help people out!
