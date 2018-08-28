# Share the knowledge

## Summary

**Pair programming** is a tool that development teams use for sharing knowledge between developers and improving the quality of code. With _pair programming_, two developers work together on the same code at the same time. One of the advantages of _pair programming_ is that every developer works with every other developer in the team.

A _knowledge silo_ is when certain knowledge is known by a small group of people, but not known by others. Your mission is to assign developers together in a way that minimizes the _knowledge silos_. In other words, pair developers together who have worked together the least often.

## Input

A set of developers, with each developer mapped to their previous partners and counts. For example:

```
{
  "alice": {
    "bob": 1,
    "dave": 1
  },
  "bob": {
    "alice": 1,
    "carol": 1
  },
  "carol": {
    "bob": 1,
    "dave": 1
  },
  "dave": {
    "alice": 1,
    "carol": 1
  }
}
```

## Output

A set of all developers mapped to the partner that they should be paired with next. For example:

```
{
  "alice": "carol",
  "bob": "dave",
  "carol": alice",
  "dave": "bob"
}
```

## Example

The above `input` and `output` cover a simple case.

Here's another example case:

### Input

```
{
  "alice": {
    "bob": 3,
    "carol": 2,
    "dave": 2
  },
  "bob": {
    "alice": 3,
    "carol": 3,
    "dave": 2
  },
  "carol": {
    "alice": 2,
    "bob": 3,
    "dave": 1
  },
  "dave": {
    "alice": 2,
    "bob": 2,
    "carol": 1
  }
}
```

### Output

```
{
  "alice": "bob",
  "bob": "alice",
  "carol": "dave",
  "dave": "carol"
}
```

## Constraints

Let `d` be the number of _developers_ on the team.

Brute force would require trying all possible combinations, which is `O(d!)` time. Can you do it in `O(d)` time?
