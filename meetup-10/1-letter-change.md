# Word Change

## Summary

Your boss misspelled a word and you have the very annoying job of going through and changing the wrong word to the correct one. Instead of doing this manually, you'll write a program to do it for you!

Write a function that will do it for you!

## Input

Your function needs to take three string inputs:

1. The incorrect word
2. The correct word that replaces it
3. The text that has needs to be changed

## Output

Your function should output the corrected text as a string

## Examples

### Example A

Input:

1. "flew"
1. "flu"
1. "In January, Time reported that the 2017-18 flew season was one of the worst seasons in the past 13 years.

“The dominant viral strain, H3N2, was a particularly severe form of influenza, leading to widespread and serious illness across the country,” according to the Time article. “The flew and its complications killed around 80,000 people last year, the CDC estimates, including 180 children. That’s the highest flew death toll in four decades.”

Output:

"In January, Time reported that the 2017-18 flu season was one of the worst seasons in the past 13 years.

“The dominant viral strain, H3N2, was a particularly severe form of influenza, leading to widespread and serious illness across the country,” according to the Time article. “The flu and its complications killed around 80,000 people last year, the CDC estimates, including 180 children. That’s the highest flu death toll in four decades.”

### Example B

1. "cat"
1. "dog"
1. "Gadget is a laid back guy. He has lived with another cat, but will still need a gradual introduction to any resident cat. His history with dogs and small kids is unknown. Gadget tested positive for FIV which is a condition that can reduce his immunity to diseases. It is spread usually during cat fights. It’s not a disease that can be spread to other species and FIV cats often live long, happy lives. Do some research and consider adopting a friendly, FIV positive cat like Gadget. ”

Output:

"Gadget is a laid back guy. He has lived with another dog, but will still need a gradual introduction to any resident dog. His history with dogs and small kids is unknown. Gadget tested positive for FIV which is a condition that can reduce his immunity to diseases. It is spread usually during dog fights. It’s not a disease that can be spread to other species and FIV cats often live long, happy lives. Do some research and consider adopting a friendly, FIV positive dog like Gadget.”